const mostrarIputs = () => {
    document.getElementById("div1").style.display = "none"
    
    let cantParedes = document.getElementById("input1").value
    for (let index = 0; index < cantParedes; index++) {
        document.getElementById("form1").innerHTML+=`
        <label for="formGroupExampleInput">Ancho de pared n° ${index+1}</label>
        <input type="number" class="form-control w-50" id="input${index+2}" placeholder="Ingrese el ancho de la pared">
        ` 
    }
    document.getElementById("form1").innerHTML+=`<button type="button" class="btn btn-success mt-3" id="siguiente1">Siguiente</button>`
}

$("#siguiente1").click(()=> {
    const input1 = document.getElementById("input1").value
    let alturaParedes = document.getElementById("input2").value
    localStorage.setItem("altura", JSON.stringify(alturaParedes))
    if (input1 == 0) {
        alert("Debe seleccionar la cantidad de paredes")
    }else{
        let checkbox1 = document.getElementById("checkbox1").checked
        if (checkbox1 == true) {
            alert("true")
        }else{
            mostrarIputs()
        }
    }
})
$("#siguiente2").click(() => {
    if () {
        
    }
})




