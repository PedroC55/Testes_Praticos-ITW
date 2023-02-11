function comprar(number) {
    if (number == 1) {
        var op1 = parseFloat(document.getElementById("produto1").value);
        var quantidade = document.getElementById("quantidades");
        
        op1 = op1 + 1;
        quantidade.innerText = parseFloat(quantidade.innerText) + op1;
        
    }
    if (number == 2) {
        var op2 = parseFloat(document.getElementById("produto2").value);
        var quantidade = document.getElementById("quantidades");
        
        op2 = op2 + 1;
        quantidade.innerText = parseFloat(quantidade.innerText) + op2;
    }
    if (number == 3) {
        var op3 = parseFloat(document.getElementById("produto3").value);
        var quantidade = document.getElementById("quantidades");
        
        op3 = op3 + 1;
        quantidade.innerText = parseFloat(quantidade.innerText) + op3;
    }
    if (number == 4) {
        var op4 = parseFloat(document.getElementById("produto4").value);
        var quantidade = document.getElementById("quantidades");
        
        op4 = op4 + 1;
        quantidade.innerText = parseFloat(quantidade.innerText) + op4;
    }
    return calcular;
}

function calcular() {
    var total = document.getElementById("total");
    var pro1 = parseFloat(document.getElementById("precoproduto1").value);
    var pro2 = parseFloat(document.getElementById("precoproduto2").value);
    var pro3 = parseFloat(document.getElementById("precoproduto3").value);
    var pro4 = parseFloat(document.getElementById("precoproduto4").value);
    

}

















