import prePrimary from "../../assets/images/academics/preprimary.jpg";
import primary from "../../assets/images/academics/primary.jpg";
import middle from "../../assets/images/academics/middle.jpg";
import daycare from "../../assets/images/academics/daycare.jpg";

const academicData = [
  {
    id: 1,
    title: "Pre-Primary",
    age: "Ages 2–5 Years",
    image: prePrimary,
    description:
      "A joyful learning environment where children explore, create, and build strong early foundations.",
    features: [
      "Activity-Based Learning",
      "Language Development",
      "Creative Play",
      "Social Skills"
    ]
  },

  {
    id: 2,
    title: "Primary School",
    age: "Grades I – V",
    image: primary,
    description:
      "Developing strong academic foundations through interactive and engaging learning experiences.",
    features: [
      "Core Subjects",
      "Arts & Sports",
      "Digital Learning",
      "Critical Thinking"
    ]
  },

  {
    id: 3,
    title: "Middle School",
    age: "Grades VI – VIII",
    image: middle,
    description:
      "Preparing students for future challenges through innovation, collaboration, and leadership.",
    features: [
      "STEM Education",
      "Science Labs",
      "Leadership",
      "Project Learning"
    ]
  },

  {
    id: 4,
    title: "Day Care",
    age: "Safe & Caring",
    image: daycare,
    description:
      "Providing a secure, caring, and engaging environment where young learners thrive every day.",
    features: [
      "Safe Campus",
      "Healthy Meals",
      "Fun Activities",
      "Experienced Care"
    ]
  }
];

export default academicData;