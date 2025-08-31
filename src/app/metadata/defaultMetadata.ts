import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template:
      "Edmonton House Painters | Roll On Quality Painting - Residential Interior & Exterior Painters",
    default: "Edmonton Professional House Painters | Roll On Quality Painters",
  },
  description:
    "Roll On Quality Painting - Edmonton's trusted residential & commercial painters with 15 years experience. Interior, exterior, cabinet refinishing, eco-friendly paints. Serving Edmonton, Sherwood Park, St Albert. Free estimates 780-722-5544",
  keywords: [
    "Edmonton painters, residential painting Edmonton, commercial painting Edmonton, interior painting, exterior painting, cabinet refinishing, drywall repair, eco friendly paint, painting contractors Edmonton",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg" }],
  },
  authors: [{ name: "James Foley" }],
  creator: "James Foley",

  robots: {
    index: true,
    follow: true,
  },
};
