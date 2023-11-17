
// Camel Notation: oneTwoThree
// Pascal Notation: OneTwoThree

// Constructor Function (use pascal notation)

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);
console.log(circle);