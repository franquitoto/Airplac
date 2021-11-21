
// Declaramos el carrito en el localstorage
carrito = JSON.parse(localStorage.getItem("carrito"))

// Declaramos algunas variables utiles
let precioTotal = 0;
let totalCompra;


/* Declaramos las principales funciones */ 

// Funcion para imprimir un producto desde el carrito
const imprimirProducto = () => {
    document.getElementById("carritoImg").style.display = "none"
    carrito.forEach(obj =>{
        let totalCompra = 0;
        totalCompra = obj.metros * obj.precio 
        precioTotal = precioTotal + totalCompra

        /* Reciclamos codigo */

        // Creamo la etiqueta principal, en este caso un article
        const article = document.createElement("article")
        article.setAttribute("class","col-lg-3 py-3 col-md-6")

        // Creamos un h3 y luego lo pusheamos en la etiqueta aticle
        const h3 = document.createElement("h3")
        h3.setAttribute("class", "productos3D__tittle--whiteSmoke text-center titu")
        let contentH3 = obj.nombre
        h3.textContent = contentH3
        article.appendChild(h3)

        // Creamos un img y luego lo pusheamos en la etiqueta aticle
        const img = document.createElement("img")
        img.setAttribute("src",`img/${obj.nombre}.jpg`)
        img.setAttribute("class", "w-100 h-75")
        article.appendChild(img)
        
        //Creamos un h5 para mostrar el resumen de lo comprado
        const h5Primero = document.createElement("h5")
        h5Primero.setAttribute("class","card-title text-center")
        h5Primero.textContent = ""
        // Creamos un span que ira dentro del h5 para resaltar
        const span = document.createElement("span")
        span.setAttribute("class","badge rounded-pill bg-success")
        let contentSpan = `compro ${obj.metros} ${obj.unidad} de ${obj.nombre}`
        span.textContent = contentSpan
        h5Primero.appendChild(span)
        article.appendChild(h5Primero)
        // Creamos otro h5 para mostrar el valor de esa compra en particular
        const h5Segundo = document.createElement("h5")
        h5Segundo.setAttribute("class","card-title text-center")
        h5Segundo.textContent = ""
        // Creamos otro span para resaltar

        const spanSegundo = document.createElement("span")
        spanSegundo.setAttribute("class","badge rounded-pill bg-success")
        let contentSpan2 = totalCompra
        spanSegundo.textContent ="$ " + contentSpan2
        h5Segundo.appendChild(spanSegundo)
        article.appendChild(h5Segundo)

        document.getElementById("carrito").appendChild(article)

        /*
        document.getElementById("carrito").innerHTML+=`
        <aritcle class="col-lg-3 py-3 col-md-6 carrito">
        <h3 class="productos3D__tittle--whiteSmoke text-center">${obj.nombre}</h3>
        <img src="img/${obj.nombre}.jpg" alt="Modelo 3D de placas antihumedad burbuja" class="w-100 h-75">
        <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">compro ${obj.metros} ${obj.unidad} de ${obj.nombre} </span></h5>
        <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">$${totalCompra}</span></h5>
        <article/>
        `;*/
        
    }); 
}
// Funcion para finalizar la compra
const finalizarCompra = () => {
    localStorage.setItem("totalCompra", JSON.stringify(precioTotal))
    if (localStorage.getItem("carrito") == null ) {
        alert("No tiene ninngun elemento en el carrito");
        
    }
    else{
        let opc = true 
        if(opc == true){
            localStorage.removeItem('carrito')
            window.location.reload()
            $(".total").slideDown(5000)
        }
        
    } 
}
// Funcuion para imprimir el total
const imprimirTotal = () => {
    if (localStorage.getItem("totalCompra") != null ) { 
        // Declaramos un article
        const article2 = document.createElement("article")
        article2.setAttribute("class","row justify-content-center total")

        //Declaramos un div
        const div2 = document.createElement("div")
        div2.setAttribute("class","col-auto")

        // Declaramos un h3 para el titulo del total
        const titulo = document.createElement("h3")
        titulo.setAttribute("class","productos3D__tittle--whiteSmoke text-center")
        let contentTitulo = "COMPRA FINALIZADA"
        titulo.textContent = contentTitulo
        div2.appendChild(titulo)

        // Declaramos un h5 para mostrar el total
        const mostrarTotal = document.createElement("h5")
        mostrarTotal.setAttribute("class","card-title text-center")

        // Declaramos un span para resaltar el total
        const spanTotal = document.createElement("span")
        spanTotal.setAttribute("class","badge rounded-pill bg-success")
        let contenSpanTotal = `Usted gasto $${JSON.parse(localStorage.getItem("totalCompra"))}`
        spanTotal.textContent = contenSpanTotal
        mostrarTotal.appendChild(spanTotal)
        div2.appendChild(mostrarTotal)
        article2.appendChild(div2)

        // Mostramos todo lo que construimos
        document.getElementById("carrito").appendChild(article2)
        /*
        document.getElementById("carrito").innerHTML+=`
            <aritcle class="row justify-content-center total">
                <div class="col-auto">
                    <h3 class="productos3D__tittle--whiteSmoke text-center">COMPRA FINALIZADA</h3>
                    <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">Usted gasto $${JSON.parse(localStorage.getItem("totalCompra"))}</span></h5>
                <div/>
            <article/>
            `*/;
            localStorage.removeItem('totalCompra')
    }
}

/* Programa */
if(localStorage.getItem("totalCompra") != null ){
    imprimirTotal()
}
else{
    imprimirProducto()
}

$("#finalizar").click(()=> {
    finalizarCompra() 
})
