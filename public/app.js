window.onload = function() {
  // new PieChart(chart);
  // new ColumnChart(chart);

  var series = [{name: "fruit", data:[3,7,8,1], color: "#E6529A"}]

  var options = {
    chart: "column",
    title: "title goes here",
    series: series,
    categories: ["apples", "bananas", "oranges", "pears"],
    container: document.querySelector('#chart') 
  }



  new Chart(options);
}


