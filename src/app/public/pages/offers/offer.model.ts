export interface Offer {
  id: number;
  owner: string;
  car: {
    model: string;
    year: number;
    image: string;
  };
  title: string;
  subtitle: string;
  description: string;
  status: string;
}
