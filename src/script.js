function Converter() {
  var valor = document.getElementById("valor").value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var resultado = "O valor convertido é R$ " + valorEmReal + ".";
  elementoValorConvertido.innerHTML = resultado;
}
