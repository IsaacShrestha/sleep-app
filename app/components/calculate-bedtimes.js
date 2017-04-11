import Ember from 'ember';

export default Ember.Component.extend({
	hourtoSleep: '9',
	minutestoSleep: '00',
	activeBedTime: false,

	actions: {
		showBedTime(){
			this.set('activeBedTime', true);
		},

	},

	

	calculateBedTime: Ember.computed('hours', 'mins', function(){
		var h = parseInt(this.get('hours'));
		var m = parseInt(this.get('mins'));
		var reqTime = h - 9;
		var reqdayTime = 'AM';

		if(reqTime<=0){
			reqTime = 12+reqTime;
			reqdayTime = 'PM'
		}
		else{
			reqdayTime = 'AM'
		}

		if(m < 10){
			m = '0' + m;
		}
		
		var reqBedTime = reqTime + " : " + m + "  " + reqdayTime;
		return reqBedTime;
		
	})
});
