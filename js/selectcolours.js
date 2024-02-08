//Recieve the difficulty from the sessionStorage
const difficulty = sessionStorage.getItem('difficulty');

//Receieve the colors selected by the user
document.getElementById('savecolors').addEventListener('click', function(e) {
    e.preventDefault();

    // Obtain all the checkboxes
    var checkboxes = document.getElementsByName('option');

    // Create an object to store the amount of colors for each difficulty
    var difficultyColorCount = {
        'easy': 4,
        'medium': 5,
        'hard': 6
    };

    // Verify if the difficulty is in the difficultyColorCount object
    if (difficulty in difficultyColorCount) {
        
        // Verify if the amount of checked checkboxes is equal to the amount of colors for the selected difficulty
        var checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        if (checkedCheckboxes.length === difficultyColorCount[difficulty]) {
            
            // Save the selected colors in the sessionStorage
            var checkboxValues = checkedCheckboxes.map(checkbox => checkbox.value);
            sessionStorage.setItem('colorsSelected', checkboxValues);
            
            // Redirect to the game page
            window.location.href = 'game.html';   
        } else {
            alert('Selecciona ' + difficultyColorCount[difficulty] + ' colores');
        }
    } else {
        alert('Selecciona una dificultad');
    }

     
});




