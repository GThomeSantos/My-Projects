function TipCalculate () {
    var Amount = document.getElementById("amount").value;
    var service = document.getElementById("service").value;
    var persons = document.getElementById("persons").value;

    //Validando o input

    if (Amount === "" || service == 0) {
        alert("Insira um valor válido");
        return;
    }

    //Verifica se esse valor é vazio ou <=1

    if (persons === "" || persons <= 1) {
        persons = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculando a gorgeta

    var total = (Amount * service) / persons;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Escondedo "gorgeta" e "cada" no fim da página

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Chamando a função

document.getElementById("calculate").onclick = function () {

    TipCalculate();
    
}