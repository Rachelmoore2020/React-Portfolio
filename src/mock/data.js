import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: "I'm a Full-Stack Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Rachelpic.jpeg',
  paragraphOne: '"I have always enjoyed the technical aspects of design."',
  paragraphTwo:
    'In her spare time Moore enjoys coding, painting, designing and constructing with wood and concrete, and learning from Youtube. As a world traveler, Moore has visited over 30 countries, lived in southeast Asia and speaks fluent Portuguese. She currently teaches Adobe video, Digital Design and Animation and Game art and Design.  She lives in Greensboro, NC with her family and dog.',
  paragraphThree: 'Always learning, always growing, I strive to be the best.',
  resume: 'https://drive.google.com/file/d/1qzFNnHxnnS1THMv4tdTKHKmPHX9TwDJs/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Begin Your Adventure',
    info:
      '"Begin Your Adventure" allows a user to find national parks in any state. Find all of the national parks, details and current weather information in less than three mouse clicks.',
    info2: '',
    url: 'https://rachelmoore2020.github.io/Project-1/',
    repo: 'https://github.com/Rachelmoore2020/Project-1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'no-brainertrainer.png',
    title: 'no-brainer trainer',
    info:
      "A humorous app that makes the task of choosing a workout program super simple. Choose from an easy, strenuous or challenging program and your workout appears. It's a no-brainer!",
    info2: '',
    url: 'https://nobrainertrainer.herokuapp.com/',
    repo: 'https://github.com/Rachelmoore2020/no-brainertrainer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Get-it-write.jpg',
    title: 'Get it Write',
    info:
      'An app that helps you compose email or text messages for professional or personal use. Choose from a wide variety of categories',
    info2: '',
    url: 'https://getitwrite.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-dashboard.jpg',
    title: 'Weather Dashboard',
    info: 'Search any city and obtain weather information. Find wind speed, humidity, temperature and uv index. The color of the uv index serves as a visual alert as to the risk level of exposure to uv rays.',
    info2: '',
    url: 'https://rachelmoore2020.github.io/Weather-Dashboard/.',
    repo: 'https://github.com/Rachelmoore2020/Weather-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employeedir.jpg',
    title: 'React Directory',
    info:
    'A react app that lets you search employees and sort columns',
    info2: '',
    url: 'https://rachelmoore2020.github.io/Weather-Dashboard/.',
    repo: 'https://github.com/Rachelmoore2020/Weather-Dashboard', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'agenda.jpg',
    title: 'Workday Planner',
    info:
      'Plan your workday with this daily agenda. The current date is displayed at the top and the color of the hour indicates whether the hour has passed, or if it is in the future.',
    info2: '',
    url: 'https://rachelmoore2020.github.io/Day-Planner/',
    repo: 'https://github.com/Rachelmoore2020/Day-Planner', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'eat-a-burger.jpg',
    title: 'Eat-da-burger!',
    info:
      'A node/express app that allows a user to add a burger they would like to eat and add it to the devoured list, once eaten.',
    info2: '',
    url: 'https://radiant-shelf-72295.herokuapp.com/',
    repo: 'https://github.com/Rachelmoore2020/Burger-Eater', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rachelmoore6822@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rachel-moore-636a1956/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Rachelmoore2020',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
