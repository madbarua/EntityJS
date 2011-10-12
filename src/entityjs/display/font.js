/*
The font component displays font on screen using the canvas font api.

//create font
re.e('font')
.extend({
	text:'Texting Message',
	textColor:'#ff0000'
});

TODO implement size

*/
re.c('font')
.require('draw')
.inherit({
	font:"14px sans-serif",
	textColor:'#000000',
	textAlign:'',
	text:''
})
.extend({
	
	isVisible:function(){
		return this.text.length != 0;
	},
	
	draw:function(c){
		
		c.font = this.font;
		c.fillStyle = this.textColor;
		c.fillText(this.text, -this.regX, -this.regY);
		
	}
	
});