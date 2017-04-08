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
			//this.get('router').transitionTo('editalarms', ['wakeup']);

		},

		editBedtime(){
			this.set('editbedTimeReminder', true);
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
		}

		
	},

	bedtime: Ember.computed(function(){
		var hours = this.get('hours');
		var mins = this.get('mins');
		var totalHours = parseInt(hours)+(parseInt(mins)/60);
		var bedtimeReminder = parseInt(morningAlarmTime) - 9;
		return bedtime;
	})

	
});
