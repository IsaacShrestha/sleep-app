import Ember from 'ember';

export default Ember.Component.extend({


	first: Ember.computed(function(){
		var first = Math.floor((Math.random() * 100) + 1);
		return first;
	}),

	second: Ember.computed(function(){
		var second = Math.floor((Math.random() * 100) + 1);
		return second;
	}),

	third: Ember.computed(function(){
		var third = Math.floor((Math.random() * 10) + 1);
		return third;
	}),

	fifth: Ember.computed(function(){
		var forth = Math.floor((Math.random() * 10) + 1);
		return forth;
	}),

	sixth: Ember.computed(function(){
		var sixth = Math.floor((Math.random() * 100) + 1);
		return sixth;
	}),

	seventh: Ember.computed(function(){
		var seventh = Math.floor((Math.random() * 10) + 1);
		return seventh;
	}),

	updateErrors: function(){
		var sum = this.get('first') + this.get('second'); 
		var mul = this.get('third') * this.get('fifth'); 
		var sub = this.get('sixth') - this.get('seventh'); 
		var inputSumValue = parseInt(this.get('inputSum'));
		var inputMulValue = parseInt(this.get('inputMul'));
		var inputSubValue = parseInt(this.get('inputSub'));
		if(sum !== inputSumValue){
			this.set('addError', true);
			
		}else{
			this.set('addError', false);
			
		}

		if(mul !== inputMulValue){
			this.set('mulError', true);
			
		}else{
			this.set('mulError', false);
			
		}

		if(sub !== inputSubValue){
			this.set('subError', true);
			
		}else{
			this.set('subError', false);
			
		}

		

		
		
	}.observes('first', 'second', 'third', 'fifth', 'sixth', 'seventh', 'inputSum', 'inputMul', 'inputSub'),
});
