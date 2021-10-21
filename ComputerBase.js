class ComputerBase{
 constructor(x, y, width, height){
      var options = {
      isStatic:true 
      };

     this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image  = loadimage("./assets/base1.png");
      this.image  = loadimage("./assets/base2.png");
      this.image = loadimage("./assets/player.png");

       World.add(world, this.body);
    }
}


display(); {          
    var pos = this.body.position;
    var angle = this.body.angle;

   push();
   Translate (pos.x, pos.y);
   rotate(angle);
   imagemode (CENTER);
   image(this.image, 0, 0, thiswidth, this.height);
   
   pop();




}
