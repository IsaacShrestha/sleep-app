import Ember from 'ember';

export default Ember.Component.extend({
	router: Ember.inject.service('-routing'),
	playAlarm: true, //this should be true
	playGame: false,
	addError: true,
	mulError: true,
	subError: true,
	play: true,
	reDirect: false,
	x: new Audio("mp3/alarm1.mp3"),
			
	

	actions: {
		turnOff(){
			this.set('playGame', true);
		},

		//turn alarmoff after game
		turnAlarmOff(){
				this.get('router').transitionTo('alarms');			
		},
	},

	
	hourDisplay: Ember.computed(function(){
		var d = new Date();
		var h = d.getHours();
		if(h > 12){
			h=h-12;
		}

		if(h<10){
			h=('0' + h);
		}
		return h;

	}),

	minutesDisplay: Ember.computed(function(){
		var d = new Date();
		var m = d.getMinutes();
		if(m < 10){
			m = ('0' + m);
		}
		return m;

	}),

	first: Ember.computed(function(){
		var first = Math.floor((Math.random() * 100) + 1);
		return first;
	}),

	second: Ember.computed(function(){
		var second = Math.floor((Math.random() * 100) + 1);
		return second;
	}),

	third: Ember.computed(function(){
		var third = Math.floor((Math.random() * 10) + 1);
		return third;
	}),

	fifth: Ember.computed(function(){
		var forth = Math.floor((Math.random() * 10) + 1);
		return forth;
	}),

	sixth: Ember.computed(function(){
		var sixth = Math.floor((Math.random() * 100) + 1);
		return sixth;
	}),

	seventh: Ember.computed(function(){
		var seventh = Math.floor((Math.random() * 10) + 1);
		return seventh;
	}),

	updateErrors: function(){
		var sum = this.get('first') + this.get('second'); 
		var mul = this.get('third') * this.get('fifth'); 
		var sub = this.get('sixth') - this.get('seventh'); 
		var inputSumValue = parseInt(this.get('inputSum'));
		var inputMulValue = parseInt(this.get('inputMul'));
		var inputSubValue = parseInt(this.get('inputSub'));
		if(sum !== inputSumValue){
			this.set('addError', true);
			
		}else{
			this.set('addError', false);
			
		}

		if(mul !== inputMulValue){
			this.set('mulError', true);
			
		}else{
			this.set('mulError', false);
			
		}

		if(sub !== inputSubValue){
			this.set('subError', true);
			
		}else{
			this.set('subError', false);
			
		}

		

		
		
	}.observes('first', 'second', 'third', 'fifth', 'sixth', 'seventh', 'inputSum', 'inputMul', 'inputSub'),

	reDirect: Ember.computed('addError', 'mulError', 'subError', 'playAlarm', 'play', function(){
		var play = this.get('play');
		if((this.get('addError') === false) && (this.get('mulError') === false) && (this.get('subError') == false)){
			//this.set('playAlarm', false);
			var x = this.get('x');
			x.pause();
			return true;
		}else{
			return false;
		}

		
	}),

	/*stopAlarm: function(){
		if(addError == false && mulError == false && subError == false){
			this.set('reDirect', true);
		}
	}.observes('addError', 'mulError', 'subError'),*/

	playSound: Ember.computed('x', function(){
		var x = this.get('x');
		x.loop = true;

		var playAlarm = this.get('playAlarm');
		if(playAlarm === true){
			x.play();
		}
		else{
			x.pause();
		}
		
		
		return;
		
	}),


});
