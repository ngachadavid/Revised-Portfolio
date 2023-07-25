import portfolioImg01 from "../images/Beautybliss.png";
import portfolioImg02 from "../images/HAHA-HUB.png";
import portfolioImg03 from "../images/read riot.png";
import portfolioImg04 from "../images/article254.png";
import portfolioImg05 from "../images/loops.jpg";
import portfolioImg06 from "../images/desktop-preview.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web Design",
    title: "Beauty Bliss",
    description:
    " Beauty Bliss is an e-commerce beauty shop powered by Rails API and React. It offers a wide range of products, including skincare, makeup, and haircare. With an admin section for inventory management and order tracking, it ensures efficient operations. Beauty Bliss provides secure transactions and a personalized user experience for seamless shopping.",
    technologies: ["React", "Tailwind css", "Rails", "Postgresql"],
    siteUrl: "https://beauty-bliss-ul2a.vercel.app/",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "web design",
    title: "Meme Generator",
    description:
      "Haha Hub is a web application that brings laughter to users by allowing them to create and view memes. It serves as a platform where people can go to have a good laugh. This Rails and React-based meme generator app was developed as a project during Moringa School. With a combination of React, Tailwind CSS, Rails, and SQLite, Haha Hub offers an entertaining and interactive experience for meme enthusiasts.",
    technologies: ["React", "Tailwind css", "Rails", "SQLite"],
    siteUrl: "https://haha-hub.vercel.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "web design",
    title: "Library app",
    description:
      "The Library App is a React-based web application that utilizes the Google Books API. It offers a user-friendly interface for browsing and exploring a wide collection of books. With features like search, book details, ratings, and a reading list, it enhances the book browsing experience. The app is designed with React and styled using Tailwind CSS. ",
    technologies: ["React", "Tailwind css", "api"],
    siteUrl: "https://read-riot.vercel.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "blog page",
    description:
      "The Blog Page is a web application that combines Ruby and React. It offers a user-friendly interface for sharing and reading articles. With features like categories, tags, comments, and analytics, it enhances the reading and writing experience. The application utilizes React and Tailwind CSS for a visually appealing design",
    technologies: ["React", "Tailwind css", "Ruby", "SQLITE", "Sinatra"],
    siteUrl: "https://article254.vercel.app/",
  },
  // {
  //   id: "05",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Loopstudios Landing Page",
  //   description:
  //    "This is a small project that I did from Frontend Mentor",
  //   technologies: ["HTML", "JavaScript", "CSS"],
  //   siteUrl: "#",
  // },

  // {
  //   id: "06",
  //   imgUrl: portfolioImg06,
  //   category: "Ux",
  //   title: "Credit card information",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["HTML", "CSS", "javascript"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Design",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Ux",
  //   title: "Video Conference Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "10",
  //   imgUrl: portfolioImg03,
  //   category: "Ux",
  //   title: "File Sharing Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "11",
  //   imgUrl: portfolioImg04,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];


// const projects = [
//   {
//     image: beautybliss,
//     title: 'Beauty Bliss',
//     description: 'An E-commerce application built with Rails API and React',
//     websiteLink: 'https://beauty-bliss-ul2a.vercel.app/',
//   },
//   {
//     image: Hahahub,
//     title: 'Meme Generator',
//     description: 'Rails and react meme generator app for moringa school project ',
//     websiteLink: 'https://haha-hub.vercel.app/',
//   },
//   {
//     image: READRIOT,
//     title: 'Library app',
//     description: 'React application that utilizes google books api',
//     websiteLink: 'https://read-riot.vercel.app/',
//   },
//   {
//     image: article254,
//     title: 'blog page',
//     description: 'article web application Built with RUBY and React ',
//     websiteLink: 'https://article254.vercel.app/',
//   },
//   {
//     image: loops,
//     title: 'Loopstudios Landing Page',
//     description: 'This is a small project that I did from Frontend Mentor',
//     websiteLink: 'https://example.com/loopstudios-demo',
//   }
// ];


export default portfolios;
