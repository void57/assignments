function calculator(width,height){
    this.width=width;this.height=height;
    this.calculateArea=function(){
        return this.width*this.height;
    }
}
let width=prompt("Enter width of rectangle : ");
let height=prompt("Enter height of rectangle : ");
let area=new calculator(width,height);
console.log("Area of the rectangle : "+area.calculateArea());
