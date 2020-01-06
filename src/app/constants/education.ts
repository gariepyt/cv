import Education from '../interfaces/education.interface'

const EDUCATION: Education[] = [{
  school: 'Oregon State University',
  degree: 'Bachelor of Science',
  fieldOfStudy: 'Computer Science',
  startDate: new Date(2015, 0, 5),
  endDate: new Date(2016, 5, 11),
  grade: 3.73,
  awards: ['Honor Roll']
}, {
  school: 'Drexel University',
  degree: 'Bachelor of Science',
  fieldOfStudy: 'Film & Video',
  startDate: new Date(2010, 8),
  endDate: new Date(2014, 3),
  grade: 3.80,
  awards: ['Magne Cum Laude']
}]

export default EDUCATION
