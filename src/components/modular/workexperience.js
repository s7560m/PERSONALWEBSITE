exports.workexperience = [
  {
    color: 'light-green',
    year: 'July 2020 - Sept 2020',
    company: 'OddJob.ca',
    jobtitle: 'Software Engineer',
    description: 'OddJob.ca is a professional handyman company that deals with jobs such as installing sinks, repairing doors, and more. My job was to design a web-based internal pricing tool that would let clients and OddJob staff conveniently request handyman jobs without the need to fill out any forms or paperwork',
    solutionquote: 'here were some of my approaches to designing this tool: ',
    points: [
      'Consulted with the owner of OddJob to discuss how to convert his business logic into a web application.',
      'Designed a clean, functional user experience using Vue.js (a web framework similar to React.js and angular). Also used Vuetify.js - an elegant material framework - to make the design process easier as well as making rapid prototyping possible.',
      'Managed a database using firebase firestore and designed efficient DB schema. The database mainly held data such as pricing information and types of handyman jobs.',
      'Developed a functional user authentication system using firebase auth that handles registering and logging in users.',
      'Used Zapier\'s API to pull data from Jobber (getjobber.com) such as pre-existing clients.',
      'Built an API using expressjs and nodejs that would serve as a middleware between the frontend and the database. This API was mainly to deal with CRUD operations as well as dealing with Zapier integration.',
      'Deployed the internal pricing tool and middleware API to Amazon\'s EC2 service.'
    ]
  },
  {
    color: 'red darken-3',
    year: 'July 2019 - Sept 2019',
    company: 'Connect To Canada',
    jobtitle: 'Teaching Assistant',
    description: 'Connect To Canada is a company that ran a coding summer camp between July 2019 and September 2019 for ESL (english as a second language) students to learn the basics of coding and problem solving.',
    solutionquote: 'here were some of my tasks: ',
    points: [
      'Worked closely with the teacher to help design problem solving coding activities, like building role playing games and basic calculators, in programming environments such as scratch and python.',
      'Also designed problem solving coding activities using hardware environments, such as the Arduino uno and Sphero sprk+. Some activities include programming LED sequences using the Arduino and breadboard, and making the Sphero SPRK+ roll using joystick controls.',
      'Talked to students one on one to both help with their english skills as well as ensure they\'re making progress in their learning.',
    ]
  },
];
