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
          description: "Thesis-aligned research directions in movement, engagement, and visual cortical coding.",
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
        },{id: "projects-task-independent-movement-tracks-engagement",
          title: 'Task-Independent Movement Tracks Engagement',
          description: "Modeling movement signals that are distinct from explicit task structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/behavior-analyses/";
            },},{id: "projects-shared-gain-as-a-candidate-mechanism",
          title: 'Shared Gain as a Candidate Mechanism',
          description: "Testing whether a latent shared-gain process links movement state to population variability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chipmunk-dashboard/";
            },},{id: "projects-locomotion-modulates-visual-cortex-responses",
          title: 'Locomotion Modulates Visual Cortex Responses',
          description: "SfN-focused replication of locomotion effects in VISp during freely moving behavior.",
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
