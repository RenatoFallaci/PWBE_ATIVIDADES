let nome = document.getElementById("pro");

let preco = document.getElementById("pro2")

preco = Math.trunc(preco.value);

let para = document .createElement(b);
let node = document. createTextNode("o medicamento"+ nome.value + "leve 2 e sai por "+preco.value) 
para.appendChild (node);
var element= getElementById("pre");
element.appendChild(para);