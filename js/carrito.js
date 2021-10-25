carrito = JSON.parse(localStorage.getItem("carrito"))
console.log(carrito);
let precioTotal = 0;
let totalCompra;

const imprimirProducto = () => {
    carrito.forEach(obj =>{
        let totalCompra = 0;
        totalCompra = obj.metros * obj.precio 
        precioTotal = precioTotal + totalCompra
        document.getElementById("carrito").innerHTML+=`
        <aritcle class="col-lg-3 py-3 col-md-6">
        <h3 class="productos3D__tittle--whiteSmoke text-center">${obj.nombre}</h3>
        <img src="img/${obj.nombre}.jpg" alt="Modelo 3D de placas antihumedad burbuja" class="w-100 h-75">
        <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">compro ${obj.metros} ${obj.unidad} de ${obj.nombre} </span></h5>
        <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">$${totalCompra}</span></h5>
        `;
        
    }); 
}
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
        }
        
    } 
}
if (localStorage.getItem("totalCompra") != null ) {
    document.getElementById("carrito").innerHTML+=`
        <aritcle class="row justify-content-center">
        <div class="col-auto">
            <h3 class="productos3D__tittle--whiteSmoke text-center">COMPRA FINALIZADA</h3>
            <h5 class="card-title text-center"><span class="badge rounded-pill bg-success">Usted gasto $${JSON.parse(localStorage.getItem("totalCompra"))}</span></h5>
        <div/>
        `;
        localStorage.removeItem('totalCompra')
}
console.log(precioTotal)
imprimirProducto()