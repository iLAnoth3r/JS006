async function info() {
  const html = document.getElementById("respuesta");
  const peso = document.getElementById("pesoChileno").value;
  const moneda = document.getElementById("monedas").value;
  try {
    const respuesta = await fetch("https://mindicador.cl/api/");
    const data = await respuesta.json();

    const select = moneda;
    const cambio = (peso / data[select].valor).toFixed(2);

    html.innerHTML = `Resultado: $${cambio}`;
  } catch (error) {
    console.log(error);
  }
}
