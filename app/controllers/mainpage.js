import Ember from 'ember';

 
export default Ember.Controller.extend({
 
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Sleep log'
    },
    xAxis: {
      categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    yAxis: {
      title: {
        text: ''
      }
    }
  },
 
  chartData: [{
    name: 'Hours',
    data: [6,7,8,8,5,4,10]
  }, {
  	//we can use factors to measure sleep quality here instead of just hours slept
    name: 'Quality',
    data: [5, 7, 3, 10, 11, 10, 8]
  },{
    name: 'Bluelight filter',
    data: [10, 11, 11, 9, 10, 11, 11]
  },{
    name: 'Device inactive',
    data: [7, 10, 9, 9, 8, 9, 7]
  },
  {
    name: 'Snoring',
    data: [2, 1, 0, 0, 0, 1, 3]
  },
  ],
 

 
});


