// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-thesis-background",
          title: "Thesis Background",
          description: "Literature that frames my thesis questions on movement, visual processing, behavioral state, and neural population dynamics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/background-papers/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research directions focused on movement, engagement, and visual cortical coding during freely moving behavior.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Public code for neural data analysis, behavioral modeling, and experiment-facing software.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-task-independent-movement-and-engagement",
          title: 'Task-independent movement and engagement',
          description: "Using task-independent movement to ask how movement, engagement, and sensory encoding are linked in V1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/behavior-analyses/";
            },},{id: "projects-chipmunk-dashboard",
          title: 'Chipmunk dashboard',
          description: "An interactive dashboard for understanding behavior in a mouse visual decision-making task across animals and sessions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chipmunk-dashboard/";
            },},{id: "projects-locomotion-and-visual-coding",
          title: 'Locomotion and visual coding',
          description: "Asking how locomotion reshapes sensory encoding in V1 during freely moving decision-making.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ephys/";
            },},{id: "projects-sensory-encoding-and-shared-state",
          title: 'Sensory encoding and shared state',
          description: "Using complementary models to ask how observed movement and latent shared state shape sensory encoding in V1.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/modeling/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
