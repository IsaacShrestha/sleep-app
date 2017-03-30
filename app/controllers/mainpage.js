import Ember from 'ember';

 
export default Ember.Controller.extend({
 
  chartOptions: {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Sleep log'
    },
    xAxis: {
      categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yAxis: {
      title: {
        text: 'Hours Slept'
      }
    }
  },
 
  chartData: [{
    name: 'John',
    data: [6,7,8,8,5,4,10]
  }, /*{
  	//we can use factors to measure sleep quality here instead of just hours slept
    name: 'Hours',
    data: [5, 7, 3]
  },{
	name: 'Quality',
	data: [7, 8, 5]
  }*/
  ],
 

 
});


