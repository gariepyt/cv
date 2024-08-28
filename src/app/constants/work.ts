import Work from "../interfaces/work.interface";

const WORK: Work[] = [
  {
    position: "Software Developer",
    company: "Anjuna Security",
    startDate: new Date(2020, 8),
    city: "Palo Alto",
    state: "CA",
    description: [
      "Increased sales by 400% with development of react based visual presentation tool to showcase encryption software.",
      "Spearheaded creation and implementation of interactive 3D rendered demo archive as an exciting sales leave behind.",
      "Built UI features allowing sales autonomy, reducing engineering involvement by 65%.",
      "Integrated analytics to increase data driven business decisions.",
      "Reduced code vulnerabilities by 72% with upgrade to Next.js",
      "Wrote Cypress tests for automated deployment integrity checks.",
    ],
  },
  {
    position: "Angular Consultant",
    company: "Mobile Health",
    startDate: new Date(2023, 10, 1),
    // endDate: new Date(2020, 8),
    city: "Palo Alto",
    state: "CA",
    description: [
      "Improved site compatibility with update to latest version of Agular.",
      "Implemented current best practices for code efficiency.",
      // "Streamlined documentation for future engineers.",
    ],
  },
  {
    position: "Senior Front End Engineer",
    company: "insightsoftware",
    startDate: new Date(2020, 1, 3),
    endDate: new Date(2020, 5, 30),
    city: "San Mateo",
    state: "CA",
    description: ["Worked on Angular site for enterprise financial planning."],
  },
  {
    position: "Senior Frontend Engineer",
    company: "Walmart Labs",
    startDate: new Date(2019, 4),
    endDate: new Date(2020, 0, 31),
    city: "Sunnyvale",
    state: "CA",
    description: [
      "Developed React with Redux based online grocery service.",
      "Lead multi-team projects to optimize code via migration to React.",
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
      "Enhanced remote drone operation using Angular.",
      "Created video streaming archive from previous drone flights.",
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
      "Streamlined partnership applications, reducing approval time by 85%.",
      "Implemented dynamic APM pages, increasing site traffic by 14%.",
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
