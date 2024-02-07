document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtén el valor del campo de nombre
    var name = document.getElementById('fname').value;
    var difficulty = document.getElementById('difficulty').value;
  
    // Verifica si los campos están vacíos
    if (!name.trim()) {
        alert('Por favor, completa el campo de nombre');
        return;
    }

    if (!difficulty.trim()) {
        alert('Por favor, selecciona una dificultad');
        return;
    }
  
    // Guarda el valor en sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
});