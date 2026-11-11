const a={x:1,y:{2:2}};
const b={...a};
b.x =10;
b.y.z =20;

console.log(a);
console.log(b);