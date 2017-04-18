// BasicCard Constructor

var fs = require('fs');

var BasicCard = function(front, back){

		this.front = front;
		this.back = back;
};


BasicCard.prototype.showFront = function(front) {
	console.log(this.front);
};

BasicCard.prototype.showBack = function(back) {
	console.log(this.back);
};

// safescope 
function BasicCard(front,back){
  if (this instanceof BasicCard){
    this.front = front;
    this.back = back;
    } else {
    return new BasicCard(front,back);  
  }
}


module.exports = BasicCard;
