// from data.js
var tableData = data;

// reference tbody 
tbody = d3.select("tbody");

// loop through using Object.entries to get data to add to the table in html
function displayData(data){
    tbody.text("");
    data.forEach(function(sighting){
    new_tr = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)
    })
})}

displayData(tableData);

// Select the input element 
var dateInputText = d3.select("#datetime");
// Select the button filtered data
var button = d3.select("filter-btn");

// filter data with date that the user inputs
function clickSelect(){

    //don't refresh the page!
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));

    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"));

    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect);