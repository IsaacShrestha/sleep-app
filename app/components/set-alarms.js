import Ember from 'ember';

export default Ember.Component.extend({
	//alarmTime: null,
	router: Ember.inject.service('-routing'),
	hours: null,
	minutes: null,
	selectedDayTime: null,
	alarmTime: null,

	actions: {
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
			this.set('alarmTime', alarm ); 
			this.get('router').transitionTo('alarms');
		}

	
	},


	alarmTitle: Ember.computed(function(){
		var url= window.location.pathname;
		var alarmType= url.substring(url.lastIndexOf('/')+1);
		return alarmType;
	}),
});