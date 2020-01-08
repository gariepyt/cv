export default interface Work {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  city: string;
  state: string;
  description: string[];
}
