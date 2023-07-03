const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

const generateNumber = () => {  
  const randomNumber = Math.floor(Math.random() * 100);
  number.innerHTML = randomNumber;
}

btn.addEventListener('click', myFunction);  

const input = document.querySelector('.discount');

function myFunction() {
  // Get the text field
  var copyText = document.querySelector(".discount");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
}