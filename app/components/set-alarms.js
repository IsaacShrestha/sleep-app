import Ember from 'ember';

export default Ember.Component.extend({
	alarmTime: null,
	setHours: null,

	actions: {
		selectHour(value){
			//this.set('setHours', value);
			console.log(value);
		},
	}
});
