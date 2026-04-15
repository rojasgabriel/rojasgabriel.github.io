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
        },{id: "nav-projects",
          title: "Projects",
          description: "Active research and software projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Selected GitHub repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research focus, and selected experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-behavior-analyses",
          title: 'behavior_analyses',
          description: "Behavioral analysis workflows for chipmunk task datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/behavior-analyses/";
            },},{id: "projects-chipmunk-dashboard",
          title: 'chipmunk-dashboard',
          description: "Dashboard for tracking chipmunk-task experiments and metadata.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chipmunk-dashboard/";
            },},{id: "projects-ephys",
          title: 'ephys',
          description: "Analysis pipeline for Neuropixels + behavior data in freely moving mice.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ephys/";
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
