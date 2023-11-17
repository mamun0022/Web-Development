
// Factory Function (use camel notation)
function createCircle(radius){
    return {
       radius,
       draw(){
          console.log('draw');
       }
    };
}
const circle = createCircle(1);

// Constructor Function (use pascal notation)
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);