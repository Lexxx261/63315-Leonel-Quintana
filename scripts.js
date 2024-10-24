// Función para calcular el total con IVA
function calcularTotal(precio, cantidad) {
  const subtotal = precio * cantidad
  const iva = subtotal * 0.21
  const total = subtotal + iva
  return total
}

// Función para seleccionar productos y calcular el total
function seleccionarProducto() {
  let continuar = true
  let totalAcumulado = 0 // Variable para acumular el total de la compra

  while (continuar) {
    let productoSeleccionado = parseInt(prompt("Seleccione un producto: \n1 - Naranja $121/kg\n2 - Banana $242/kg\n3 - Manzana $363/kg \n4 - Salir"))

    if (productoSeleccionado === 4) {
      alert("Pedido cerrado")
      break
    }

    let nombreProducto = ""
    let precioProducto = 0

    // switch de seleccion prod
    switch (productoSeleccionado) {
      case 1:
        nombreProducto = "Naranja"
        precioProducto = 100
        break
      case 2:
        nombreProducto = "Banana"
        precioProducto = 200
        break
      case 3:
        nombreProducto = "Manzana"
        precioProducto = 300
        break
      default:
        alert("Seleccione una opcion valida")
        continue
    }

    let cantidad = parseFloat(prompt("Ingrese cantidad"))

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Cantidad no válida")
      continue
    }

    const total = calcularTotal(precioProducto, cantidad)

    totalAcumulado += total

    alert(`Ha seleccionado ${cantidad}Kg. de ${nombreProducto}. \nTotal: $${total.toFixed(2)}`)

    continuar = confirm("¿Continuar comprando?")
  }

  alert(`Gracias por su compra. \nTotal de compra: $${totalAcumulado.toFixed(2)}`)
}

// Ejecutar la función
seleccionarProducto()