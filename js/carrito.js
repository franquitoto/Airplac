carrito = JSON.parse(localStorage.getItem("carrito"))
console.log(carrito);

const imprimirProducto = () => {
    carrito.forEach(obj =>{
        document.getElementById("carrito").innerHTML+=`
        <aritcle class="col-lg-3 py-3 col-md-6">
        <h3 class="productos3D__tittle--whiteSmoke text-center">${obj.nombre}</h3>
        <img src="img/${obj.nombre}.jpg" alt="Modelo 3D de placas antihumedad burbuja" class="w-100 h-75">
        <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">usted compro ${obj.metros} ${obj.unidad} de ${obj.nombre} </span></h5>
        `;
    }); 
}

imprimirProducto()