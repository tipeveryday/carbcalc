// Enter how many carbs are in bars, gel blocks, gels, and sports drinks:
let bars = 44;
let gel_blocks = 40;
let gels = 25;
let sports_drinks = 33;

// Set the carb calculation here
function carb_calculation(weight, distance, hours, minutes) {
    return (weight - 30) * (hours + (minutes / 60));
}

// ==================================
// IGNORE EVERYTHING ELSE BELOW HERE.
// ==================================

// Set the HTML objects.
let resultsSection = document.querySelector("#results_section");
let weightInput = document.querySelector('#weight_input');
let distanceInput = document.querySelector('#distance_input');
let hoursInput = document.querySelector('#hours_input');
let minutesInput = document.querySelector('#minutes_input');

// Gets hit when the user clicks the button.
function main() {
    getInputs();
    if (validationCheck()) {
        paintResultsSection();
        runCalculations();
    }  else
    showError();
}

// Grab the numbers from the user.
function getInputs() {
    weightInput = document.querySelector('#weight_input').valueAsNumber;
    distanceInput = document.querySelector('#distance_input').valueAsNumber;
    hoursInput = document.querySelector('#hours_input').valueAsNumber;
    minutesInput = document.querySelector('#minutes_input').valueAsNumber;
}

// Figure all the math out.
function runCalculations() {
    let carbsOutput1 = document.querySelector('#carbs_output_1');
    let carbsPerHourOutput = document.querySelector('#carbs_per_hour_output');
    let carbsOutput3 = document.querySelector('#carbs_output_3');
    let hoursOutput = document.querySelector('#hours_output');
    let minutesOutput = document.querySelector('#minutes_output');
    let barsOutput = document.querySelector('#bars_output');
    let gelBlocksOutput = document.querySelector('#gel_blocks_output');
    let gelsOutput = document.querySelector('#gels_output');
    let sportsDrinksOutput = document.querySelector('#sports_drinks_output');
    let caloriesOutput = document.querySelector('#calories_output');

    let carbs = carb_calculation(weightInput, distanceInput, hoursInput, minutesInput);

    carbsOutput1.innerHTML = Math.round(carbs);
    carbsOutput3.innerHTML = Math.round(carbs);
    carbsPerHourOutput.innerHTML = Math.round((carbs) / (hoursInput)); 
    hoursOutput.innerHTML = hoursInput;
    minutesOutput.innerHTML = minutesInput;
    caloriesOutput.innerHTML = Math.round(carbs) * 4;

    barsOutput.innerHTML = Math.round(carbs / bars);
    gelBlocksOutput.innerHTML = Math.round(carbs / gel_blocks);
    gelsOutput.innerHTML = Math.round(carbs / gels);
    sportsDrinksOutput.innerHTML = Math.round(carbs / sports_drinks);
}


// Writes the results section onto the page.
function paintResultsSection() {
    if ((hoursInput * 60) + minutesInput < 75) {
         return resultsSection.innerHTML = `<h2>Results</h2>
    <p>Since your pre-existing glycogen reserves are adequate for covering this distance and time without fueling, you don't need to eat carbs during this effort. However, if you feel like the mental benefit of doing so will allow you to perform better then consider bringing 1-2 gels along with you.</p>`;
} else {
     return resultsSection.innerHTML = `<h2>Results</h2>
  <p>You should aim to consume <b><span id="carbs_output_1"></span> g</b> carbs (<span id="calories_output"></span> calories), over the course of your race. Since you will be racing for <span id="hours_output"></span> hours and <span id="minutes_output"></span> minutes your goal should be <span id="carbs_per_hour_output"></span> grams of carbs per hour spent in activity.</p>
  <p><span id="carbs_output_3"></span>g carbs is the equivalent of: </p>
  <table width="100%;">
        <tr>
           <th width="25%;">Bars</th>
            <th width="25%;">Gel Blocks</th>
           <th width="25%;">Gels</th>
           <th width="25%;">Sports Drinks</th>
       </tr>
       <tr>
           <td align="center" id="bars_output"></td>
           <td align="center" id="gel_blocks_output"></td>
           <td align="center" id="gels_output"></td>
           <td align="center" id="sports_drinks_output"></td>
       </tr>
   </table>`; } 
}


function validationCheck() {
    if ((!weightInput) || (!distanceInput) || (!hoursInput)) {
        return false;
    } else {
        return true;
    }
}


function showError() {
    resultsSection.innerHTML = `<center><error>Looks like you're missing some fields.</error></center>`;
}