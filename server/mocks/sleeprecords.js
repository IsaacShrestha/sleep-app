/* eslint-env node */
module.exports = function(app) {
  var express = require('express');
  var sleeprecordsRouter = express.Router();
  var sleeprecords = [
    {
      id: 1,
      wakeuptime: '6',
      bedtime: '9',
      bluelight: 'yes',
      deviceactivation: 'yes',
      noofsnooze: '2',
      number: '1'
    },
  ]



  sleeprecordsRouter.get('/', function(req, res) {
    var data = [];
    sleeprecords.forEach(function(item){
      data.push({
        type: 'sleeprecords',
        id: item.id.toString(),
        wakeuptime: item.wakeuptime,
        bedtime: item.bedtime,
        bluelight: item.bluelight,
        deviceactivation: item.deviceactivation,
        noofsnooze: item.noofsnooze,
        number: item.number
      });
    });


    res.set('Content_Type','application/vnd.api+json');
    res.send({
      "data": data
    });
  });

  sleeprecordsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  sleeprecordsRouter.get('/:id', function(req, res) {
    res.send({
      'sleeprecords': {
        id: req.params.id
      }
    });
  });

  sleeprecordsRouter.put('/:id', function(req, res) {
    res.send({
      'sleeprecords': {
        id: req.params.id
      }
    });
  });

  sleeprecordsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/sleeprecords', require('body-parser').json());
  app.use('/api/sleeprecords', sleeprecordsRouter);
};
