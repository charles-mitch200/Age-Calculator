// Get elements from HTML to JavaScript
const btnElem = document.getElementById("calculate-js");
const birthdayElem = document.getElementById("birthday-js");
const resultElem = document.getElementById("result-js");

// function to display your age on the page
const calculateAge = () => {
  const birthdayValue = birthdayElem.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday!");
  } else {
    const age = getAge(birthdayValue);
    resultElem.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old.`;
  }
};

// Function that calculates age
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

// Adding an event listener to the button
btnElem.addEventListener("click", calculateAge);
