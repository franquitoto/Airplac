// Declaramos una variable para hacer una verificacion
var verificacion = false

/* Comienzan las principales funciones */
// Funcion para mostrar la cantidad de inputs necesarios
const mostrarIputs = () => {
    document.getElementById("div1").style.display = "none"
    
    let cantParedes = document.getElementById("input1").value
    
    for (let index = 0; index < cantParedes; index++) {
        const label = document.createElement("label")
        label.setAttribute("for","formGroupExampleInput")
        label.textContent = `Ancho de pared n° ${index+1}`

        let input = document.createElement("input")
        input.setAttribute("class","form-control w-50")
        input.setAttribute("placeholder","Ingrese el ancho de la pared")
        input.setAttribute("type","number")
        let id = `input${index+3}`
        input.setAttribute("id",id)

        document.getElementById("form1").appendChild(label)
        document.getElementById("form1").appendChild(input)
    }
    let button = document.createElement("button")
    button.setAttribute("type","button")
    button.setAttribute("onclick","controlDatos()")
    button.setAttribute("class","btn btn-success mt-3")
    button.setAttribute("id","siguiente2")
    button.textContent = "Siguiente"
    document.getElementById("form1").appendChild(button)
}

// Funcion para imprimir los materiales necesarios
const imprimirResultado = (m2) => {
    let cantBolsas = m2 / 10
    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.setAttribute("scope","row")
    th.textContent = "*"
    let td = document.createElement("td")
    td.textContent = `${m2}`
    let td1 = document.createElement("td")
    td1.textContent = `${cantBolsas}`
    let td2 = document.createElement("td")
    td2.textContent = `${cantBolsas}`

    tr.appendChild(th)
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)

    document.getElementById("table1").appendChild(tr)
}

// Funcion para imprimir la tabla final
const imprimirTabla = () => {
    let table = document.createElement("table")
    table.setAttribute("class","table")
    let thead = document.createElement("thead")
    thead.setAttribute("id","table1")

    let tr = document.createElement("tr")
    let th = document.createElement("th")
    th.setAttribute("scope","col")
    th.textContent = "#"
    let th1 = document.createElement("th")
    th1.setAttribute("scope","col")
    th1.textContent = "Metros cuadrados de placa"

    let th2 = document.createElement("th")
    th2.setAttribute("scope","col")
    th2.textContent = "Bolsas de pegamento"

    let th3 = document.createElement("th")
    th3.setAttribute("scope","col")
    th3.textContent = "Litros de pintura"

    tr.appendChild(th)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    thead.append(tr)
    table.append(thead)
    
    document.getElementById("resultados").appendChild(table)

    const metrosCuadrados = []
    const altura = JSON.parse(localStorage.getItem("altura"))
    let i = JSON.parse(localStorage.getItem("cantParedes"))
    i = parseFloat(i)
    for (let index = 3; index < i+3; index++) {
        let input = document.getElementById(`input${index}`).value
        document.getElementById("resultados").style.display = "block";
        let metros2 = input*altura
        metrosCuadrados.push(metros2)
        imprimirResultado(metros2)
    }
    let button = document.createElement("button")
    button.setAttribute("type","button")
    button.setAttribute("onclick","calcularDeNuevo()")
    button.setAttribute("class","btn btn-success mt-3")
    button.setAttribute("id","calcular")
    button.textContent = "Calcular de nuevo"
    document.getElementById("article3").appendChild(button)
}
// Funcion para calcular de nuevo
const calcularDeNuevo = () =>{
    window.location.href = "index.html#calculador";
    window.location.reload()
}
// Funcion para ocultar boton
const ocultarBoton = () => {
    document.getElementById("siguiente2").style.display = "none"
}
// Funcion para controlar que el usuario haya ingresado bien los datos
const controlDatos = () => {
    let i = JSON.parse(localStorage.getItem("cantParedes"))
    i = parseFloat(i)
    for (let index = 3; index < i+3 ; index++) {
        let input = document.getElementById(`input${index}`).value
        if (input == 0) {
            verificacion = false
        }else{
            verificacion = true
        }
    }
    if (verificacion == true) {
        ocultarBoton()
        imprimirTabla()
    }else{
        alert("Complete todos los campos")
    }
}
$("#siguiente1").click(()=> {
    const input1 = document.getElementById("input1").value
    const alturaParedes = document.getElementById("input2").value
    localStorage.setItem("cantParedes",JSON.stringify(input1))
    localStorage.setItem("altura", JSON.stringify(alturaParedes))
    if (input1 == 0) {
        alert("Debe seleccionar la cantidad de paredes")
    }else{
        if (alturaParedes == 0) {
            alert("Debe seleccionar la cantidad de paredes")
        }else{
            mostrarIputs()
        }
    }
})






