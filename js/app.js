// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Function for table
function table(myData){
    // Clear out existing data
    tbody.html(""); 
    myData.forEach(dataRow => {
        console.table(dataRow);
        var row = tbody.append("tr");
        
        console.table(Object.values(dataRow));
        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}

// This function is triggered when the button is clicked
function handleClick(){
    
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

    // Check to see if a date entered is been filtered
    if (date){
        // Apply filter to the table data to give only those
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);

    }

    table(filterData);
}

d3.selectAll("#filter-btn").on("click", handleClick);
table(tableData);
