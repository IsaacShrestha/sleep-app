import Ember from 'ember';

export default Ember.Component.extend({
	wakeupalarm: true,

	actions: {
		onWakeAlarm() {
			this.set('wakeupalarm', true);
		},

		offWakeAlarm() {
			this.set('wakeupalarm', false);
		},
	}
});
