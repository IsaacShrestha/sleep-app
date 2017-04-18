import Ember from 'ember';

 
export default Ember.Controller.extend({
 
  chartOptions: {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Sleep log'
    },
    xAxis: {
      categories: [10,'',11,'',12,'',1,'',2,'',3,'',4,'',5]
    },
    yAxis: {
      title: {
        text: 'Sleep'
      }
    }
  },
 
  chartData: [{
    name: '',
    data: [0,2,3,4,3,7,8,9,8,7,9,4,6,2,0]
  }, 
  ],
 

 
});


