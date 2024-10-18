const btnEl = document.getElementById("btn")


const birthdayEl = document.getElementById("birthday");

const resultEl =document.getElementById("result");

function calculateAge(){
    const birthdayvalue = birthdayEl.value;
    if(birthdayvalue === "" ){
        alert("Please enter a date");
    }else{
        const age = getAge(birthdayvalue);
        resultEl.innerText =  `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}


function getAge(birthdayvalue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayvalue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 &&  currentDate.getDate() < birthdayDate.getDate())
    ){
        age--;
    }

    return age;
}

btnEl.addEventListener("click" , calculateAge);




// Code with explanation //


// Get the button element with ID "btn"



// const btnEl = document.getElementById("btn");

// // Get the input element with ID "birthday"
// const birthdayEl = document.getElementById("birthday");

// // Get the result element with ID "result"
// const resultEl = document.getElementById("result");

// // Function to calculate the user's age
// function calculateAge() {
//     // Get the value from the input field
//     const birthdayvalue = birthdayEl.value;

//     // Check if the input is empty
//     if (birthdayvalue === "") {
//         alert("Please enter a date");
//     } else {
//         // Calculate the age using the getAge function
//         const age = getAge(birthdayvalue);

//         // Check if the result is a valid age (age !== NaN)
//         if (!isNaN(age)) {
//             resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//         } else {
//             resultEl.innerText = "Invalid date. Please enter a valid date.";
//         }
//     }
// }

// // Function to calculate the actual age based on the birthday
// function getAge(birthdayvalue) {
//     // Get the current date
//     const currentDate = new Date();

//     // Convert the birthday input value into a date object
//     const birthdayDate = new Date(birthdayvalue);

//     // Check if the birthdayDate is a valid date
//     if (isNaN(birthdayDate.getTime())) {
//         return NaN; // Return NaN if the date is invalid
//     }

//     // Calculate the difference in years between the current year and the birth year
//     let age = currentDate.getFullYear() - birthdayDate.getFullYear();

//     // Calculate the difference in months
//     const month = currentDate.getMonth() - birthdayDate.getMonth();

//     // Check if the birthday hasn't occurred yet this year
//     if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
//         age--;
//     }

//     // Return the calculated age
//     return age;
// }

// // Add an event listener to the button to trigger the calculateAge function when clicked
// btnEl.addEventListener("click", calculateAge);
