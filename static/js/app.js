// from data.js
var tableData = data;

// when page loads, show data
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Console.log the ufo data from data.js
// console.log(tableData);

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

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", filterDate);

// Complete the event handler function for the form
function filterDate() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // console.log(inputElement);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);

  // Use the form input to filter the data by date
  var filterData = tableData.filter(ufo => ufo.datetime == inputValue);

  console.log(filterData);

}