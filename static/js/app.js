// from data.js
var tableData = data;

// when page loads, show data
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the ufo data from data.js
console.log(tableData);

tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
});