
//SUMAR

//crear una variable y constante, se lee el id del boton del html
const boton1 = document.getElementById("btnsumar");
//el boton estara al pendiente cuando el usuario de click y despues realice la funcion
boton1.addEventListener("click", sumar);

function sumar()
//leer variable de los imputs
{
    const varnumero1 = Number(document.getElementById("num1").value);
    const varnumero2 = Number(document.getElementById("num2").value);

    //crear variable para guardar resultarlo
    const varresultado = varnumero1 + varnumero2;
    const imprimirsumresultado = document.getElementById("resultado1");
   //Imprimir resultado
    
    imprimirsumresultado.innerText = varresultado;

}


//RESTAR


const boton2 = document.getElementById("btnrestar");
boton2.addEventListener("click",restar);

function restar()
{
    const varnumero3 = Number(document.getElementById("num3").value);
    const varnumero4 = Number(document.getElementById("num4").value);
    const imprimirresresultado2 = document.getElementById("resultado2");

    const varresultado2 = varnumero3 - varnumero4;
    
    imprimirresresultado2.innerText = varresultado2;

}


//MULTIPLICAR

const boton3 = document.getElementById("btnmult");
boton3.addEventListener("click", multiplicar);

function multiplicar()
{
    const varnumero5 = Number(document.getElementById("num5").value);
    const varnumero6 = Number(document.getElementById("num6").value);
    const imprimirmulresultado3 = document.getElementById("resultado3");

    const varresultado3 = varnumero5 * varnumero6;
    
    imprimirmulresultado3.innerText = varresultado3;

}


//DIV
const boton4 = document.getElementById("btndiv");
boton4.addEventListener("click", dividir);

function dividir()
{
    const varnumero7 = Number(document.getElementById("num7").value);
    const varnumero8 = Number(document.getElementById("num8").value);
    const imprimirdivresultado4 = document.getElementById("resultado4");

    const varresultado4 = varnumero7 / varnumero8;
    
    imprimirdivresultado4.innerText = varresultado4;

}


//MOSTRAR NUMEROS DEL 0 AL 100

const boton5 = document.getElementById("btnmostar");
boton5.addEventListener("click", mostrar);

function mostrar(){

 const listas = document.getElementById("listado");



    for(let x=1; x<=100; x=x+1)

    {
    //alert("Numero" + x);
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");

    li.innerText = x;
    listas.appendChild(li);
    
 }
}


//FOR 
//valor inicial, valor final, incremento
//for(x=1; x<=3; x=x+1)   (X++ -es igual- x=x+1)
//{}