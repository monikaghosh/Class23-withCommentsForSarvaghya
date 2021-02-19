//if we want to use the MAtter.js -  we have to follow some steps
// add it to the index.html
//1. we have to create an engine object
//2. we have to refer to the world inside the engine
//3. we can create the body using a matter.js function---> we can find theese in the documentation
//4. Once the body is created we have to add the body to the World -- this World is Matter.World 
//so that it behaves like a real world body
//5. To keep the engine running all teh time


//nicknaming or namespace
// const s = sarvaghya (sarvaghya is a boy)
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    //1. we have to create an engine object
    engine = Engine.create();
    //2. we have to refer to the world inside the engine
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    //3. we can create the body using a matter.js function
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    //4. Once the body is created we have to add the body to the World
    World.add(world,ground);


    //this is where we will use the class or our design to create an object
    //to create an object of a class -we use the new keyword and use the pararameter of the constructor
    //because the constructor is the 1st function that gets called when you create an object
    box1 = new Box(200,200,50,30); //box1 is the object of the class Box
    //when i create the object it automatically contains all the properties of teh design and also all the works - functions
    //but we have to use the function to see the work
    box2 = new Box (230,100,30,70);//box2 is another object of the class Box


}

function draw(){
    background(0);
    //5. To keep the engine running/updating all teh time
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    //we want to see the box1 for all the frames
    box1.display(); //to use anything that the box1 has we will use the .operator
    box2.display();
}