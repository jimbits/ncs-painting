export interface ReviewApiResponse {
  id: string;
  projectType: string;
  content: string;
  date: string;
  rating: number;
  reviewer: {
    name: string;
    city: string;
    email: string;
  };
}
export interface Review {
  id: string;
  rating: number;
  content: string;
  date: Date; // Converted to Date object
  projectType: string;
  reviewer: {
    name: string;
    city: string;
    email: string;
  };
}

// Raw data from JSON/API
export interface ReviewsData {
  reviews: ReviewApiResponse[];
}
