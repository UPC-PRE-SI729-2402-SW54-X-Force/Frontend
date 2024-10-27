export interface Offer {
  id: number;
  user_id: number;
  owner?: string;
  car: string;
  model: string;
  year: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  destination: string;
  date: Date;
  insurance: string;
  premium: string;
}
