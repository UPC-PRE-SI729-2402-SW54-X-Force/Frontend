export interface Reservation {
  id?: number;
  userId: number;
  offerId: number;
  reservationDate: Date;
  startDate: Date;
  endDate: Date;
  status: string;
  cost: number;
}

