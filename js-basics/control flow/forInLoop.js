
// for-in
const person={
     name: "Mamun",
     age: 23
};

for (let key in person){
    console.log(key, person[key]);
}

const colors=['red','green','blue'];

for(let index in colors)
   console.log(index, colors[index]);