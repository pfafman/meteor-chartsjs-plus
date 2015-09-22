
'use strict';

Package.describe({
  name: "pfafman:charts-plus",
  summary: 'Chart.js and Chart.Scatter, Responsive, simple, clean and interactive charts using HTML5 <canvas>',
  version: "1.0.2",
  git: 'https://github.com/pfafman/meteor-chartsplus.js.git'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);
  
  api.addFiles(
    [
      'Chart.js',
      'Chart.Scatter.js',
      'export.js'
    ]
    , 'client'
  );

  api.export('Chart');
  
});

 

Package.onTest(function (api) {
  
});