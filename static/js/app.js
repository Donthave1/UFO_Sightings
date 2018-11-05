// from data.js
let tableData = data;
let noResult = noData;
// Getting a reference to the button on the page with the id property set to `click-me`
let button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
let inputField = d3.select("#datetime");
// Display full table first
tableData.forEach((tData) => {
    // Get a reference to the table body
    let tbody = d3.select("tbody");
    let row = tbody.append("tr");
    Object.entries(tData).forEach(([key, value]) => {
        let cell = tbody.append("td");
        cell.text(value);
    });
});


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