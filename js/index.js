class Productos {
    constructor (nombre,modelo,precio){
        this.nombre = nombre,
        this.modelo = modelo,
        this.precio = precio
    }
}

let productosCargados = [];
var producto = new Productos("BURBUJA","mod-3D",700)
productosCargados.push(producto)
var producto = new Productos("TECNO","mod-3D",700)
productosCargados.push(producto)
var producto = new Productos("FLOR","mod-3D",700)
productosCargados.push(producto)
var producto = new Productos("PIEDRA","mod-rus",700)
productosCargados.push(producto)
var producto = new Productos("MAYA","mod-rus",700)
productosCargados.push(producto)
var producto = new Productos("PIZARRA","mod-rus",700)
productosCargados.push(producto)
var producto = new Productos("LORETO","mod-rus",700)
productosCargados.push(producto)
var producto = new Productos("PEGAMENTO ZIKA","prod-adicionales",700)
productosCargados.push(producto)
var producto = new Productos("MASILLA","prod-adicionales",700)
productosCargados.push(producto)
var producto = new Productos("YESO SELENITA","prod-adicionales",700)
productosCargados.push(producto)
var producto = new Productos("PINTURA LATEX","prod-adicionales",700)
productosCargados.push(producto)

const imprimirProducto = () => {
    productosCargados.forEach(obj =>{
        let index = productosCargados.indexOf(obj)
        idSeleccionado = obj.modelo
        document.getElementById(idSeleccionado).innerHTML+=`
        <aritcle class="col-lg-3 py-3 col-md-6">
        <h3 class="productos3D__tittle--whiteSmoke text-center">${obj.nombre}</h3>
        <img src="img/${obj.nombre}.jpg" alt="Modelo 3D de placas antihumedad burbuja" class="w-100 h-75">
        <div class="w-100">
            <input type="number" placeholder="Cantidad" class="w-100 mt-3" id"cant">
            <button id="bg-perzonalizado" type="button" class="btn btn-info w-100 mt-1" onclick="ComprarProducto(${index})">Comprar</button>
        </div>
        `;
    }); 
}

const ComprarProducto = (index) =>{
    if (document.getElementById("cant").value == 0 ) {
        alert("Antes de comprar debe indicar una cantidad");
    }
    else{
        let carrito;
        if (localStorage.getItem("carrito") == null ) {
            carrito = []
        }
        else{
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }
        carrito.push(productosCargados[index])
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
    
}

imprimirProducto()




