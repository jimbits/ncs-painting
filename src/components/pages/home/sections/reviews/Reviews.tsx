"use client";

import { useEffect, useState } from "react";
import { Review, ReviewsData, ReviewApiResponse } from "./Reviews.types";
import { formatReviewDate } from "./utils/dateFormatters";
import reviewsData from "./data/reviews.json";

export const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call and transform data
    const loadReviews = () => {
      try {
        // Transform API data to client format
        const transformedReviews: Review[] = (
          reviewsData.reviews as ReviewApiResponse[]
        ).map((review) => ({
          ...review,
          date: new Date(review.date), // Convert ISO string to Date
        }));

        setReviews(transformedReviews);
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  if (loading) {
    return <div className="p-8">Loading reviews...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Customer Reviews</h1>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.reviewer.name}
                </h3>
                <p className="text-sm text-gray-600">{review.reviewer.city}</p>
              </div>
              <div className="text-right">
                <div className="text-lg text-yellow-400">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-gray-500">
                  {formatReviewDate.short(review.date)}
                </p>
              </div>
            </div>

            {/* Project Type */}
            <div className="mb-3">
              <span className="inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {review.projectType}
              </span>
            </div>

            {/* Review Content */}
            <p className="mb-4 text-gray-700">{review.content}</p>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Review ID: {review.id}</span>
              <span>{formatReviewDate.relative(review.date)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-semibold">Reviews Summary</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {reviews.length}
            </div>
            <div className="text-gray-600">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {(
                reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
              ).toFixed(1)}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {new Set(reviews.map((r) => r.projectType)).size}
            </div>
            <div className="text-gray-600">Project Types</div>
          </div>
        </div>
      </div>
    </div>
  );
};
