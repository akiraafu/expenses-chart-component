import data from "./data.json" assert { type: "json" };

// let getSingelArray = Object.values(data[1])
let newArr = [];

for (let i = 0; i < data.length; i++) {
    let day = Object.values(data[i]);
    newArr.push(day);
}

console.log(newArr);

// Load the Visualization API and the corechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
    // Create the data table.
    let data = new google.visualization.DataTable();
    data.addColumn("string", "Topping");
    data.addColumn("number");
    data.addRows(newArr);

    // Set chart options
    let options = {
        width: 570,
        height: 300,
        backgroundColor: "transparent",
        legend: { position: "none" },
        colors: ["#ec775f"],
        vAxis: {
            gridlines: {
                color: "transparent",
            },
            textPosition: "none",
            baselineColor: "none",
            ticks: [],
        },
        hAxis: {
            textStyle: {
                color: "#837",
                fontName: "Tahoma",
                fontSize: 12,
            },
        },
        tooltip: { isHtml: true },
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
    chart.draw(data, options);
}
