import Ember from 'ember';

export default Ember.Component.extend({
	//alarmTime: null,
	setHours: null,
	setMins: null,
	setDaytime: null,
	alarmTime: null,

	actions: {
		selectHour(hours){
			this.set('setHours', hours);
			console.log(setHours);
		},

		selectMin(mins){
			this.set('setMins', mins);
		},

		selectDaytime(daytime){
			this.set('setDaytime', daytime);
		}
	},

	/*alarmTime: Ember.computed(setHours, setMins, setDaytime, function(){
		alarmAt = this.get(setHours) + ":" + this.get(setMins) + ":" + this.get("setDaytime");
		console.log("HERE = "+ alarmTime);
		return 20;


	}),*/






});
