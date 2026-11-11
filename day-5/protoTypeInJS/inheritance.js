// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log("country" in child)

// const grandParent={country:"india"};
// const parent= Object.create(grandParent)

// parent.city="kochi";
// const child=Object.create(parent);

// child.name="Asha"
// console.log("country" in child)
// console.log(child.hasOwnProperty("country"))

const grandParent={country:"india"};
const parent= Object.create(grandParent)

parent.city="kochi";
const child=Object.create(parent);

child.name="Asha"

console.log("country" in child)
console.log(child.hasOwnProperty("name"))