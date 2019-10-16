const { metricScope } = require('aws-embedded-metrics');

const doWork = metricScope(metrics => async event => {
  metrics.putDimensions({ Operation: 'Agent' });
  metrics.putMetric('ExampleMetric', 100, 'Milliseconds');
  metrics.setProperty('RequestId', '422b1569-16f6-4a03-b8f0-fe3fd9b100f8');
});

doWork();