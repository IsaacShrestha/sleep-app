import Ember from 'ember';

export default Ember.Component.extend({
	a: new Audio("mp3/alarm1.mp3"),
	b: new Audio("mp3/alarm2.mp3"),
	c: new Audio("mp3/alarm3.mp3"),
	
	playsound: false,
	pausesound: true,
	pausegermanshep: true,
	playgermanshep: false,
	playgunshot: false,
	pausegunshot: true,

	actions:{
		play(){
			var a = this.get('a');
			this.set('pausesound',false);
			this.set('playsound', true);
			a.play();
			a.loop = true;
		},
		pause(){
			var a = this.get('a');
			//a.pause();
			this.set('pausesound',true);
			this.set('playsound', false);
			a.pause();

		},
		playgerman(){
			var b = this.get('b');
			this.set('pausegermanshep',false);
			this.set('playgermanshep', true);
			b.play();
			b.loop = true;

		},
		pausegerman(){
			var b = this.get('b');
			this.set('pausegermanshep',true);
			this.set('playgermanshep', false);
			b.pause();
		},

		playgun(){
			var c = this.get('c');
			this.set('pausegunshot',false);
			this.set('playgunshot', true);
			c.loop = true
			c.play();
		},
		pausegun(){
			var c = this.get('c');
			this.set('pausegunshot',true);
			this.set('playgunshot', false);
			c.pause();

		},



	},


	

});
