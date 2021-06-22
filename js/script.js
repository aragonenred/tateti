(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){


    
    var turno ="cruz";    
    var box = document.getElementsByClassName("box");
    var cruz = document.getElementsByClassName("cruz");
    var circulo = document.getElementsByClassName("circulo");
    var contenido =[];
    var estado ="";
    var boton = document.getElementById("boton");
  

    box[0].addEventListener("click", function(){validarBox(0)});
    box[1].addEventListener("click", function(){validarBox(1)});
    box[2].addEventListener("click", function(){validarBox(2)});
    box[3].addEventListener("click", function(){validarBox(3)});
    box[4].addEventListener("click", function(){validarBox(4)});
    box[5].addEventListener("click", function(){validarBox(5)});
    box[6].addEventListener("click", function(){validarBox(6)});
    box[7].addEventListener("click", function(){validarBox(7)});
    box[8].addEventListener("click", function(){validarBox(8)});

    


    function validarBox(boxNum){
        if (contenido[boxNum] ==='c' || contenido[boxNum] ==='x'){
            console.log("casillero ocupado")
        }else{
            if(estado ==="finalizado"){
                console.log("juego finalizado");
            }else{
            marcaBox(boxNum);}      
        }
    }

    function marcaBox(boxNum){
            if(turno === "cruz"){
                cruz[boxNum].style.display = "block";
                turno ="circulo";
                contenido[boxNum] = "x";/*Si es x está ocupado por una cruz*/
                document.getElementById("turno").innerHTML = "Turno: <span>" + turno + "</span>";


            }else{
                circulo[boxNum].style.display = "block";  
                turno = "cruz";  
                contenido[boxNum] = "c";/*Si es c está ocupado por un circulo*/
                document.getElementById("turno").innerHTML = "Turno: <span>" + turno + "</span>";
            }
            if (validarGanador() !="finalizado"){
                jugadorJS();
            }else{
                console.log("No correr JS");
            }

        }

    function validarGanador(){
            /**Horizontales */
            if(contenido[0] === contenido[1] & contenido[0]=== contenido[2]){ 
                if(contenido[0]!= null){
                    dibujaLinea(0, "H");
                    estado ="finalizado";}
            }
            if(contenido[3] === contenido[4] & contenido[3]=== contenido[5]){ 
                if(contenido[3]!= null){
                    dibujaLinea(3, "H");
                    estado ="finalizado";}
            }
            if(contenido[6] === contenido[7] & contenido[6]=== contenido[8]){ 
                if(contenido[6]!= null){
                    dibujaLinea(6, "H");
                    estado ="finalizado";}
            }

            /**Verticales */
            if(contenido[0] === contenido[3] & contenido[0]=== contenido[6]){ 
                if(contenido[0]!= null){
                    dibujaLinea(0, "V");
                    estado ="finalizado";}
            }
            if(contenido[1] === contenido[4] & contenido[1]=== contenido[7]){ 
                if(contenido[1]!= null){
                    dibujaLinea(1, "V");
                    estado ="finalizado";}
            }
            if(contenido[2] === contenido[5] & contenido[2]=== contenido[8]){ 
                if(contenido[2]!= null){
                    dibujaLinea(2, "V");
                    estado ="finalizado";}
            }

            /**Diagonales */
            if(contenido[0] === contenido[4] & contenido[0]=== contenido[8]){ 
                if(contenido[0]!= null){
                    dibujaLinea(4, "DI");
                    estado ="finalizado";}
            }
            if(contenido[2] === contenido[4] & contenido[2]=== contenido[6]){ 
                if(contenido[2]!= null){
                    dibujaLinea(4, "DD");
                    estado ="finalizado";}
            }

            return(estado);
        }

        function dibujaLinea(boxNum, direccion){
            
            switch (direccion){
                case 'H': 
                        box[boxNum].classList.add("lineaH");
                        break;

                case 'V':
                        box[ boxNum].classList.add("lineaV");
                        break;

                case 'DI':
                        box[boxNum].classList.add("lineaDI");
                        break;
                case 'DD':
                        box[boxNum].classList.add("lineaDD");
                        break;

                default: break;
            }
        }

        function jugadorJS(){
            var aleatorio = Math.round(Math.random()*10);
                console.log(aleatorio);
                
                if (aleatorio >8 || (contenido[aleatorio] ==='c' || contenido[aleatorio] ==='x')){

                    while(aleatorio >8 || (contenido[aleatorio] ==='c' || contenido[aleatorio] ==='x')){
                        aleatorio = Math.round(Math.random()*10);                                   
                    }                      
                        console.log("sali del while con este" + aleatorio);
                        circulo[parseInt(aleatorio)].style.display = "block";
                        turno = "cruz"; 
                        contenido[parseInt(aleatorio)] = "c";/*Si es c está ocupado por un circulo*/
                }else{
                        console.log("pase del else IF con este" + aleatorio);
                        circulo[parseInt(aleatorio)].style.display = "block";
                        turno = "cruz"; 
                        contenido[parseInt(aleatorio)] = "c";/*Si es c está ocupado por un circulo*/
                        }               
            document.getElementById("turno").innerHTML = "Turno: <span>" + turno + "</span>";
            validarGanador();
            return(aleatorio);
        }






    });
})();