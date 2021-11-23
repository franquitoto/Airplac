
// Traemos del localstorage la info del carrito
carrito = JSON.parse(localStorage.getItem("carrito"))


// Declaramos algunas variables utiles
let precioTotal = 0;
let totalCompra;


/* Declaramos las principales funciones */ 

// Funcion para imprimir un producto desde el carrito
const imprimirProducto = () => {
    document.getElementById("finalizar").style.display = "block"
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
            window.location.reload()
            $(".total").slideDown(5000)
        }
        
    } 
}
// Funcuion para imprimir el total
const imprimirTotal = () => {
    
    if (localStorage.getItem("totalCompra") != null ) { 
        let i = 1
       const table = document.createElement("table")
       table.setAttribute("class","table table-dark")
       

       const thead = document.createElement("thead")
       thead.setAttribute("id","table1")
       const tr = document.createElement("tr")
       const th = document.createElement("th")
       th.setAttribute("scope","col")
       th.textContent = "#"

       const th1 = document.createElement("th")
       th1.setAttribute("scope","col")
       th1.textContent = "Modelo / Producto"

       const th2 = document.createElement("th")
       th2.setAttribute("scope","col")
       th2.textContent = "Metros / Cantidad"

       const th3 = document.createElement("th")
       th3.setAttribute("scope","col")
       th3.textContent = "Precio x unidad"

       tr.appendChild(th)
       tr.appendChild(th1)
       tr.appendChild(th2)
       tr.appendChild(th3)
       thead.appendChild(tr)

       tbody = document.createElement("tbody")
       thead.appendChild(tbody)
       table.appendChild(thead)

       document.getElementById("carrito").appendChild(table)


        carrito.forEach(obj => {
            //Cremos las filas dinamicas que se van a ir inyecyando
            // Creamos una tr para encapsular las td
            
            const tr2 = document.createElement("tr")
            const th4 = document.createElement("th")
            th4.setAttribute("scope","row")
            th4.textContent = `${i}`
            tr2.appendChild(th4)

            // Creados las td dinamicas
            const td = document.createElement("td")
            td.textContent = `${obj.nombre}`
            tr2.appendChild(td)

            const td1 = document.createElement("td")
            td1.textContent = `${obj.metros}`
            tr2.appendChild(td1)

            const td2 = document.createElement("td")
            td2.textContent = `${obj.precio}`
            tr2.appendChild(td2)

            document.getElementById("table1").appendChild(tr2)
            i = i + 1;
        });
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
        localStorage.removeItem('totalCompra')
        localStorage.removeItem("carrito")
    }
}

/* Programa */
if(localStorage.getItem("totalCompra") != null ){
    document.getElementById("carritoImg").style.display = "none"
    imprimirTotal()
}
else{
    if (localStorage.getItem("carrito") == null) {
        document.getElementById("carritoImg").style.display = "block"
    }else{
        document.getElementById("carritoImg").style.display = "none"
        imprimirProducto()
    }
    
}

$("#finalizar").click(()=> {
    finalizarCompra() 
})
