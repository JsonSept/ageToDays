function ageToDays() {
    let ageInDays = parseFloat(document.getElementById('age').value);

    // Check if the input is a valid number
    if (isNaN(ageInDays)) {
        alert("Please enter a valid number for minutes.");
        return;
    }

    // Convert age to days
    let daysAge = ageInDays * 365.25; 
    
    // Display the result in the output field
    document.getElementById('days').value = daysAge.toFixed(2);
 }