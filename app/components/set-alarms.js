import Ember from 'ember';

export default Ember.Component.extend({
	//alarmTime: null,
	setHours: null,
	setMins: null,
	setDaytime: null,
	alarmTime: null,


	actions: {
		selectHour(value){
			this.set('setHours', value);
		},

		selectMin(mins){
			this.set('setMins', mins);
		},

		selectDaytime(daytime){
			this.set('setDaytime', daytime);
		}
	},


	alarmTitle: Ember.computed(function(){
		var url= window.location.pathname;
		var alarmType= url.substring(url.lastIndexOf('/')+1);
		console.log(alarmType);
		return alarmType;
	}),

	alarmTime: Ember.computed(function(){
		var hour = this.get('setHours');
		var min = this.get('setMins');
		var dayTime = this.get('setDaytime');
		return hour;
	}),
	    

	/*alarmTime: Ember.computed(setHours, setMins, setDaytime, function(){
		alarmAt = this.get(setHours) + ":" + this.get(setMins) + ":" + this.get("setDaytime");
		console.log("HERE = "+ alarmTime);
		return 20;


	}),*/






});
