function main(){
    // obtenemos la dificultad de sessionStorage
    let difficulty = sessionStorage.getItem('difficulty');

    
    // obtenemos el nombre de sessionStorage
    let name = sessionStorage.getItem('name');

    // obtenemos los colores seleccionados de sessionStorage
    let colorsSelected = sessionStorage.getItem('colorsSelected');

    // añadimos la imagen base a los colores seleccionados
    let imagenBase='circulo';
    cambiocolores = colorsSelected.split(',');
    console.log(cambiocolores);
    cambiocolores.push(imagenBase);
    
    // sacamos un array de los colores seleccionados con valores aleatorios
    
    let solution = [];
    colors = colorsSelected.split(',');
    for(let i = 0; i < 4; i++){
        let random = Math.floor(Math.random() * colors.length);
        solution.push(colors[random]);
    }
    console.log(solution);

    //variables que controlaran el indice de la imagen
    currentIndex1 = cambiocolores.length - 1;
    currentIndex2 = cambiocolores.length - 1;
    currentIndex3 = cambiocolores.length - 1;
    currentIndex4 = cambiocolores.length - 1;

    // vemos el numero de intentos en base a la dificultad

    function getAttempts(difficulty){
        switch(difficulty){
            case 'easy':
                return 10;
                break;
            case 'medium':
                return 7;
                break;
            case 'hard':
                return 5;
                break;
        }
    }
    
     


    let attempts = getAttempts(difficulty);

    //creamos el tablero variable en base a la dificultad

    function buildBoard(attempts){
        for(let i = 0; i < attempts; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            row.id = 'row'+i;
            for(let j = 0; j < 4; j++){
                let col = document.createElement('div');
                col.classList.add('col');
                row.appendChild(col);
                let img = document.createElement('img');
                img.src = '../img/circulo.png';
                img.classList.add('circle');
                img.id = 'circle'+i.toString()+j.toString();                
                col.appendChild(img);
            }
            document.getElementById('board').appendChild(row);
        }
    }

    function buildClues(attempts){
        for(let i = 0; i < attempts; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            row.id = 'row'+i;
            for(let j = 0; j < 4; j++){
                let col = document.createElement('div');
                col.classList.add('col');
                row.appendChild(col);
                let img = document.createElement('img');
                img.src = '../img/circulo.png';
                img.classList.add('circle');
                img.id = 'clue'+i.toString()+j.toString();                
                col.appendChild(img);
            }
            document.getElementById('clues').appendChild(row);
        }
    }


    buildBoard(attempts);
    buildClues(attempts);

    document.getElementById('circle0').addEventListener('click', function(){
        //incremento de indice
        currentIndex1++;
        console.log("ejecutando click en circulo 0");

        //si el indice es mayor a la longitud del array, lo reinicio
        if(currentIndex1 >= cambiocolores.length){
            currentIndex1 = 0;
        }

        //cambio de imagen
        this.src = '../img/'+cambiocolores[currentIndex1]+'.png';        
    });

    
    document.getElementById('circle1').addEventListener('click', function(){
        //incremento de indice
        currentIndex2++;
        console.log("ejecutando click en circulo 1");

        //si el indice es mayor a la longitud del array, lo reinicio
        if(currentIndex2 >= cambiocolores.length){
            currentIndex2 = 0;
        }

        //cambio de imagen
        this.src = '../img/'+cambiocolores[currentIndex2]+'.png';  
    });

    document.getElementById('circle2').addEventListener('click', function(){
        //incremento de indice
        currentIndex3++;
        console.log("ejecutando click en circulo 2");

        //si el indice es mayor a la longitud del array, lo reinicio
        if(currentIndex3 >= cambiocolores.length){
            currentIndex3 = 0;
        }

        //cambio de imagen
        this.src = '../img/'+cambiocolores[currentIndex3]+'.png';  
    });

    document.getElementById('circle3').addEventListener('click', function(){
        //incremento de indice
        currentIndex4++;
       

        //si el indice es mayor a la longitud del array, lo reinicio
        if(currentIndex4 >= cambiocolores.length){
            currentIndex4 = 0;
        }

        //cambio de imagen
        this.src = '../img/'+cambiocolores[currentIndex4]+'.png';  
    });


    let doneattempts = 0;
    document.getElementById('try').addEventListener('click', function(){
        doneattempts++;
        if (doneattempts > attempts){
            window.location.href = 'lose.html';
        }
        fila = 'row'+(doneattempts-1);
        //seleccionamos la fila
        

        //seleccionamos los circulos de la fila
        let cicle0 = document.querySelector('#circle'+(doneattempts-1).toString()+'0');
        let cicle1 = document.querySelector('#circle'+(doneattempts-1).toString()+'1');
        let cicle2 = document.querySelector('#circle'+(doneattempts-1).toString()+'2');
        let cicle3 = document.querySelector('#circle'+(doneattempts-1).toString()+'3');
        
        

        //cambiamos sus valores
        srcCircle0 = document.querySelector('#circle0').src;
        srcCircle1 = document.querySelector('#circle1').src;
        srcCircle2 = document.querySelector('#circle2').src;
        srcCircle3 = document.querySelector('#circle3').src;

        //cambiamos sus valores de src de los circulos de la fila
        cicle0.src = srcCircle0;
        cicle1.src = srcCircle1;
        cicle2.src = srcCircle2;
        cicle3.src = srcCircle3;

        circlesPorFila = [cambiocolores[currentIndex1],cambiocolores[currentIndex2],cambiocolores[currentIndex3],cambiocolores[currentIndex4]];
        


        

        //comparamos los valores de la fila con la solucion
        if(circlesPorFila[0] == solution[0] && circlesPorFila[1] == solution[1] && circlesPorFila[2] == solution[2] && circlesPorFila[3] == solution[3]){
            window.location.href = 'winner.html';
        }else{
            //comparamos los valores de la fila con la solucion
            for(let i = 0; i < 4; i++){
                if(circlesPorFila[i] == solution[i]){
                    let clue = document.querySelector('#clue'+(doneattempts-1).toString()+i.toString());
                    clue.src = '../img/check.png';
                }else{
                    if(solution.indexOf(circlesPorFila[i]) != -1){
                        let clue = document.querySelector('#clue'+(doneattempts-1).toString()+i.toString());
                        clue.src = '../img/interrogant.png';
                    }
                }
            }
        }
    
    });

}
main();