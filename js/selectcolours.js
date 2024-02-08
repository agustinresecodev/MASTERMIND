const difficulty = sessionStorage.getItem('difficulty');

document.getElementById('savecolors').addEventListener('click', function(e) {
    e.preventDefault();

    // Obtén todos los checkbox
    var checkboxes = document.getElementsByName('option');

    // Crea un objeto para mapear las dificultades a la cantidad de colores requeridos
    var difficultyColorCount = {
        'easy': 4,
        'medium': 5,
        'hard': 6
    };

    // Verifica si la dificultad seleccionada es válida
    if (difficulty in difficultyColorCount) {
        
        // Verifica si la cantidad de checkbox marcados es igual a la cantidad requerida para la dificultad
        var checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);
        if (checkedCheckboxes.length === difficultyColorCount[difficulty]) {
            
            // Guarda los valores de los checkbox marcados en sessionStorage
            var checkboxValues = checkedCheckboxes.map(checkbox => checkbox.value);
            sessionStorage.setItem('colorsSelected', checkboxValues);
            
            // Redirige al usuario a la página del juego
            window.location.href = 'game.html';   
        } else {
            alert('Selecciona ' + difficultyColorCount[difficulty] + ' colores');
        }
    } else {
        alert('Selecciona una dificultad');
    }

     
});




