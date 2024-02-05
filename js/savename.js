console.log('savename.js loaded');

document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Obtén el valor del campo de nombre
    var name = document.getElementById('fname').value;
    var difficulty = document.getElementById('difficulty').value;
  
    // Guarda el valor en sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('difficulty', difficulty);
  });