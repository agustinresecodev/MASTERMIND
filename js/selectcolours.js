
const  difficulty = sessionStorage.getItem('difficulty');

document.getElementById('fcolors').addEventListener('submit', function(e) {
    e.preventDefault();

     // Obtén todos los checkbox
        var checkboxes = document.getElementsByName('option');

    // Crea un array para guardar los valores de los checkbox
        var checkboxValues = [];
    // Itera sobre los checkbox
    for (var i = 0; i < checkboxes.length; i++) {
    // Si el checkbox está marcado, agrega su valor al array
        if (checkboxes[i].checked) {
            checkboxValues.push(checkboxes[i].value);
        }
    }
    sessionStorage.setItem('colorsSelected', checkboxValues);
});




