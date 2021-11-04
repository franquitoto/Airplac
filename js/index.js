
class Productos {
    constructor (nombre,modelo,precio,metros,unidad){
        this.nombre = nombre,
        this.modelo = modelo,
        this.precio = precio,
        this.metros = metros,
        this.unidad = unidad
    }
}

let productosCargados = [];
var producto = new Productos("BURBUJA","mod-3D",700,0,"metros")
productosCargados.push(producto)
var producto = new Productos("TECNO","mod-3D",700,0,"metros")
productosCargados.push(producto)
var producto = new Productos("FLOR","mod-3D",700,0,"metros")
productosCargados.push(producto)
var producto = new Productos("PIEDRA","mod-rus",800,0,"metros")
productosCargados.push(producto)
var producto = new Productos("MAYA","mod-rus",700,0,"metros")
productosCargados.push(producto)
var producto = new Productos("PIZARRA","mod-rus",850,0,"metros")
productosCargados.push(producto)
var producto = new Productos("LORETO","mod-rus",850,0,"metros")
productosCargados.push(producto)
var producto = new Productos("PEGAMENTO ZIKA","prod-adicionales",700,0,"bolsa/bolsas")
productosCargados.push(producto)
var producto = new Productos("MASILLA ANCLA","prod-adicionales",700,0,"tacho/tachos")
productosCargados.push(producto)
var producto = new Productos("YESO SELENITA","prod-adicionales",700,0,"bolsa/bolsas")
productosCargados.push(producto)
var producto = new Productos("PINTURA LATEX","prod-adicionales",700,0,"lata/latas")
productosCargados.push(producto)
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
$("#btn-dolar").click(()=> {
    var dolar = 0
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    $.get(url, (data, estado) => {
        if (estado == "success") {
            data.forEach(e => {
                if( e.casa.nombre === "Dolar Blue"){
                    dolar = e.casa.compra
                    dolar = parseFloat(dolar)
                    console.log(dolar)
                    if (document.getElementById("btn-dolar").textContent == "Precio en dolar") {
                        productosCargados.forEach(obj => {
                            let index = productosCargados.indexOf(obj)
                            let valorDolar = obj.precio / dolar
                            valorDolar = round(valorDolar)
                            $(`#${index}`).text("US$" + valorDolar)
                        });
                        $("#btn-dolar").text("Precio en pesos")
                    }
                    else{
                        productosCargados.forEach(obj => {
                            let index = productosCargados.indexOf(obj)
                            
                            $(`#${index}`).text("$" + obj.precio)
                        });
                        $("#btn-dolar").text("Precio en dolar")

                    }
                    
                    
                }
            })
        }
    })
       
   
})





const imprimirProducto = () => {
    let i = 0;
    productosCargados.forEach(obj =>{
        if (localStorage.getItem("productos") == null ) {
            productos2 = []
        }
        else{
            productos2 = JSON.parse(localStorage.getItem("productos"))
        }
        productos2.push(productosCargados[i])
        console.log(productosCargados[i])
        localStorage.setItem("productos", JSON.stringify(productos2))
        let index = productosCargados.indexOf(obj)
        i = i + 1
        console.log(i)
        idSeleccionado = obj.modelo
        document.getElementById(idSeleccionado).innerHTML += `
        <aritcle class="col-lg-3 py-3 col-md-6 ">
        <h3 class="productos3D__tittle--whiteSmoke text-center titu">${obj.nombre}  <span class="badge rounded-pill bg-success precio" id="${index}" >$${obj.precio}</span></h3>
        <img src="img/${obj.nombre}.jpg" alt="Modelo 3D de placas antihumedad burbuja" class="w-100 h-75 ">
        <div class="w-100">
            <form action="" id="miForm${index}">
                <input type="number" placeholder="Cantidad" class="w-100 mt-3" id="cant${index}">
                <button id="bg-perzonalizado" type="button" class="btn btn-info w-100 mt-1 " onclick="ComprarProducto(${index})">Comprar</button>
            </form>
        </div>
        <article/>
        `;
    }); 
}

const ComprarProducto = (index) =>{
    let metros = document.getElementById(`cant${index}`).value
    productosCargados[index].metros = metros
    
    if(metros == 0){
        alert("No puede comprar un producto sin seleccionar la cantidad");
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
        document.getElementById(`miForm${index}`).reset();
        alert(`Acabas de agregar al carrito ${metros} ${productosCargados[index].unidad} de ${productosCargados[index].nombre}`)  
    }   
    
    
}
imprimirProducto()

console.log("hola hola");




