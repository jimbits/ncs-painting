export interface Review {
  id: string;
  date: string;
  body: string;
  name: string | null;
  location: string | null;
  job: string | null;
  rating: number;
  responseDate: string | null;
  response: string | null;
}
