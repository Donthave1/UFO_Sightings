// from data.js
let tableData = data;

// Build full table
function buildTable(tableData) {
    // Clear current table
    let newTable = d3.select("tbody").remove();
    newTable = d3.select("table").append("tbody");

    tableData.forEach((tData) => {
        let tbody = d3.select("tbody");
        let row = tbody.append("tr");
        row.append("td").text(tData.datetime);
        row.append("td").text((tData.city).toUpperCase());
        row.append("td").text((tData.state).toUpperCase());
        row.append("td").text((tData.country).toUpperCase());
        row.append("td").text(tData.shape);
        row.append("td").text(tData.durationMinutes);
        row.append("td").text(tData.comments);
    });
};

// Execute when click filter button 
let filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {

    /// Get references to  input field
    let dateInput = d3.select("#dateInput").property("value");
    let cityInput = d3.select("#cityInput").property("value");
    let stateInput = d3.select("#stateInput").property("value");
    let countryInput = d3.select("#countryInput").property("value");
    let shapeInput = d3.select("#shapeInput").property("value");
    d3.select(".form-control").node().value = "";
    //  Reset the data
    let filteredData = tableData;
    //  Filter through multiple inputs

    if (dateInput != "") {
        filteredData = filteredData.filter(filterdata => filterdata.datetime === dateInput);
    }
    if (cityInput !="") {
        filteredData = filteredData.filter(filterdata => filterdata.city.toUpperCase() === cityInput.toUpperCase());
    }
    if (stateInput !="") {
        filteredData = filteredData.filter(filterdata => filterdata.state.toUpperCase() === stateInput.toUpperCase());
    }
    if (countryInput !="") {
        filteredData = filteredData.filter(filterdata => filterdata.country.toUpperCase() === countryInput.toUpperCase());
    }
    if (shapeInput !="") {
        filteredData = filteredData.filter(filterdata => filterdata.shape === shapeInput);
    };
    
    let newTable = d3.select("tbody").remove();
    newTable = d3.select("table").append("tbody");
    buildTable(filteredData);
});

// Execute when click reset button
let reset = d3.select("#clear-btn");

reset.on("click",function() {
    buildTable(tableData);
    d3.select("#dateInput").node().value = "";
    d3.select("#cityInput").node().value = "";
    d3.select("#stateInput").node().value = "";
    d3.select("#countryInput").node().value = "";
    d3.select("#shapeInput").node().value = "";
});

// Render the table for the first time on page load
buildTable(tableData);
