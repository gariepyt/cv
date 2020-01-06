export default interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade: number;
  awards?: string[];
}
