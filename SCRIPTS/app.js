/*definir variables, nunca deben iniciar con numero*/
var numero1=10.5;
var numero2=20;
var mul = numero1*numero2;
var sum = numero1+numero2;
var res = numero2-numero1;
var div = numero2/numero1;
var mod = numero1%numero2;
/*console.log(mul);
console.log(sum);
console.log(res);
console.log(div);
console.log(mod);

/*este resultado solo se ve por consola*/

/*
var nombre ="OSCAR BONILLA  ";
var profesion ="Desarrollador Full Stack";

console.log(nombre+profesion);

/*definimos una variable booleana*/
var tiene_mascota = true;
/*console.log(tiene_mascota);

/*definimos un array*/
var datos=["oscar",50,true,79471430,"kra 36 calle 1f"];
/*console.log(datos[4]);

/*operadores 
asignacion =
incremento num++
decremento num--
+ - / * 

operadores logicos
negacion ! en numeros es 0 y en letras es " "
AND o &&    OR o ||

RELACIONALES
< menor <=       > mayor  >=       ==  igual  !=  diferente

estructura
 if (condicion){
	
 }
*/
var edad=41;

if (edad>=18 && edad <=40) {
	console.log("eres un adulto joven");
}else{
	console.log("no eres un adulto joven");
}

var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

/*estructura for 
inicializacion variable de control
condicion controlo parar o seguir
incremento de la variable

for(var i=0;i<7;i++)
	{
		console.log (dias[i]);

	}

/*else if*/
/*for ..in    ---> leer sobre esta estructura, se supone que es para objetos*/

/*FUNCIONES
function nombre (){}
*/

/*
function sumar(numero1,numero2){
	var resultado=numero1+numero2;
	return resultado;
}

var res=sumar(88,55);
console.log("el resultado es",res);
*/

function iva(precio){
	var riva=precio*(19/100);
	return riva;
}

var resultado=iva(100000);
console.log("EL IVA DEL PRODUCTO ES   -->  ",resultado);







