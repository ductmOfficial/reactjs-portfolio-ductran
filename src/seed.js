import { addDoc, collection, getFirestore } from 'firebase/firestore';

const seedDatabase = () => {
  const db = getFirestore();

  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Jobs
    ============================================ */
  addDoc(collection(db, 'jobs'), {
    id: getUUID(),
    node: {
      frontmatter: {
        title: 'Senior Front-end Engineer',
        url: 'https://devblock.net/',
        company: 'Devblock Vietnam',
        range: 'Jun 2019 - Present',
      },
      html: '<ul><li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li><li>Work with a variety of different languages, frameworks, and content management systems such as JavaScript, TypeScript, React JS, Vue JS, Netlify and Firebase</li><li>Communicate with multi-disciplinary teams of engineers and clients on a daily basis</li><li>Mentor Software Engineers to allow for skill/knowledge development through advice, coaching, and training opportunities.</li><li>Assist in task planning, estimation, scheduling, and staffing.</li><li>Delegating tasks to team members</li></ul>',
    },
  });

  addDoc(collection(db, 'jobs'), {
    id: getUUID(),
    node: {
      frontmatter: {
        title: 'Freelance Web Developer',
        url: 'https://www.dfo.global/',
        company: 'DFO Global',
        range: 'June 2019 - Sep 2019',
      },
      html: '<ul><li>Handled urgent requests from customers</li><li>Developed the projects independent of the existing CMS platform</li><li>Participate in product development using using JavaScript, HTML, CSS, Sass</li><li>Build reusable components/modules for static websites with responsive design;</li><li>Ensure UI/UX of developed pages and software with near pixel-perfect design;</li><li>Develop and optimize front-end UI to ensure the application is rendered consistently in cross-browser environments</li></ul>',
    },
  });

  addDoc(collection(db, 'jobs'), {
    id: getUUID(),
    node: {
      frontmatter: {
        title: 'Front-end Web Developer',
        url: 'https://www.nhn.com/asia/vn/company/companyInfo.nhn',
        company: 'NHN Vietnam',
        range: 'Aug 2017 - Jun 2019',
      },
      html: '<ul><li>Build modern web application, based on Javascript-style technologies</li><li>Developed and shipped highly interactive web applications for Comico</li><li>Clients included Korea, Japan, Thailand, Spain, Philippines and more</li><li>Participating in code reviews</li><li>Research new technology</li></ul>',
    },
  });

  addDoc(collection(db, 'jobs'), {
    id: getUUID(),
    node: {
      frontmatter: {
        title: 'Front-end Web Developer',
        url: 'https://imad.com.vn/',
        company: 'IMAD Technology',
        range: 'Mar 2016 - Jun 2017',
      },
      html: '<ul><li>Responsible for building user interfaces using javascript framework platforms (VueJS, React JS). Ensure high quality and on time, requirements set.</li><li>Developed and maintained code for in-house websites primarily using VueJS, ReactJS, JavaScript, HTML, CSS, Sass and jQuery</li><li>Discuss with the backend team about the API design.</li><li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li><li>Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences</li></ul>',
    },
  });

  /* Projects
    ============================================ */
  addDoc(collection(db, 'projects'), {
    id: getUUID(),
    node: {
      frontmatter: {
        date: '2021-09-23',
        title: 'Svelte Todo App',
        tech: ['Svelte', 'SMUI'],
        github: 'https://github.com/ductmOfficial/svelte-todo-app',
        external: 'https://ductm-svelte-todo.netlify.app/',
        ios: null,
        android: null,
        company: '',
        cover: 'https://d33wubrfki0l68.cloudfront.net/614bef10428d620008c9960b/screenshot_2021-09-23-03-06-26-0000.png',
      },
      html: '<p>ToDo App is simple and awesome app to organize your tasks with very easy to use interface. ToDo can help you to make list of your tasks. To-Do apps are not necessarily the hottest topic out there but this will really help you to sharpen you Svelte skills.</p>',
    },
  });

  addDoc(collection(db, 'projects'), {
    id: getUUID(),
    node: {
      frontmatter: {
        date: '2021-09-21',
        title: 'Movie Search App',
        tech: ['React JS', 'Hooks', 'Material UI'],
        github: 'https://github.com/ductmOfficial/hooks-movie-app',
        external: 'https://hooks-movie-app.netlify.app/',
        ios: null,
        android: null,
        company: '',
        cover: 'https://d33wubrfki0l68.cloudfront.net/6149eddf1a5a0f00070a9443/screenshot_2021-09-21-14-37-43-0000.png',
      },
      html: '<p>Building this application you will improve your React Skills using the relatively new Hooks API. The example projects make use of React components, many hooks, an external API, and of course some styling via CSS.</p>',
    },
  });

  addDoc(collection(db, 'projects'), {
    id: getUUID(),
    node: {
      frontmatter: {
        date: '2021-09-20',
        title: 'Basic Calculator',
        tech: ['Vue JS', 'Tailwind CSS'],
        github: 'https://github.com/ductmOfficial/vue-tailwind-calculator',
        external: 'https://ductm-calculator.netlify.app/',
        ios: null,
        android: null,
        company: '',
        cover: 'https://d33wubrfki0l68.cloudfront.net/614894d1660cd900083e4a7a/screenshot_2021-09-20-14-04-31-0000.png',
      },
      html: '<p>The program that we all use on a daily basis is the calculator. The calculator is a project that is both simple and practical. </p>',
    },
  });

  addDoc(collection(db, 'projects'), {
    id: getUUID(),
    node: {
      frontmatter: {
        date: '2020-09-15',
        title: 'Portfolio',
        tech: ['React JS', 'React Boilerplate', 'Styled Components'],
        github: 'https://github.com/ductmOfficial/react-portfolio',
        external: 'https://ductm.netlify.app/',
        ios: null,
        android: null,
        company: '',
        cover: 'https://ductm.netlify.app/og.png',
      },
      html: '<p>Online version of my 2021 resume made for fun. I was interested in learning React.js, so I found a simple tutorial and it spun into a weekend project.</p>',
    },
  });
};

export default seedDatabase;
