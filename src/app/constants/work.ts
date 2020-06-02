import Work from '../interfaces/work.interface';

const WORK: Work[] = [{
  position: 'Senior Front End Engineer',
  company: 'Insight Software',
  startDate: new Date(2020, 1, 3),
  city: 'San Mateo',
  state: 'CA',
  description: [
    'Work on a web application for business financial planning',
    'Design Angular common components',
    'Propose uniform site design for improved user experience'
  ]
}, {
  position: 'Senior Frontend Engineer',
  company: 'Motion Recruitment',
  startDate: new Date(2019, 4),
  endDate: new Date(2020, 0, 31),
  city: 'Sunnyvale',
  state: 'CA',
  description: [
    'Built web application features for Walmart Labs',
    'Developed online grocery service using React with Redux',
    'Provided unit tests to increase code quality',
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
    'Improved site for responsive video streaming',
    'Upgraded systems to the latest version of Angular',
    'Built automated tests to run in CircleCI'
  ]
}, {
  position: 'UI Developer',
  company: 'Snap! Finance',
  startDate: new Date(2016, 8, 6),
  endDate: new Date(2018, 9),
  city: 'Salt Lake City',
  state: 'UT',
  description: [
    'Produced multiple Angular applications for customer use',
    'Constructed component library for uniform site designs',
    'Created full-stack application for dynamic AMP pages',
    'Deployed web applications using Docker',
    'Lead development teams based on product requirements',
    'Emphasized user experience when planning features',
    'Designed online video player for improved ease of use'
  ]
}
  // , {
  //   position: 'Web Applications Consultant',
  //   company: 'TEC devs',
  //   startDate: new Date(2016, 8),
  //   endDate: new Date(2018, 9),
  //   city: 'Salt Lake City',
  //   state: 'UT',
  //   description: [
  //     'Constructed MEAN stack web applications hosted on AWS',
  //     'Assembled SEO optimized sites using Angular Universal',
  //     'Team with designers to improve client satisfaction'
  //   ]
  // }
]

export default WORK
