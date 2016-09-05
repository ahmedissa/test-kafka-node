var kafka = require('kafka-node'),
		async = require('async'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);
var payloads = [
        { topic: 'testclient', messages: ' . . Ut venenas diam, eu tempus dui.' },
    ];

producer.on('ready', function () {
	async.timesLimit(500000, 1, function(n, next) {
		producer.send(payloads, function (err, data) {
			if (n%25000 === 0) {
				       console.log(err, data, n)

			}
       next(null, n)
    });			
	}, function(err) {
		console.log(err, 'done')
	});

});


 producer.on('error', function (err) {
  console.error(err);
 })