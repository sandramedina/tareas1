//nombre del super
let nombreSuper: string = "elruso";




let producto1: string = "fideos arcor";
let producto2: string = "galletitas bagley";
let producto3: string = "aerosol off";
let producto4: string = "agua villareal";
let cantidad1: number = 3;            
let cantidad2: number = 5;
let cantidad3: number = 2;
let cantidad4: number = 6;
let precio1: number = 20;
let precio2: number = 50;
let precio3: number = 35;
let precio4: number = 60;
let unidad1: number = 10;
let unidad2: number = 18;
let unidad3: number = 4;
let unidad4: number = 9;
let precioDefinido1: number = precio1 * cantidad1;
let precioDefinido2: number = precio2 * cantidad2;
let precioDefinido3: number = precio3 * cantidad3;
let precioDefinido4: number = precio4 * cantidad4;
let precioTotal: number = precioDefinido1 + precioDefinido2 + precioDefinido3 + precioDefinido4;
let stockRestante1: number = unidad1 - cantidad1;
let stockRestante2: number = unidad2 - cantidad2;
let stockRestante3: number = unidad3 - cantidad3;
let stockRestante4: number = unidad4 - cantidad4;


console.log("voy a comprar" cantidad1 producto1  , cantidad2 producto2 cantidad3 producto3 cantidad4 producto4);
console.log("el precio de" producto1 "seria" precioDefinido1 "el precio de" producto2 precioDefinido2 "el precio de" producto3 precioDefinido3 "el precio de" producto4 precioDefinido4);
console.log("el precio total seria" precioTotal);
console.log("el stock restante de cada producto seria" producto1 stockRestante1 producto2 stockRestante2 producto3 stockRestante3 producto4 stockRestante4);


