const ladoCuadrado = 5;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const radioCirculo = 4;

// Cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group("cuadrado");
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

// Triangulo
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo)  / 2;   

console.group("triangulo");
console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, y " + baseTriangulo + "cm, ");
console.log("El perimetro del triangulo es: " + perimetroCuadrado + "cm");
console.log("El area del cuadrado es: " + areaCuadrado + "cm²");
console.groupEnd();

//circulo
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo * Math.PI;
const areaCirculo = (radioCirculo * radioCirculo) * Math.PI;

console.group("Circulo");
console.log("El radio del circulo es: " + radioCirculo + "cm");
console.log("El diametro del cirulo es: " + diametroCirculo + "cm");
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El area del circulo es: " + areaCirculo + "cm²");
console.groupEnd();