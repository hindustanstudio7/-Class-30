class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //highest visiblity 
    this.visiblity=255;
  }
  display(){
  
   
    console.log(this.body.speed)
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body)
      //when pig will remove from world adding picture one more of pig and adding tint() 
      push();
      this.visiblity= this.visiblity-5;
      tint(255, this.visiblity)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

}; 