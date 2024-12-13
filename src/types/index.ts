export interface Prayer {
  id: number;
  arabicText: string;
  translations: {
    english: string;
    urdu: string;
  };
  recommendedDaily: number;
  colour: string;
}

export interface DailyProgress {
  prayerId: number;
  date: string;
  count: number;
}
