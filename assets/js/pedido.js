categoriaPedido.addEventListener("change", opcoes);

let arrBebida = [
  "---- Escolha ---",
  "Suco de limão (300mL) - R$ 6,00",
  "Suco de morango (300mL) - R$ 6,00",
  "Suco de abacaxi com hortelã (300mL) - R$ 6,00",
  "Coca-Cola (2L) - R$ 10,00",
  "Sprite (2L) - R$ 8,00",
  "Guaraná (2L) - R$ 10,00",
  "Água com gás (500mL) - R$ 4,00"
];
let arrPizza = [
  "---- Escolha ---",
  "Italiana com Frango e Salame",
  "Marguerita Clássica",
  "Pepperoni",
  "Salame e Azeitona",
  "Azeitona e Pimentão",
  "Chocolate com Morango"
];
let arrPorções = [
  "---- Escolha ---",
  "Batata-frita - R$ 16,00",
  "Polenta frita - R$ 14,00",
  "Dadinho de Tapioca - R$ 12,00",
  "Frango à Passarinho - R$ 20,00"
];

function opcoes() {
  let select = document.createElement("select");
  tamanho.classList = 'hide'

  let span = document.getElementById("classe");
  console.log(categoriaPedido.value)
  switch (categoriaPedido.value) {
    case "bebidas":
      {
        console.log("Entrei")
        let i, L = pedido.options.length - 1;
        for (i = L; i >= 0; i--) {
          pedido.remove(i);
        }

        arrBebida.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }

          opt.setAttribute("value", item);
          opt.textContent = item;

          pedido.appendChild(opt);
        });
      }
      break;
    case "pizzas":
      {
        let i, L = pedido.options.length - 1;
        for (i = L; i >= 0; i--) {
          pedido.remove(i);
        }

        tamanho.classList.remove("hide");

        arrPizza.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }
          opt.value = item;
          opt.textContent = item;

          pedido.appendChild(opt);
        });
      }
      break;
    case "porcoes":
      {
        let i, L = pedido.options.length - 1;
        for (i = L; i >= 0; i--) {
          pedido.remove(i);
        }

        arrPorções.forEach(function (item, index, arr) {
          let opt = document.createElement("option");
          if (arr[index] == "---- Escolha ---") {
            opt.setAttribute("disabled", "disabled");
          }
          opt.value = item;
          opt.textContent = item;

          pedido.appendChild(opt);
        });
      }
      break;

    default:
    //codigo
  }
}


botao.addEventListener('click', fazerPedido)

function fazerPedido(e){
  let arrPedido = []
  let pedidoCliente = {
    nomeCliente: '',
    sobrenomeCliente: '',
    telefoneCliente: '',
    emailCliente: '',
    categoria: '',
    nomePedido: ''
}
  let confirmar = confirm('Você deseja fazer mais pedidos?')
  console.log(confirmar)
  if(confirmar){
    console.log('Confirmou')
    if(count == 0){
      pedidoCliente.nomeCliente = nome.value
      pedidoCliente.sobrenomeCliente = sobrenome.value
      pedidoCliente.telefoneCliente = telefone.value
      pedidoCliente.emailCliente = email.value
      pedidoCliente.categoria = categoriaPedido.value
      pedidoCliente.nomePedido = pedido.value
  
      if(categoriaPedido.value == 'pizzas'){
        pedidoCliente["tamanhoPizza"] = tamPizza.value
      }
      desabilitaPedidos2()
    } else {
      desabilitaPedidos2()
      pedidoCliente.categoria = categoriaPedido.value
      pedidoCliente.nomePedido = pedido.value
  
      if(categoriaPedido.value == 'pizzas'){
        pedidoCliente["tamanhoPizza"] = tamPizza.value
      }
    }

    arrPedido.push(pedidoCliente)
    arr.push(pedidoCliente)
    

  } else {
      pedidoCliente.nomeCliente = nome.value
      pedidoCliente.sobrenomeCliente = sobrenome.value
      pedidoCliente.telefoneCliente = telefone.value
      pedidoCliente.emailCliente = email.value
      pedidoCliente.categoria = categoriaPedido.value
      pedidoCliente.nomePedido = pedido.value
  
      if(categoriaPedido.value == 'pizzas'){
        pedidoCliente["tamanhoPizza"] = tamPizza.value
      }
    
    desabilitaPedidos()
    arrPedido.push(pedidoCliente)
    arr.push(pedidoCliente)
    adicionaStorage(arr)
    pegarStorage()
    let descobreTempo = 30 * Number(arrPedidoFinalizado.length);
    let divTempo = document.getElementById("tempo");
    retirada(arrPedidoFinalizado, descobreTempo, divTempo)
  }
}

function adicionaStorage(pedido) {
  let transformaString = JSON.stringify(pedido);
  localStorage.setItem("pizzaria", transformaString);
}


function pegarStorage() {
  if (localStorage.hasOwnProperty("pizzaria")) {
    arrPedidoFinalizado = JSON.parse(localStorage.getItem("pizzaria"));
  }
}


function desabilitaPedidos(){
  nome.style.cursor = 'not-allowed'
  sobrenome.style.cursor = 'not-allowed'
  telefone.style.cursor = 'not-allowed'
  email.style.cursor = 'not-allowed'
  categoriaPedido.style.cursor = 'not-allowed'
  pedido.style.cursor = 'not-allowed'
  tamPizza.style.cursor = 'not-allowed'

  nome.disabled = 'true'
  sobrenome.disabled = 'true'
  telefone.disabled = 'true'
  email.disabled = 'true'
  tamPizza.disabled = 'true'
  pedido.disabled = 'true'
  categoriaPedido.disabled = 'true'


}

function habilitaPedidos(){
  nome.style.cursor = 'pointer'
  sobrenome.style.cursor = 'pointer'
  telefone.style.cursor = 'pointer'
  email.style.cursor = 'pointer'
  categoriaPedido.style.cursor = 'pointer'
  pedido.style.cursor = 'pointer'
  tamPizza.style.cursor = 'pointer'

  nome.disabled = false
  sobrenome.disabled = false
  telefone.disabled = false
  email.disabled = false
  tamPizza.disabled = false
  pedido.disabled = false
  categoriaPedido.disabled = false
}

function desabilitaPedidos2(){
  nome.style.cursor = 'not-allowed'
  sobrenome.style.cursor = 'not-allowed'
  telefone.style.cursor = 'not-allowed'
  email.style.cursor = 'not-allowed'
  nome.disabled = 'true'
  sobrenome.disabled = 'true'
  telefone.disabled = 'true'
  email.disabled = 'true'

}




function retirada(pedido, duracao, divTempo) {
  times(duracao, divTempo);
  document.getElementById("tituloPedido").innerHTML =
    arrPedidoFinalizado.length == 1
      ? "Quantidade Pedido: " + arrPedidoFinalizado.length + "."
      : "Quantidade Pedidos: " + arrPedidoFinalizado.length + ".";
  arrPedidoFinalizado.forEach(function (valor, index, arr) {
    let p = document.createElement("p");

    if (arr[index].categoria == "pizzas") {
      p.innerHTML =
        "Categoria: " +
        arr[index].categoria +
        ", " +
        " Pedido: " +
        arr[index].nomePedido +
        ", " +
        " Tamanho: " +
        arr[index].tamanhoPizza +
        " .";
      textoPedidos.appendChild(p);
    } else {
      p.innerHTML =
        "Categoria: " +
        arr[index].categoria +
        ", " +
        " Pedido: " +
        arr[index].nomePedido +
        ".";
      textoPedidos.appendChild(p);
    }
  });
}

function times(duracao, divTempo) {
  let timer = duracao, minutos,segundos;
  let myInterval = setInterval(function () {
    minutos = parseInt(timer / 60, 10);
    segundos = parseInt(timer % 60, 10);

    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    if(minutos == 0 && segundos == 0){
        setTimeout(function(){
          clearInterval(myInterval)
        }, 0)
        let sorteado = geraID()
        let p = document.createElement('p')
        p.innerHTML = 'Por favor, vá até o balcão para retirar seu pedido com a sua chave de acesso: ' + sorteado
        p.style.color = 'red'
        textoPedidos.appendChild(p)
        botaoRetirarPedido.classList.remove("hide")
    }
    divTempo.textContent = minutos + ":" + segundos + " (30s para cada pedido)";

    if (--timer < 0) {
      timer = duracao;
    }
  }, 1000);
}

botaoRetirarPedido.addEventListener('click', (e) => {
  console.log(arrPedidoFinalizado.length)
    for (let i = -1; i <= arrPedidoFinalizado.length; i++) {
        console.log(i)
        arr.splice(arr[i], 2)
        arrPedidoFinalizado.splice(arrPedidoFinalizado[i], 2)
        botaoRetirarPedido.classList.add("hide")
        adicionaStorage(arrPedidoFinalizado)
        document.getElementById("tituloPedido").innerHTML =
    arrPedidoFinalizado.length == 1
      ? "Quantidade Pedido: " + arrPedidoFinalizado.length + "."
      : "Quantidade Pedidos: " + arrPedidoFinalizado.length + ".";
        habilitaPedidos()
    }
    console.log(arrPedidoFinalizado)
})




function geraID(){
    let arrNumber = [1,2,3,4,5,6,7,8,9]
    let arrAlphabetM = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let result = arrNumber.concat(arrAlphabetM)
    console.log(result)
    let arrSorteados = []
    let stringResultado = ''
    let contador = 1
    while ( contador <= 10 ){
        let sortear = Math.floor(Math.random() * 35)
        arrSorteados.push(sortear)
        contador++
    }
    
    for(let i = 0; i < arrSorteados.length; i++){
        stringResultado += result[arrSorteados[i]]
    }
    return stringResultado
    }