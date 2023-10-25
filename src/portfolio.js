/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hanson's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hanson Zhang Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Hanson Zhang",
  logo_name: "HansonZhang",
  subTitle:
    "A recent graduate passionate about software development, equipped with a keen eye for detail and a strong programming foundation, committed to continuous learning for impactful contributions to the tech industry.",
  resumeLink:
    "https://drive.google.com/file/d/14zAQ4aYK8iRfR7CMsIO5cUgaI62VrEil/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/600215888",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/600215888",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:q779575184@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Wechat",
    link:
      "https://drive.google.com/file/d/1ZwNu_q44itwrnxGYaQBtz3V5QZGHXkGX/view?usp=sharing",
    fontAwesomeIcon: "fa-weixin",
    backgroundColor: "#A9225C",
  },
];

const skills = {
  data: [
    {
      title: "Backend Developement",
      fileName:"FullStackImg",
      skills: [
        "⚡ proficiency in Spring Boot and MyBatis enables the creation of efficient and scalable backend systems with the capability to incorporate RESTful APIs.",
        "⚡ Adept at utilizing Git/GitHub and Agile tools for collaborative development, ensuring effective project management",
        "⚡ Knowledge of MySQL and data structure, enabling efficient data management and optimization within backend systems",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            backgroundColor: "transparent",
            color: "#6db33f",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "mdi:github",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "skill-icons:linux-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        
        {
          skillName: "Maven",
          fontAwesomeClassname: "devicon:maven-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "devicon:junit-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "logos:swagger",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "IntelliJ IDEA",
          fontAwesomeClassname: "skill-icons:idea-light",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Android Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing Android apps using Java and Kotlin in Android Studio",
        "⚡ Implementing intuitive UI/UX with XML and leveraging Firebase for backend services",
        "⚡ Automating build processes and enhancing app deployment with Gradle",
      ],
      softwareSkills: [
        {
          skillName: "kotlin",
          fontAwesomeClassname: "skill-icons:kotlin-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "skill-icons:androidstudio-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "vscode-icons:file-type-firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "devicon:gradle-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "XML",
          fontAwesomeClassname: "carbon:xml",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    }
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.cn/u/600215888/",
    },
    
  ],
};

// const degrees = {
//   degrees: [
//     {
//       title: "Indian Institute of Information Technology Kurnool",
//       subtitle: "B.Tech. in Computer Engineering",
//       logo_path: "iiitk_logo.png",
//       alt_name: "IIITDM Kurnool",
//       duration: "2016 - 2020",
//       descriptions: [
//         "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
//         "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
//         "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
//       ],
//       website_link: "http://iiitk.ac.in",
//     },
//     {
//       title: "Indiana University Bloomington",
//       subtitle: "M.S. in Computer Science",
//       logo_path: "iu_logo.png",
//       alt_name: "Indiana University Bloomington",
//       duration: "2021 - 2023",
//       descriptions: [
//         "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
//         "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
//         "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
//       ],
//       website_link: "https://www.indiana.edu/",
//     },
//   ],
// };
const degrees = {
  degrees: [
    {
      title: "University of Waterloo",
      subtitle: "MEng in Electrical and Computer Engineering (Specialization in Software)",
      logo_path: "waterloo.png",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken a variety of courses related to Software Development, such as Methods and Tools for Software Engineering, Foundations of Software Engineering, and Software Design and Architectures.",
        "⚡ Throughout my academic journey, I have maintained a GPA of 3.71 out of 4.",
        "⚡ I also collaborated with peers to successfully complete various projects, including the development of the HamBuilder Game and an Online Sales App for Agricultural Products.",
      ],
      website_link: "https://uwaterloo.ca/",
    },
    {
      title: "Huazhong University of Science and Technology",
      subtitle: "BEng in Automation",
      logo_path: "HUST.png",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structure, Computer Networks, Object Orient Program Design etc.",
        "⚡ Apart from this, I have done courses on Advanced Programming Language C and E-Commerce.",
        "⚡ During my time at university, I was also associated with the Student Union, where I took charge of activities planning and the acquisition of sponsorships.",
      ],
      website_link: "https://english.hust.edu.cn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services Training and Certification",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b030f48f-06e5-4f7b-9737-888c5db000b1/linked_in_profile",
      color_code: "#8C151599",
    }
    
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technology tools. More projects are ongoing.... Please stay tuned.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    //profile_image_path: "animated_ashutosh.png",
    profile_image_path: "hanson_portfolio7.png",
    description:
      "I am available on every social media. You can leave me a message, and I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "31 Erbsville Crt, Waterloo, Ontario, Canada, N2J 3Z4",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/31+Erbsville+Ct,+Waterloo,+ON+N2J+3Z4",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (226) 581 2026",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  //experience,
  projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
