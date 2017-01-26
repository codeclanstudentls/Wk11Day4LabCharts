var Chart = function(options){
  this.container = options.container;  
  this.chart = new Highcharts.Chart({

      chart: {
        type: options.chart,
        renderTo: options.container
      },
      title: {
        text: options.title
      },
        series: options.series,
      xAxis: {
        categories: options.categories
      }

      // above is known as an options hash?
      
  });

  

};