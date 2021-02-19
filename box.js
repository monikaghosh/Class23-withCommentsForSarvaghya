//this is my design to create as many boxes as i want

class Box{

//constructor is a predefined function that gets called when you create an object of the class
constructor(x,y,w,h){
    //x, y, w, h are the parameters which will be used to create our rectbody

    //inside the constructor we define all the properties of our would be object
    //we use this. ---> this refers to the class, so here it means Box and . is like the 's in English
    //3. we can create the body using a matter.js function
    this.body = Bodies.rectangle(x,y,w,h); //this function is there in teh documentation of matter.js
    //4. Once the body is created we have to add the body to the World
    World.add(world,this.body);
    //inside the  class wherever you have to use the property you have to use this.propertyName


    this.width = w; //because w, h are defined only inside the constructor
    this.height = h; //so we are creating more properties so that we can use it everywhere
}


//to create the work of our would be object - to display itself
//inside the class when you define a function you dont have to use the function keyword --- 
//use the function name directly
display(){

    push();
    rectMode(CENTER);

    //this will make the rect think that the origin has shifted to the center of the body
    translate(this.body.position.x,this.body.position.y);
    angleMode(RADIANS)
    //rotate function will rotate our rect as per the body's angle
    //how to get the body's angle ---> this.body.angle
    rotate(this.body.angle);

    //the command that will help us to draw a rectangle on top of the rectangular body
    rect(0,0,this.width,this.height);
    pop();

}




}

//once the class is prepared the next step is to add it to the index.html using the script tag
// <script src = "box.js"></script>
