// // // Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shapes = {
    
        kind:"circle" | "rectangle";
        radius?:number; // only for circle
        height?:number; // only for rectangle
        width?:number; // only for rectangle
    
}
let circle:Shapes = {
    kind : "circle",
    radius : 5
}
let rectangle:Shapes = {
   kind : "rectangle",
   height : 20,
   width : 10
}
console.log(circle)
console.log(rectangle)
