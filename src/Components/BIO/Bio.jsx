import aditya from "../Assets/Aditya.png";
import img from "../Assets/bookstore.png";
import shoes from "../Assets/shoes.png";
import weather from "../Assets/weather.png";

export const Bio = {
  name: "Aditya Maurya",
  roles: ["Full Stack Developer", "UI/UX Designer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Adityamaurya790",
  resume:
    "https://drive.google.com/file/d/1ijyr5DhX3YK0K76w-g_iAJYDqumOPeok/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/adityamaurya790/",
  twitter: "https://twitter.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFDElEQVR4AaXUA6wsXRbF8f9e+1T3M8a2PRMnY9u2bdvh2LatYKxgbHvu430v1+yurnP2V5X7zP5er+S3yj4pcYF58Tcee8+Xfv1J/3nu5x77z8d/6KF3bnEhNO6OL//Bo73Fi775iOu+9FuP/VPy9C0zrrGpX127n9J3elX1217l12yxY9Pm1GIcGnfHtQOemzo+VlXV32W6ERAcyabNvRIlbi6lfyfzDzYlNy3GoXF28suuvaC6zChL9lgDIACMI+kll7tRSglMTzJZLbdntTivc268/PLtqysMDkt6sxkiOGMC6Pd7lFwsRyHCKrB3ynTAzG7d4mx04kK50rS3yJeduTqXX/ipJ/3AjEsDwXniEsmdyIWNmyACLu+mn0j6IcSVW/R6lbc4Sl3tOTRnLfb/tp8pek+q+K+JWwGFjRjnSwTtuckREKWbWpSgRBRht0sp7UnJ31ZKzi0grIW6utaVLxPej/te4RbD2sTTT3hiMWYCwIzkTs5BlEKOoESoBYUw9FyT1j3pHiaihbraPzOzPUb6Ur2sygSAcSEJcBclglLKkSnktiLCSkAy3/Snqakvf/+vv9/883/+3dQWkW1TT96s7OuBBZNGshPeQiEK5AgEHF5cYHF11S69eVefMFNbuHt4UtBUDGYrzJkoZkYhKCUgygnzwZ6Zw0gqa/UggBBA5enIKDbWp/tQgGCyBDS5UErQMRPTCwuMRiMqE47RUVdmIDnuwoqzdriHeTBpcsnkHJTINLnhwMI8pgQYwo5Mu5Lh3hGeRD3Xo4yMSdPkTFMKhHF4aYEcGTMDEzmMwFBXKQnJsCM3InOGsz006VswGNRD6iazuLZCksCgIxcmQ10FILFxcbUSNEsVzVCYTXR9mmiYW1kEcyTHMXTCdnUlceRuQILkYtDU/PMfs3Tzk8WoI9OXcBPyhJQ25uWoKyxAHcNaEkwvz7AwV7OwMEQyJkkQjCJTuajM8JZMOEJdkQpSgAVyY251hUE9IiVjz/8XkYwgJngHxrAZITNcRnLRT06VhLoqyq2CPAhrODA3S5IwMxaXhszOruESkyQiWBvVVJ5IZhjgBuoqR6FRA1Vh/+z8xr+bjaQk/vPfeSJi4r/j+mhIUwquRPKEW0Jd1RqQbcTyYJ2Z+eXTnnZ9fcSBQ8u424Q3AcvDNZI7ddMgqSPW88ByGtnBQ4voDK+6qsTU3jlyDjAmGguj3HRvwq6w/VIkc9RVunRdz82v9tdXM2Zn+n7QNIU9++dx18SfYnGwWi2OVpq59UXU1exvqsX5/fmxcs6a5GLqwBzDusHMJr2JRx9anl+tSw61xcpyY2WoT970Zf8TxmdOfHhOjMG/pg5f3LcQHInMPtUyIj7b5MZaqCttytHiD2+8hmjskebcAPgzYCeexCWmZ5dZHdQX58Jm8Cc3v55benTdNN6ilIgW6uqohia3GNX5b03ON0bcF1g/4UZwGf+Ymh7nF23AALjvlqp/k91btv2jxRV2Xiq3OEpdnc1ltuz+xmW27d6C8YYTvh9zSyvMLa5iGOfIG3qpt3nHpq3faHE26up8rnXJK72aS416GF8DSO78fc8BJOPEx4UgIr661Kz11m346hbno3F2+vfKlLG/nxno/njcAmPP2nDI9PwCkgAoEXtaN3fZA3b6ltxiHBpnpxvsukbc4KpXLmzNhvE7PK4qt0f85+D0qESpcykPN3HVque/D8LaaWkxjosAqoYXqu5e6SUAAAAASUVORK5CYII=",
      },
      {
        name: "Express Js",
        image:
          "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },

      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABF0lEQVR4AWJwL/AB0FLGJhACURBtw9DMfCuwCQvYSswsxdga9sAuNjPbFoR/f8ADb/H8fzgceJGsD0dmTTRBmZSkFEUOipKOZ8HzLksUK4FFUSIt1DRKJkQ1WWlcQk3PCm7ob4W8jJfWNcpDNFfC/KAwfwk1kXnBMAyyLAsrjWdhYQ5v2yZI27aMsMCFBEY2jqN8sq4r+5UBwok5tO+7nIJ6GeEE4ct7YJ5nqYN6CWFy/7+u6+RHULP/6tOIB/yvq6Bi4P5K7wysoG6vsHhnYAQzcVWa7BkY8c8kQTj5Z2AG9ZuzCMYMIPXgmUmor7YnKdzl/T/xPbpWT/SugMXp2sSgayOK3s3EgW8Ik9rUP4ylqX+QlKY+AHyE8Yu1gldCAAAAAElFTkSuQmCC",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Figma",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C4D0BAQFVIfF1dvvexg/company-logo_200_200/0/1630522412835/programming_pathshala_logo?e=2147483647&v=beta&t=xAKwPL3Sx_CERbifbKMj41fSeyWF_9rk036mSrKxDWI",
    role: "Full Stack Developer",
    company: "Programming Pathshala",
    date: "June 2023 - July 2023",
    desc: "Worked on the frontend of the web application using ReactJS, NodeJS and MongoDB for Database .",
    skills: ["ReactJS", "NodeJs", "HTML", "CSS", "JavaScript", "MongoDB"],
    doc: "https://drive.google.com/file/d/12qUI30gieAaEcijzTEK_XgxT4qBz5ocr/view?usp=drive_link",
  },
  {
    id: 1,
    img: "https://c0.klipartz.com/pngpicture/342/1021/gratis-png-video-edicion-de-edicion-de-pelicula-simbolo.png",
    role: "Video Editor",
    company: "Self Placed",
    date: "June 2020 - Present",
    desc: "I worked on various video editing projects for cultural events, youtube and also created reels for creators.",
    skills: ["Wondershare Filmora", "Open Shot", "Clip Champ", "Canva"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYWaz7bBFPVFHEtp-WjM-Ri8byDMjrd25CA&s",
    school: "Lovely Professional University, Phagwara, Punjab",
    date: "Oct 2021 - Sep 2025",
    grade: "7.04 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Lovely Professional University, Phagwara, Punjab. I have completed 6 semesters and have a CGPA of 7.04. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQq3YsO-jKQIZ8lY0qsezQ6mCAnaICEyrCw&s",
    school: "Banyan Tree School, jagdishpur, Uttar Pradesh",
    date: "Apr 2019 - Apr 2021",
    grade: "74 %",
    desc: "I completed my class 12 high school education at Banyan Tree School, jagdishpur, where I studied Science with Computer Science.",
    degree: "CBSE(XII), Science with Computer",
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc1Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzU3Lzc3ODc3Nzc3Lzc1Nys1LTc4L//AABEIABwAHAMBEQACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAEBQYHAv/EACgQAAICAQMDAwQDAAAAAAAAAAECAwQFABESBiFBMVGRE2FxgSIywf/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAUBAP/EACYRAAICAQMCBgMAAAAAAAAAAAECAAMRBCExElETIjJB8PFxkaH/2gAMAwEAAhEDEQA/ANL6p6hmpOMfiwhvyL2dxuqE/wBRt5Y+3gd9MRAd24len04fzvxJOxBYvxyvaydh5o+JYrKzlSWUEALso287eDpZ1lanCjMpF9aHCrt+IXTzmSw5+s00lyny4mJmLkfYMe6n19Tx/ie+mI9d3p5nPDqvHl2P6/kv6VuG9UitVnDwyqGVh7aAjBwZnMpRipmeY2umSyuSvuQtl/qbMSd1HIgDsPUBQPnQ61itQUe807sioVjjaW1ievgqtWKOu7I8ixn6a78B5c/Yf7oQAgwJBWhtJ3xj5iAdRYqKSUyoUjEkTCUcSee223p5/OlOfDsVl7wqWPUD2iHpPOTY6jYrPC86iwzIYwSFBCnb0Hkk/vWhYgJzLNTQHYNnG05yKWOm+rJLEkbS4u6SwVOx5E7sN9/UHcgedyNCVW6vpPInayt9AA9Qjc3GvLtDehsxpA5UhwpLeEP5HxtqQJYow/MX0BTnpxuPuA5zOmPFCsllLORZOBljB2i39/dj2AA899UV1BsM44nqqD4pOML2+e0e9I4mXHYZFyAVrczGWbYbAEgAD9AAa7Y2W2k+ptD2eTgcRvcqV71dq9uJZYm9VYaAEjcRCuyHKyDz3SVChahkqz2k5njxLqwA3+6k/J1QlpPM0qdW7ghgJS4TpfGYspYjR5px3WWduRX8AAAfoaU1jNJLdTZZsdhHulyaf//Z",
    school: "Christ The King School, Jagdishpur, Uttar Pradesh",
    date: "Apr 2017 - Apr 2019",
    grade: "92.3%",
    desc: "I completed my class 10 education at Christ The King School, Jagdishpur, where I studied Science with Computer Application.",
    degree: "ICSC(X), Science with Computer",
  },
];

export const projects = [
  {
    id: 0,
    title: "BookStore",
    date: "May 2024",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Google Auth and Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    image: img,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js"],
    github: "https://github.com/Adityamaurya790/BooKStore",
    webapp: "https://ebookstore-zeta.vercel.app/",
    member: [
      {
        name: "Aditya Maurya",
        img: aditya,
        linkedin: "https://www.linkedin.com/in/adityamaurya790",
        github: "https://github.com/Adityamaurya790/",
      },
    ],
  },
  {
    id: 1,
    title: "Shoes Commerce",
    date: "January 2023",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image: shoes,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "Java Script"],
    github: "https://github.com/Adityamaurya790/shoes_commerce",
    webapp: "https://shoes-commerce-neon.vercel.app/",
    member: [
      {
        name: "Aditya Maurya",
        img: aditya,
        linkedin: "https://www.linkedin.com/in/adityamaurya790",
        github: "https://github.com/Adityamaurya790/",
      },
    ],
  },
  {
    id: 2,
    title: "Weather Forecast",
    date: "January 2024",
    description:
      "Designed and developed the Vexa project, a project management app that helps users and teams stay organized and on track. Implemented key features such as task tracking, team collaboration, and time tracking to improve productivity and project outcomes and also invite team/project members. The plan is to add a community of users where they can find developers and other team members and chat system implementation.",
    image: weather,
    tags: ["HTML", "CSS", "Java Script"],
    github: "https://github.com/Adityamaurya790/weatherApp",
    webapp: "https://weather-app-nu-sage-84.vercel.app/",
    member: [
      {
        name: "Aditya Maurya",
        img: aditya,
        linkedin: "https://www.linkedin.com/in/adityamaurya790",
        github: "https://github.com/Adityamaurya790/",
      },
    ],
  },
];
