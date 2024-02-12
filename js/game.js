function main(){
    // Obtaining the difficulty from the sessionStorage
    let difficulty = sessionStorage.getItem('difficulty');

    
    // Obtaining the name from  sessionStorage
    let name = sessionStorage.getItem('name');

    // Obtaining the selected colors from sessionStorage
    let colorsSelected = sessionStorage.getItem('colorsSelected');

    // Adding the base image to the colors selected
    let imagenBase='circulo';
    cambiocolores = colorsSelected.split(',');
    
    cambiocolores.push(imagenBase);
    
    // Create an array with the colors selected with random values
    
    
    let solution = [];
    colors = colorsSelected.split(',');
    for(let i = 0; i < 4; i++){
        let random = Math.floor(Math.random() * colors.length);
        solution.push(colors[random]);
    }
    

    //variables to control the index of the array
    currentIndex1 = cambiocolores.length - 1;
    currentIndex2 = cambiocolores.length - 1;
    currentIndex3 = cambiocolores.length - 1;
    currentIndex4 = cambiocolores.length - 1;

    // getting the number of attempts based on the difficulty

    function getAttempts(difficulty){
        switch(difficulty){
            case 'easy':
                return 10;
                break;
            case 'medium':
                return 6;
                break;
            case 'hard':
                return 4;
                break;
        }
    }
    
     


    let attempts = getAttempts(difficulty);

    //Creating the boards

    function buildBoard(attempts){
        for(let i = 0; i < attempts; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            row.id = 'row'+i;
            for(let j = 0; j < 4; j++){
                let col = document.createElement('div');
                col.classList.add('col-3');
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
                col.classList.add('col-3');
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


    //Calling the functions

    buildBoard(attempts);
    buildClues(attempts);

    document.getElementById('circle0').addEventListener('click', function(){
        //incrementing the index
        currentIndex1++;
        //console.log("ejecutando click en circulo 0");
        
        //if we reach the end of the array, we reset the index
        if(currentIndex1 >= cambiocolores.length){
            currentIndex1 = 0;
        }

        //changing the image
        this.src = '../img/'+cambiocolores[currentIndex1]+'.png';        
    });

    
    document.getElementById('circle1').addEventListener('click', function(){
        //incrementing the index
        currentIndex2++;
        

        //if we reach the end of the array, we reset the index
        if(currentIndex2 >= cambiocolores.length){
            currentIndex2 = 0;
        }

        //changing the image
        this.src = '../img/'+cambiocolores[currentIndex2]+'.png';  
    });

    document.getElementById('circle2').addEventListener('click', function(){
        //incrementing the index
        currentIndex3++;
        

        //si el indice es mayor a la longitud del array, lo reinicio
        if(currentIndex3 >= cambiocolores.length){
            currentIndex3 = 0;
        }

        //changing the image
        this.src = '../img/'+cambiocolores[currentIndex3]+'.png';  
    });

    document.getElementById('circle3').addEventListener('click', function(){
        //incrementing the index
        currentIndex4++;
       

        //if we reach the end of the array, we reset the index
        if(currentIndex4 >= cambiocolores.length){
            currentIndex4 = 0;
        }

        //changing the image
        this.src = '../img/'+cambiocolores[currentIndex4]+'.png';  
    });


    let doneattempts = 0;
    document.getElementById('try').addEventListener('click', function(){
        doneattempts++;
        if (doneattempts > attempts){
            window.location.href = 'lose.html';
        }
        //select the circles of the row
        fila = 'row'+(doneattempts-1);
        
        

        //select the circles of the row
        let cicle0 = document.querySelector('#circle'+(doneattempts-1).toString()+'0');
        let cicle1 = document.querySelector('#circle'+(doneattempts-1).toString()+'1');
        let cicle2 = document.querySelector('#circle'+(doneattempts-1).toString()+'2');
        let cicle3 = document.querySelector('#circle'+(doneattempts-1).toString()+'3');
        
        

        //changing the src of the circles of the row
        srcCircle0 = document.querySelector('#circle0').src;
        srcCircle1 = document.querySelector('#circle1').src;
        srcCircle2 = document.querySelector('#circle2').src;
        srcCircle3 = document.querySelector('#circle3').src;

        //changing the src of the circles of the row
        cicle0.src = srcCircle0;
        cicle1.src = srcCircle1;
        cicle2.src = srcCircle2;
        cicle3.src = srcCircle3;

        //creating an array with the circles of the row
        circlesPorFila = [cambiocolores[currentIndex1],cambiocolores[currentIndex2],cambiocolores[currentIndex3],cambiocolores[currentIndex4]];
        


        

        //compare the values of the row with the solution
        if(circlesPorFila[0] == solution[0] && circlesPorFila[1] == solution[1] && circlesPorFila[2] == solution[2] && circlesPorFila[3] == solution[3]){
            window.location.href = 'winner.html';
        }else{
            //compare the values of the row with the solution if true add a check, if false add a question mark or leave it empty
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

//calling the main function
main();