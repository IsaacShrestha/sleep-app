import Ember from 'ember';

 
export default Ember.Controller.extend({
 
  chartOptions: {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Good sleep log'
    },
    xAxis: {
      categories: ['10 pm','','11 pm','','12 am','','1 am','','2 am','','3 am','','4 am','','5 am']
    },
    yAxis: {
      title: {
        text: 'Awake___________Sleep__________Deep Sleep'
      }
    },
    
  },
 
  chartData: [{
    name: 'Sleep level',
    data: [0,2,3,4,7,8,9,9,8,9,9,9,6,5,0]
  }, 
  ],
 

 
});


