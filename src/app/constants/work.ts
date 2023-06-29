import Work from "../interfaces/work.interface";

const WORK: Work[] = [
  {
    position: "Software Developer",
    company: "Anjuna Security",
    startDate: new Date(2020, 8),
    city: "Palo Alto",
    state: "CA",
    description: [
      "Built a visual tool for presenting encryption software with React",
      "Built user management system to reduce reliance on engineers",
      "Moved data to server for faster demo creation times",
      "Automated functional tests to ensure optimal user experience",
      "Improved site responsiveness with visuals and code reduction",
      "Implemented analytics to back business decisions with data",
      "Increased company visibility with publicly sharable demos",
    ],
  },
  {
    position: "Senior Front End Engineer",
    company: "insightsoftware",
    startDate: new Date(2020, 1, 3),
    endDate: new Date(2020, 5, 30),
    city: "San Mateo",
    state: "CA",
    description: [
      "Worked on Angular site for enterprise financial planning",
      "Proposed uniform site design to improve user experience",
    ],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Walmart Labs",
    startDate: new Date(2019, 4),
    endDate: new Date(2020, 0, 31),
    city: "Sunnyvale",
    state: "CA",
    description: [
      "Developed online grocery service using React with Redux",
      "Lead code migration projects across multiple teams",
    ],
  },
  {
    position: "Front End Engineer",
    company: "Cape",
    startDate: new Date(2018, 9),
    endDate: new Date(2019, 2),
    city: "Redwood City",
    state: "CA",
    description: [
      "Enhanced interface for remotely flying drones using Angular",
      "Built responsive video streaming of previous flights",
    ],
  },
  {
    position: "UI Developer",
    company: "Snap! Finance",
    startDate: new Date(2016, 8, 6),
    endDate: new Date(2018, 9),
    city: "Salt Lake City",
    state: "UT",
    description: [
      "Increased business deals with streamlined applications on Angular",
      "Improved site traffic using dynamic AMP pages",
    ],
  },
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
];

export default WORK;
