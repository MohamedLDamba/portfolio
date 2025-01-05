// Get elements by class name
let press = document.getElementsByClassName('nav')[0]; // Access the first element in the collection
let toggleButton = document.getElementsByClassName('navbar')[0];
// Initially hide the navigation
press.style.display = 'block';
toggleButton.style.display = 'none';



press.addEventListener('click', ()=>{
    if (toggleButton.style.display === 'none') {
        toggleButton.style.display = 'block'; // Show toggleButton
        toggleButton.style.display = 'flex'
        toggleButton.style.flexDirection = "column"; 
      } else {
        toggleButton.style.display = 'none'; // Hide toggleButton
      }
});
toggleButton.addEventListener('click', () => {
    if (press.style.display === 'none') {
      press.style.display = 'block'; // Show press
    } else {
      press.style.display = 'none'; // Hide press
    }
  });