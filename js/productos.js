/* Creamos el objeto principal */
class Productos {
    constructor (nombre,modelo,precio,metros,unidad){
        this.nombre = nombre,
        this.modelo = modelo,
        this.precio = precio,
        this.metros = metros,
        this.unidad = unidad
    }
}

/* Cargamos a mano los productos */
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
        // Creamos un ID unico para cada modelo
        idSeleccionado = obj.modelo


        /* Creamos la estructura que posteriormente vamos a iyectar en el HTML */
        // Creamo la etiqueta principal, en este caso un article
        const article = document.createElement("article")
        article.setAttribute("class","col-lg-3 py-3 col-md-6")

        // Creamos un h3 y luego lo pusheamos en la etiqueta aticle
        const h3 = document.createElement("h3")
        h3.setAttribute("class", "productos3D__tittle--whiteSmoke text-center titu")
        let contentH3 = obj.nombre
        h3.textContent = contentH3
        const span = document.createElement("span")
        span.setAttribute("class","badge rounded-pill bg-success precio")
        span.setAttribute("id",`${index}`)
        let contentSpan = "$" + obj.precio
        span.textContent = contentSpan
        h3.appendChild(span)
        article.appendChild(h3)

        // Creamos un img y luego lo pusheamos en la etiqueta aticle
        const img = document.createElement("img")
        img.setAttribute("src",`img/${obj.nombre}.jpg`)
        img.setAttribute("class", "w-100 h-75")
        article.appendChild(img)

        // Creamos un div y luego de crear un form lo pusheamos a la etiqueta aticle
        const div = document.createElement("div")
        div.setAttribute("class","w-100")

        // Creamos un form y luego de crear un input y un button lo pusheamos a la etiqueta div
        const form = document.createElement("form")
        form.setAttribute("id",`miForm${index}`)

        // Creamos un input y luego lo pusheamos a la etiqueta form
        const input = document.createElement("input")
        input.setAttribute("type","number")
        input.setAttribute("placeholder","Cantidad")
        input.setAttribute("class","w-100 mt-3")
        input.setAttribute("id",`cant${index}`)
        form.appendChild(input)

        // Creamos un buttom y lo pusheamos a la etiqueta form
        const button = document.createElement("button")
        button.setAttribute("id","bg-perzonalizado")
        button.setAttribute("class","btn btn-info w-100 mt-1")
        button.setAttribute("type","button")
        button.setAttribute("onclick",`ComprarProducto(${index})`)
        button.textContent = "Comprar"
        form.appendChild(button)
        
        div.appendChild(form)
        article.appendChild(div)
        document.getElementById(idSeleccionado).appendChild(article)
    }); 
}

/* Declaramos las funciones principales */

// Funcion para redondear a 2 decimales
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

// Funcion para comprar un producto y agregarlo al carrito
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
// Funcion para cambiar el precio de dolar a pesos o viceversa
const cambiarPrecio = () => {
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

}

/* Programa */

imprimirProducto()
$("#btn-dolar").click(cambiarPrecio)




