

class Modelos {
    constructor (nombre, tipoDeModelo, precio, stock, valido){
        this.nombre = nombre,
        this.tipoDeModelo = tipoDeModelo,
        this.precio = precio,
        this.stock = stock,
        this.valido = valido
     }
     comprar (cant) {
        if (this.stock > 0 && this.stock >= cant) {
        this.stock = this.stock - cant
        let precioFinal = cant * this.precio
        console.log(`Compraste ${cant} metros cuadrados de  ${this.nombre}, te salio $${precioFinal}`);
        console.log(`El stock del producto es ${this.stock}`);
        }
        else{
            alert("Lo siento mucho, no hay stock suficiente del producto");
        }   
    }
}

// Declaracion de array de modelos

let modelosCargados = [];
var producto = new Modelos("burbuja","3D",600,100,true);
    modelosCargados.push(producto); 
    producto = new Modelos("tecno","3D",600,100,true);
    modelosCargados.push(producto); 
    producto = new Modelos("flor","3D",600,100,true);
    modelosCargados.push(producto); 
    producto = new Modelos("maya","rustico",600,150,true);
    modelosCargados.push(producto); 
    producto = new Modelos("travertino","rustico",700,50,true);
    modelosCargados.push(producto); 
    producto = new Modelos("pizarra","rustico",700,120,true);
    modelosCargados.push(producto); 
    producto = new Modelos("piedra","rustico",700,500,true);
    modelosCargados.push(producto);  
    
// Funcion de control para corroborar que lo ingresado por prompt sea un numero

let controlNumero = (variable) => {
    if(isNaN(variable)){
        return 0
    }
    else{
        return 1
    }
}
// Funcion para cargar productos
const cargarProductos = () =>{
    var contraseña;
    contraseña = prompt("para cargar un producto ingrese la contraseña");
    if (contraseña == "airplac" ) {
        let nombre = prompt("Ingrese el nombre del modelo");
        let tipoDeModelo = prompt("Ingrese el tipo de modelo");
        do{
            var precio = Number(prompt("Ingrese el precio del modelo"));
            if (controlNumero(precio) == 0 ) {
                alert("El precio debe estar ingresado en numero");
            }
        }while(controlNumero(precio) == 0)
        do{
            var stock = Number(prompt("Ingrese el stock del modelo"));
            if (controlNumero(stock) == 0 ) {
                alert("El precio debe estar ingresado en numero");
            }
        }while(controlNumero(stock) == 0)
        if (precio > 0) {
            var valido = true
        }
        
        var producto = new modelosCargados(nombre,tipoDeModelo,precio,stock,valido)
        modelosCargados.push(producto) 
    }
    
}
// Funciones para filtrar
const MayorPrecio = () => {
    modelosCargados.sort((a,b) => {
        if(a.precio > b.precio){
            return -1
        }
        if(a.precio < b.precio){
            return 1
        }
        return 0
    })
    console.log(modelosCargados);
}
const MenorPrecio = () =>{
    modelosCargados.sort((a,b) => {
        if(a.precio > b.precio){
            return 1
        }
        if(a.precio < b.precio){
            return -1
        }
        return 0
    })
    console.log(modelosCargados);    
}
const OrdenAlfabetico = () =>{
    modelosCargados.sort((a,b) => {
        if(a.nombre > b.nombre){
            return 1
        }
        if(a.nombre < b.nombre){
            return -1
        }
        return 0
    })
    console.log(modelosCargados);    
}
const OrdenPorGama = () =>{
    modelosCargados.sort((a,b) => {
        if(a.gama > b.gama){
            return 1
        }
        if(a.gama < b.gama){
            return -1
        }
        return 0
    })
    console.log(modelosCargados);    
}
var ordenar = Number(prompt("¿Desea ordenar los productos? pulse 1 para continuar"));
while(ordenar == 1){
    console.log("Para ordenar por mayor precio pulse 1");
    console.log("Para ordenar por menor precio pulse 2");
    console.log("Para ordenar por nombre pulse 3");
    console.log("Para ordenar por gama pulse 4");
    let orden = Number(prompt("¿Como desea ordenar?"));
    switch(orden){
        case 1: MayorPrecio()
        ordenar = 0;
        break;
        case 2: MenorPrecio()
        ordenar = 0;
        break;
        case 3: OrdenAlfabetico()
        ordenar = 0;
        break;
        case 4: OrdenPorGama()
        ordenar = 0;
        break;
        default: alert("La opcion ingresada es incorrecta");
    }
}
deseaComprar = Number(prompt("¿Desea comprar un producto? Ingrese 1 para comprar"));
while(deseaComprar == 1){
    var i = 1
    modelosCargados.forEach(obj => {
        console.log(i+") " + "Modelo " + obj.nombre +" sale $"+ obj.precio + " el metro cuadrado, quedan "+ obj.stock + " metros cuadrados en stock")
        i = i + 1
    });
    let opcion = Number(prompt("Que modelo desea comprar? Ingrese el numero correspondiente en la lista mostrada por consola"));
    let cant = Number(prompt(`¿Cuantos metros cuadrados de ${modelosCargados[opcion-1].nombre} queres comprar?`));
    modelosCargados[opcion-1].comprar(cant)
    deseaComprar = Number(prompt("¿Desea seguir comprando? Ingrese 1 para comprar"));
}

