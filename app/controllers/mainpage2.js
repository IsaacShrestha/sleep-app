import Ember from 'ember';

 
export default Ember.Controller.extend({
 
  chartOptions: {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Bad sleep log'
    },
    xAxis: {
      categories: ['10 pm','','11 pm','','12 am','','1 am','','2 am','','3 am','','4 am','','5 am']
    },
    yAxis: {
      title: {
        text: 'Awake___________Sleep__________Deep Sleep'
      }
    }
  },
 
  chartData: [{
    name: 'Sleep level',
    data: [0,2,1,4,3,1,8,9,8,5,9,4,6,2,0]
  }, 
  ],
 

 
});


