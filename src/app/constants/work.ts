import Work from "../interfaces/work.interface";

const WORK: Work[] = [{
  position: 'Senior Frontend Engineer',
  company: 'Motion Recruitment Partners',
  startDate: new Date(2019, 4),
  city: 'Sunnyvale',
  state: 'CA',
  description: [
    'Build website features for Walmart Labs',
    'Develop online grocery services using React with Redux',
    'Encourage coding excellence within teams to improve site performance',
  ]
}, {
  position: 'Front End Engineer',
  company: 'Cape',
  startDate: new Date(2018, 9),
  endDate: new Date(2019, 2),
  city: 'Redwood City',
  state: 'CA',
  description: [
    'Streamlined remote control system for flying drones',
    'Upgraded systems to the latest version of Angular',
    'Improved site to responsively fit screen sizes',
    'Built automated tests to run in CircleCI'
  ]
}, {
  position: 'UI Developer',
  company: 'Snap! Finance',
  startDate: new Date(2018, 8, 6),
  endDate: new Date(2018, 9),
  city: 'Salt Lake City',
  state: 'UT',
  description: [
    'Produced web applications using Angular, Material, & SASS',
    'Constructed component library for uniform project designs',
    'Wrote dynamic AMP pages with Express & Handlebars',
    'Deployed web applications using Docker',
    'Lead development teams to implement project requirements',
    'Collaborated with business teams to improve user’s experience'
  ]
}, {
  position: 'Web Applications Consultant',
  company: 'TEC devs',
  startDate: new Date(2016, 8),
  endDate: new Date(2018, 9),
  city: 'Salt Lake City',
  state: 'UT',
  description: [
    'Constructed MEAN stack web applications hosted on AWS',
    'Assembled SEO optimized sites using Angular Universal',
    'Team with designers to improve client satisfaction'
  ]
}]

export default WORK
