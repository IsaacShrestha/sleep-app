import Ember from 'ember';

export default Ember.Component.extend({
	router: Ember.inject.service('-routing'),
	wakeupalarm: false,
	bedtimereminder: false,
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
			this.set('editbedTimeReminder', false);
			//this.get('router').transitionTo('editalarms', ['wakeup']);

		},

		editBedtime(){
			this.set('editbedTimeReminder', true);
			this.set('editwakeupAlarm', false);
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
			this.set('alarmTime', alarm ); 
			this.set('alarm', true);
			//this.get('router').transitionTo('alarms'); displayAlarmTime
		},

		setReminder(){
			var alarm = this.get('hours')+ " : " + this.get('minutes') + "  " + this.get('selectedDayTime');
			this.set('bedtimereminder', true);
			this.set('displayAlarmTime', true ); 
			this.set('alarmTime', alarm ); 
			this.set('reminder', true);
			//this.get('router').transitionTo('alarms');
		},

		
	},

	bedTime: Ember.computed('hours', 'minutes', 'selectedDayTime', function(){
		var h = parseInt(this.get('hours'));
		var m = parseInt(this.get('minutes'));
		var dayTime = this.get('selectedDayTime');
		var b = null;
		var reqdayTime = null;
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

	wakeupAlarm: Ember.computed('hours', 'minutes', 'selectedDayTime', function(){
		var h = parseInt(this.get('hours'));
		var m = parseInt(this.get('minutes'));
		var dayTime = this.get('selectedDayTime');
		var b = null;
		var reqdayTime = null;
		//var t = h + m/60;
		var reqTime = h + 9;
		
		var a = reqTime - 12;
		reqdayTime = "AM";
		
		

		
		var reqWakeTime = a + " : " + m + "  " + reqdayTime;
		return reqWakeTime;

	})

	
});
