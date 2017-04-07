import DS from 'ember-data';

export default DS.Model.extend({
	wakeuptime: DS.attr(),
	bedtime: DS.attr(),
	bluelight: DS.attr(),
	deviceactivation: DS.attr(),
	noofsnooze: DS.attr(),
	number: DS.attr(),

});
