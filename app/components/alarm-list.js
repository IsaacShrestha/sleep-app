import Ember from 'ember';

export default Ember.Component.extend({
	router: Ember.inject.service('-routing'),
	wakeupalarm: true,
	bedtimereminder: true,
	wakeupAlarm: false,
	
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
			this.set('wakeupAlarmValue', true);
			this.get('router').transitionTo('editalarms', ['wakeup']);

		},

		editBedtime(){
			this.get('router').transitionTo('editalarms', ['bedtime']);

		}

		
	}
});
