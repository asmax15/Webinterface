$(document).ready(function () {
    var canvas = document.getElementById('playeronline_chart');
   var data = {
       labels: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
       datasets: [
           {
               label: "Spieler Online",
               backgroundColor: "rgba(33,150,243,0.5)",
               borderColor: "rgba(33,150,243,1",
               borderWidth: 2,
               hoverBackgroundColor: "rgba(33,150,243,1",
               hoverBorderColor: "rgba(33,158,243,0.5",
               data: [65, 59, 30, 81, 56, 55, 40]
           }
       ]
   };
   var option = {
       animation: {
           duration: 1000
       }
   };
   Chart.default.global.defaultFrontColor = '#fff';
   Chart.default.global.legend.display = false;

   var myBarChart = Chart.Bar(canvas, {
       data:data,
       options:options
   })
});

//TODO: Chart Fixen (17:04)