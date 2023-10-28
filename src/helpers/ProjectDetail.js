import meta1 from "../images/MetaMapper_travel.jpg";
import meta2 from "../images/MetaMapper_select.png";
import meta3 from "../images/MetaMapper_wayfinding.png";
import meta4 from "../images/MetaMapper_scene1.png";
import meta5 from "../images/MetaMapper_scene2.png";
import unmae_find from "../images/CommonUsername_find.gif";
import uname_choose from "../images/CommonUsername_choose.gif";
import uname_search from "../images/CommonUsername_search.gif";
import golf1 from "../images/MiniGolf_image1.png";
import golf2 from "../images/MiniGolf_image2.png";
import food_filter from "../images/ManhattanFood_filters.gif";
import food_rest from "../images/ManhattanFood_showrest.gif";
import home1 from "../images/HomeSweetHome_image2.png";
import home2 from "../images/HomeSweetHome_image3.png";
import lake from "../images/FrozenSea_poster.png";
import lake2 from "../images/FrozenSea_image.png";
import ceval_home from "../images/UNCWebEval_Search+auto.png";
import ceval_class from "../images/UNCWebEval_class.png";
import ceval_cata from "../images/UNCWebEval_Catelog.png";
import ceval_login from "../images/UNCWebEval_login.png";

export const projectDetail = [
  {
    name: "Met(a) Mapper",
    content: {
      text: "Met(a) Mapper is a headset-based 3D map for the Metropolitan Museum of Art that provides immersive experience, essential information about exhibition, and pathfinding.\n\nIn particular, we choose to create four scenes (Arms and Armor, Samurai Artifacts, Chinese Ceramics and Paintings, and Greek Sculptures) and implemented a variety of 3D interaction techniques to enhance the gameplay experience. These include teleportation to navigate through the scenes, artwork selection and manipulation to learn more about its origins and view it from different angles, and a main menu that allows you to easily find a specific artwork and exhibit.",
      text1:
        "  Users will be able to move using a joystick, or teleport with arc indicators, with tunneling effects when useful.",
      image: meta1,
      text2:
        "Select works of art using virtual pointers. A menu UI will pop up, and users can rotate a copy of the art with joystick",
      image2: meta2,
      text3:
        "Use the On Display menu to find objects in the scene. Once clicked, waypoint arrow spawns in front of player to show direction, and another arrow above the object will also spawn.",
      image3: meta3,
      text4:
        "You can navigate to other scenes by clicking on labels on the wall.",
      image4: meta4,
      text5:
        "You can also navigate to other scenes by choosing through the Map Selection Menu.",
      image5: meta5,
    },
  },

  {
    name: "Common Usernames",
    content: {
      text: "In this data visualization project on observable, we looked at how quickly common usernames were taken on Github, Twitch, and Reddit.",
      text1:
        'People claim new usernames online every day and every minute, and each of such usernames represent a unique identity. Is there a pattern in taking usernames? How was the "race" on taking common names like when different social platforms were first launched? Generally, we want to examine how quickly common usernames are taken on social platforms and websites.',
      text2:
        "Our hypothesis is that more common names are taken in a faster manner. While our hypothesis appears to be obvious and not debatable, we want to focus on visualizing the trends of common usernames and their creation date, as well as any variations of the common names.",
      text3:
        "See popular names and when they were taken (common first name, fruit, color, funny names!)",
      image2: unmae_find,
      text4: "Explore more names (and their variations) — on a globe.",
      image3: uname_choose,
      text5:
        "Search for names that you are interested in and their variations. There might be patterns and trends to explore! ",
      image4: uname_search,
    },
  },
  {
    name: "AR/VR Mini-Golf",
    content: {
      text: "This is a phone-based AR application that allows users to create a miniature golf (mini golf) course and a headset-based AR application for Meta Quest 2 in which users can play on the created course",
      text1: "Part One: Phone-Based AR Mini Golf Course Builder",
      image: golf1,
      text2: "Function includes:",
      list: [
        "Drag and drop a object from the row to add it to the scene. Textual and visual feedback will be triggered.",
        "Select an object in the scene.",
        "Press “Rotate” button to rotate the selected object.",
        "Press “Trash” button to delete the selected object.",
        "Drag the selected object to change its position.",
        "Redo and undo by pressing the corresponding buttons.",
        "Remove all existing objects from the scene with “Reset” button.",
        "Save the scene with “Save” button.",
      ],
      text3: "Part Two: Headset-Based AR Mini Golf Game",
      image1: golf2,
      text4: "Here's how user plays in AR:",
      list1: [
        "Press controller's trigger to activate the small map. Hold the small map to match the reference map on the group. The scene will automatically load.",
        "Press controller's trigger to activate the golf club. Use the club to hit the ball.",
        "The interface will track and show the number of hits, until the ball goes to the hole.",
        "To restart, press the trigger on another controller to activate the raycaster. Then click on the “Restart” button on the interface.",
      ],
    },
  },
  {
    name: "Manhattan Food Hunt",
    content: {
      text: "A choropleth map showing restaurants of all zip code areas in Manhattan, implemented with interactive search and filter functions.",
      text1:
        "Play with a cuisine drop-down menu, rating slide bar, price level checkbox to explore Manhattan restaurants.",
      image1: food_filter,
      text2:
        "And toggle to show zip code-level data or restaurant-specific datapoints.",
      image2: food_rest,
      text3:
        "Our data source: data scientist Rachel Spiro's Github repository: NYC-Restaurant-Yelp-and-Inspection-Analysis.",
    },
  },
  {
    name: "Project Space Cleanup",
    content: {
      text: "This is an outer-space cleanup game using touch-based input. Designed and implemented the controls, scene structure, game conditions, obstacles, and user interface.",
      link: {
        link_text: "Youtube Video",
        link_source: "https://youtu.be/51bT8fCYLBM",
        des: "space cleanup",
      },
    },
  },
  {
    name: "Episodes of Onomatopoeia",
    content: {
      text: "Onomatopoeia is an audio production of the Columbia Graduate School of Journalism.",
      text1:
        "“The Rolling Dice” is reported, written, and produced by me in November 2022. It is a profile story of Emma Ma, an esthetician who works, studies, and lives to realize her dream as an immigrant from China.",
      link: {
        link_text: 'Listen "The Rolling Dice" Here',
        link_source:
          "https://onomatopoeia.podcasts.library.columbia.edu/podcast/the-rolling-dice/",
        des: "The rolling dice",
      },
      text2:
        "“Doors Are Open to All” is a audio postcard of the Cathedral of St. John the Divine in Morningside Heights. For a nonreligious, this visit to the biggest cathedral in New York City is special.",
      link2: {
        link_text: 'Listen "Doors Are Open to All" Here',
        link_source:
          "https://onomatopoeia.podcasts.library.columbia.edu/podcast/doors-are-open-to-all/",
        des: "The rolling dice",
      },
    },
  },
  {
    name: "Home Sweet Home",
    content: {
      text: "“Home Sweet Home” is a documentary about two Chinese students in the U.S. facing mental challenges during the COVID-19 pandemics.",
      image: home1,
      image1: home2,
    },
  },
  {
    name: "Frozen Sea",
    content: {
      text: "An environmental documentary about marine pollution in China and a group of college students' commitment to reserve the ocean.",
      image: lake,
      image2: lake2,
    },
  },
  {
    name: "Course Eval for UNC",
    content: {
      text: "This is a website for course evaluation at UNC. The main function of this website is to provide a place for UNC students to publically share their evaluations for classes and show the overall conditions of a class. Our website allows students to create personal accounts and sign up in order to post evaluation for the classes they’ve taken. Users could also voluntarily provide their letter grade in a class. ",
      text1:
        "We keep the homepage of the website intuitive with minimal design and emphasis on functions. Users could search for classes in the search bar that supports auto-completion.",
      image: ceval_home,
      text2:
        "Choosing from the list will lead to the corresponding class page, on which users could see miscellaneous information about that class, post comments, rate the class. (implementation to be completed). ",
      image1: ceval_class,
      text3:
        "The “catalog” page shows all the listed classes and brief descriptions. We scraped the data from Coursicle.",
      image2: ceval_cata,
      text4:
        "Users could also log in / sign up with the buttons in the navigation bar.",
      image3: ceval_login,
    },
  },
  {
    name: "Mid Autumn Festival",
    content: {
      video: "https://www.youtube.com/embed/zuiFfiDk8bs",
    },
  },
  {
    name: "Cat's concert",
    content: {
      video: "https://www.youtube.com/embed/tRdiV_IR7t8",
    },
  },
];
