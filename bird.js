function Bird(){
    this.y= height/2;
    this.x=65;

    this.gravity=.25;
    this.lift=5;
    this.velocity= 0;

    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 24, 24);

    }
    this.up= function(){
        this.velocity += -(this.lift+this.velocity);
    
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;

       if(this.y> height){
           this.y = height;
           this.velocity=0;
       }
    }
}