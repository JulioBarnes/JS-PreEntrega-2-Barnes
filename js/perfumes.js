//Array vacío para pushear perfumes al carrito después
const carrito = []
//ESTABLECER CATÁLOGO
const perfumes = [{id:1, nombre: "BLACK", precio: 13000, categoria: "amaderado"},
                  {id:2, nombre: "WHITE", precio: 11000, categoria: "cítrico"},
                  {id:3, nombre: "RED", precio: 15000, categoria: "especiado"},
                  {id:4, nombre: "GREEN", precio: 13000, categoria: "amaderado"},
                  {id:5, nombre: "BLUE", precio: 11000, categoria: "cítrico"},
                  {id:6, nombre: "YELLOW", precio: 15000, categoria: "floral"},
                  {id:7, nombre: "PINK", precio: 15000, categoria: "floral"},
                  {id:8, nombre: "VIOLET", precio: 15000, categoria: "floral"},
                  {id:9, nombre: "LIGHT BLUE", precio: 11000, categoria: "cítrico"},
                  {id:10, nombre: "GRAY", precio: 13000, categoria: "amaderado"}]
//FUNCIÓN DE BÚSQUEDA
function buscarPerfume(codigo){//llamar el parámetro id para traer el dato desde la función comprar()
    let perfumeBuscado = perfumes.find((perfume)=>perfume.id === codigo)
    return perfumeBuscado
}
//FUNCIÓN PARA COMPRAR
function comprar(){
    //pedir id para buscar en la otra función dentro del array perfumes
    let codigo = parseInt(prompt("Ingrese el código ID del perfume que te interesa: "))
    let perfumeAComprar = buscarPerfume(codigo)
    if (perfumeAComprar === undefined) {
        console.warn("No se encontró el perfume que nos indicaste!")
    }
    else{
        carrito.push(perfumeAComprar)
        console.log(perfumeAComprar.nombre + " fue agregado al carrito.")
        console.table(carrito)
        let respuesta = confirm("Deseas seguir agregando perfumes a tu carrito?:")
        if(respuesta === true){
            comprar()
        }
        else{
            const finalizarCompra = new Comprar(carrito)
            let total = finalizarCompra.totalCarrito()
            console.log("El costo total de la compra es de $ ", total.toLocaleString("es-AR"))
        }
    }
}