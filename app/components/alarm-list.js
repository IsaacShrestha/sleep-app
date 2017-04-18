import Ember from 'ember';


export default Ember.Component.extend({
	router: Ember.inject.service('-routing'),
	wakeupalarm: true,
	bedtimereminder: true,
	wakeupAlarm: false,
	alarmSetTime: null,
	editwakeupAlarm: false,
	editbedTimeReminder: false,
	displayAlarmTime: false,
	reminder: false,
	alarm: false,
	hours: null,
	minutes: null,
	selectedDayTime: null,
	alarmTime: null,
	alarmType: null,
	
	
	actions: {
		 		
		onWakeAlarm() {
			this.set('wakeupalarm', true);
			console.log('Testing console log');
		},

		offWakeAlarm() {
			this.set('wakeupalarm', false);
		},

		offBedAlarm(){
			this.set('bedtimereminder', false );
		},

		onBedAlarm(){
			this.set('bedtimereminder', true);
		},

		editWakeup(){
			this.set('editwakeupAlarm', true);
			//this.set('editbedTimeReminder', false);
			//this.get('router').transitionTo('editalarms', ['wakeup']);

		},

		editBedtime(){
			this.set('editbedTimeReminder', true);
			//this.set('editwakeupAlarm', false);
			//this.get('router').transitionTo('editalarms', ['bedtime']);

		},
		
		selectHour(value){
			this.set('hours', value);
		},

		minutes(value) {
			this.set('minutes', value);

		},

		dayTime(value){
			this.set('selectedDayTime', value);
		},

		setAlarm(){
			var alarm = this.get('hours')+ " : " + this.get('minutes') + "  " + this.get('selectedDayTime');
			this.set('displayAlarmTime', true ); 
			this.set('wakeupalarm', true);
			this.set('bedtimereminder', true);
			this.set('alarmTime', alarm ); 
			this.set('alarm', true);

			//calculating alarmtime in milliseconds
		/*	var hour = Date.parse(this.get('hours'));
			var mins = Date.parse(this.get('minutes'));*/
			var hour = this.get('hours');
			var mins = this.get('minutes');
			var total1 = hour + (mins/60);
			var final1 = total1 * 60 * 60 * 1000;

			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var total2 = h + (m/60);
			var final2 = total2 * 60 * 60 * 1000;

			var diff = final2 - final1;

			Ember.run.later(this,function(){
				this.get('router').transitionTo('playalarmsounds');
			},diff);
			
			//this.get('router').transitionTo('playalarmsounds'); displayAlarmTime
		},

		setReminder(){
			var alarm = this.get('hours')+ " : " + this.get('minutes') + "  " + this.get('selectedDayTime');
			this.set('bedtimereminder', true);
			this.set('wakeupalarm', true);
			this.set('displayAlarmTime', true ); 
			this.set('alarmTime', alarm ); 
			this.set('reminder', true);

			var hour = this.get('hours')+12;
			var mins = this.get('minutes');
			var total1 = hour + (mins/60);
			var final1 = total1 * 60 * 60 * 1000;

			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var total2 = h + (m/60);
			var final2 = total2 * 60 * 60 * 1000;

			var diff = final1 - final2;

			//alert(diff);

			Ember.run.later(this,function(){
				this.get('router').transitionTo('playalarmsounds');
			},diff);
			
			//this.get('router').transitionTo('alarms');
		},

		
	},

	//Calculates bed time
	bedTime: Ember.computed('hours', 'minutes', 'selectedDayTime', function(){
		var h = parseInt(this.get('hours'));
		var m = parseInt(this.get('minutes'));
		var dayTime = this.get('selectedDayTime');
		var b = null;
		var reqdayTime = dayTime;
		//var t = h + m/60;
		var reqTime = h - 9;
		
		var a = 12 + reqTime;
		if(a >= 12 && dayTime == "AM"){
			b = a - 12;
			reqdayTime = "AM";
		}
		
		else{
			b = a;
			reqdayTime = "PM";
		}
		

		

		
		var reqBedTime = b + " : " + m + "  " + reqdayTime;
		return reqBedTime;
		
	}),

	//Calculates wakingup time
	wakingAlarm: Ember.computed('hours', 'minutes', 'selectedDayTime', function(){
		var h = parseInt(this.get('hours'));
		var m = parseInt(this.get('minutes'));
		var dayTime = this.get('selectedDayTime');

		var reqdayTime = dayTime;
		var b = null;
		//var t = h + m/60;
		var reqTime = h + 9;
		if(reqTime < 12){
			reqdayTime = dayTime;
		}else{
			reqdayTime = "AM";
		}


		var a = reqTime - 12;
		
		if(a <= 0){
			b = a + 12;
		}
		else{
			b=a;
		}
		

		
		var reqWakeTime = b + " : " + m + "  " + reqdayTime;
		return reqWakeTime;

	}),

	
	
	
});
