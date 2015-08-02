
'use strict';

Package.describe({
  name: "pfafman:charts-plus",
  summary: 'Chart.js and Chart.Scatter, Responsive, simple, clean and interactive charts using HTML5 <canvas>',
  version: "1.0.2",
  git: 'https://github.com/pfafman/meteor-chartsplus.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('Chart');
  api.addFiles(
    [
      'Chart.js',
      'Chart.Scatter.js',
      'export.js'
    ]
    , 'client'
  );

});

 

Package.onTest(function (api) {
  
});