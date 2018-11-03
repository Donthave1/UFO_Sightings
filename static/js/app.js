// from data.js
let tableData = data;
let noResult = noData;
// Getting a reference to the button on the page with the id property set to `click-me`
let button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
let inputField = d3.select("#datetime");

// This function is triggered when the button is clicked
button.on("click", function() {
    //prevent page from refreshing
    d3.event.preventDefault();
    // Set New Table
    let newTable = d3.select("tbody");
    newTable.selectAll("td").remove()

    // User Input
    let userInput = inputField.property("value");
    console.log(`User Input: ${userInput}`);
    // Validate input
    let pickedDate = tableData.filter(date => date.datetime === userInput); 
    console.log(pickedDate);
    let matchValue = pickedDate.map(xDate => xDate.datetime);
    console.log(matchValue);
    if (userInput === matchValue[0]) {
        pickedDate.forEach((resultDate) => {
            // Get a reference to the table body
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");
            Object.entries(resultDate).forEach(([key, value]) => {
                let cell = tbody.append("td");
                cell.text(value);
            });
        });
    }
    else {
        let tbody = d3.select("tbody");
        let row = tbody.append("tr");
            Object.entries(noResult).forEach(([key, value]) => {
                let cell = tbody.append("td");
                cell.text(value);
        });
    }
});


// // Setting up all variable array
// var datetime = tableData.map(sight => sight.datetime);
// var city = tableData.map(sight => sight.city);
// var state = tableData.map(sight => sight.state);
// var country = tableData.map(sight => sight.country);
// var shape = tableData.map(sight => sight.shape);
// var durationMinutes = tableData.map(sight => sight.durationMinutes);
// var comments = tableData.map(sight => sight.comments);

