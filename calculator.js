//x and y are inputs
let resultTable = document.getElementById("resultsTable"); //result table
let summaryTable = document.getElementById("summaryTable"); //summary table
let goodResults = []; //array for all the valid results input


while (true){ //while ok/continue has been pressed and cancel is unpressed
    let xval = prompt("Enter x value. (Numbers only)");
    if (xval == null) break;
    let yval = prompt("Enter y value. (Numbers only)");
    if (yval == null) break;
    let operator = prompt("Choose an operator. (Add+, Sub-, Mod%, Divide/ or Multiply *");
    if (operator == null) break; 

    let result;
    let x = Number(xval); //changing x and y to numbers for computation
    let y = Number(yval);

    if (isNaN(x) || isNaN(y)){
        result = "Error: Number inputs are invalid."; //if x or y aren't valid numbers
    }
    else {
        switch (operator) { //for each of the valid arithmetic operators, do that operation
            case "+": //add
                result = x + y; break;
            case "-": //sub
                result = x - y; break;
            case "%": //mod
                result = x % y; break;
            case "/": //divide
                result = x / y; break;
            case "*": //multiply
                result = x * y; break;
            default:
                result = "Error: Invalid arithmetic operation input.";
        }
    }

    let row = resultTable.insertRow(); //adding a new row to result table 
    row.insertCell(0).textContent = x; 
    row.insertCell(1).textContent = y;
    row.insertCell(2).textContent = operator;
    row.insertCell(3).textContent = result;

    if (typeof result == "number"){ //if inputs were valid, add to array
        goodResults.push(result);
    }  
}

if (goodResults.length > 0){
    let min = Math.min(...goodResults);//the minimum of all results
    let max = Math.max(...goodResults);//the maximum of all results
    let sum = goodResults.reduce((a, b) => a +b, 0); //Adding all the results together
    let avg = sum/goodResults.length;

    let sumRow = summaryTable.insertRow();
    sumRow.insertCell(0).textContent = min;
    sumRow.insertCell(1).textContent = max;
    sumRow.insertCell(2).textContent = avg.toFixed(2);
    sumRow.insertCell(3).textContent = sum;

    summaryTable.style.display = "table";
}
/* 
why isnt it prompting on the website...
styling ofc
*/
