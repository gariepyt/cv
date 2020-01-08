import Volunteer from '../interfaces/volunteer.interface';

const VOLUNTEER: Volunteer[] = [{
  position: 'Assistant Scoutmaster',
  company: 'Boy Scouts of America',
  startDate: new Date(2014, 10),
  endDate: new Date(2015, 9),
  description: 'Designed lessons for the scouts to instruct them on leadership and organization skills.'
}, {
  position: 'Film Judge',
  company: 'Beaverton School District',
  startDate: new Date(2011, 2),
  endDate: new Date(2015, 3),
  description: 'Critiqued student-made films for the school district’s film festival, Signal-To-Noise.'
}]

export default VOLUNTEER
