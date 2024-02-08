
//Button to save the name and difficulty
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtain the values from the form
    var name = document.getElementById('fname').value;
    var difficulty = document.getElementById('difficulty').value;
  
    // Verify if the name and difficulty are not empty
    if (!name.trim()) {
        alert('Please enter your name');
        return;
    }

    if (!difficulty.trim()) {
        alert('Please select a difficulty');
        return;
    }
  
    // Save the name and difficulty in the sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
    window.location.href = 'selectcolours.html';
});