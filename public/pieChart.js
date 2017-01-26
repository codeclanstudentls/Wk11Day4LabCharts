var PieChart = function(container) {
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.chart({
    chart: {
      type: "pie", 
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    series: [
    {
      name: "Type",
      data: [
      {
        name: "Fire",
        y: 24,
        color: "#ffac33"
      },
      {
        name: "Water",
        y: 25,
        color: "#73b7ff",
        sliced: true
      },
      {
        name: "Grass",
        y: 1,
        color: "#00ba2f"
      },
      {
        name: "Wind",
        y: 50,
        color: "#D24D8F",
        sliced: true
      }
      ]
    }
    ]

  });
}