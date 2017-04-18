// ClozeCard constructor
var fs = require('fs');

var ClozeCard = function(text, cloze){

	this.text = text;
	this.cloze = cloze;
};


ClozeCard.prototype.fullOnly = function(text, cloze){
	console.log(this.cloze +" "+this.text);
};


ClozeCard.prototype.clozeOnly = function(cloze){
	console.log(this.cloze);
};

ClozeCard.prototype.textOnly = function(text){
	console.log(this.text);
};

ClozeCard.prototype.brokenCloze = function(text, cloze){
	if(cloze === null){console.log("This doesn't work", "oops");
};


// safescope 
function ClozeCard(text, cloze){
  if (this instanceof ClozeCard){
    this.text = text;
    this.cloze = cloze;
    } else {
    return new ClozeCard(text, cloze);  
  }
}

module.exports = ClozeCard;