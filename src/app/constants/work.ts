import Work from "../interfaces/work.interface";

const WORK: Work[] = [
  {
    position: "Software Developer",
    company: "Anjuna Security",
    startDate: new Date(2020, 8),
    city: "Palo Alto",
    state: "CA",
    description: [
      "Built a visual interface for software security configuration",
      "Created custom branding settings for business partners",
      "Improve buyer experience with interactive training tools",
      "Increase site stability with automated visual testing suite",
      "Improve viewer retention by reducing site render time",
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
      "Propose uniform site design to improve user experience",
    ],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Motion Recruitment",
    startDate: new Date(2019, 4),
    endDate: new Date(2020, 0, 31),
    city: "Sunnyvale",
    state: "CA",
    description: [
      "Developed online grocery service using React with Redux",
      "Updated order fulfillment process to improve experience",
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
      "Streamlined interface for remotely flying drones",
      "Improved site experience with responsive video streaming",
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
      "Increased business deals with streamlined applications",
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
