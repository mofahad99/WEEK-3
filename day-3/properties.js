const id = Symbol("id");

const institute = {
  name: "Eonix",
  location: "Thalassery, Kerala",
  "course type": "MERN",
  [id]: 101,
};

console.log(institute);

institute.mentor = null;

console.log(institute);