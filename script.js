// TIPO 1: Formatação simples TIPO 2: Formatação avançada

let dateToday;
let h;
let min;
let s;
let d;
let dw;
let m;
let mn;
let y;

const horario = document.getElementById('horario');
const data = document.getElementById('data');
const dataDiv = document.getElementById('dataDiv');

let formatacaoAvancado = true;

const relogio = setInterval(function time() {
    dateToday = new Date();
    h = String(dateToday.getHours()).padStart(2, '0'); // Hora
    min = String(dateToday.getMinutes()).padStart(2, '0'); // Minuto
    s = String(dateToday.getSeconds()).padStart(2, '0'); // Segundo
    d = String(dateToday.getDate()).padStart(2, '0'); // Dia
    dw = dateToday.getDay(); // Dia da Semana (0 a 6)
    m = String(dateToday.getMonth() + 1).padStart(2, '0'); // Mês
    mn = dateToday.getMonth(); // Nome dos Meses (0 a 11)
    y = dateToday.getFullYear(); // Ano

    switch (dw) {
        case 0:
            dw = "Domingo";
            break;
        case 1:
            dw = "Segunda-feira";
            break;
        case 2:
            dw = "Terça-feira";
            break;
        case 3:
            dw = "Quarta-feira";
            break;
        case 4:
            dw = "Quinta-feira";
            break;
        case 5:
            dw = "Sexta-feira";
            break;
        case 6:
            dw = "Sábado";
            break;
    }

    switch (mn) {
        case 0:
            mn = "Janeiro";
            break;
        case 1:
            mn = "Fevereiro";
            break;
        case 2:
            mn = "Março";
            break;
        case 3:
            mn = "Abril";
            break;
        case 4:
            mn = "Maio";
            break;
        case 5:
            mn = "Junho";
            break;
        case 6:
            mn = "Julho";
            break;
        case 7:
            mn = "Agosto";
            break;
        case 8:
            mn = "Setembro";
            break;
        case 9:
            mn = "Outubro";
            break;
        case 10:
            mn = "Novembro";
            break;
        case 11:
            mn = "Dezembro";
            break;
    }

    atualizarHorario();
    // atualizarFuso();

});

function atualizarHorario() {
    horario.textContent = h + ":" + min + ":" + s;

    if (formatacaoAvancado) {
        data.textContent = dw + ", " + d + " de " + mn + " de " + y;
    } else {
        data.textContent = d + "/" + m + "/" + y;
    }
}

function trocarTemaModal() {
    if (document.body.getAttribute('data-bs-theme') === 'dark') {
        document.body.setAttribute('data-bs-theme', 'light');
        document.getElementById("btnTemaModal").innerHTML = "Claro";
    } else {
        document.body.setAttribute('data-bs-theme', 'dark');
        document.getElementById("btnTemaModal").innerHTML = "Escuro";
    }
}

function trocarData() {
    if (formatacaoAvancado) {
        formatacaoAvancado = false;
        atualizarHorario();
        dataDiv.className = "data simples";
        dataDiv.setAttribute("title", "Formatação: Simples");
        document.getElementById("formatacaoBtn").innerHTML = "Simples";
    } else {
        formatacaoAvancado = true;
        atualizarHorario();
        dataDiv.className = "data avancado";
        dataDiv.setAttribute("title", "Formatação: Avançado");
        document.getElementById("formatacaoBtn").innerHTML = "Avançado";
    }
}

function trocarCor(tipo, cor) {
    switch (tipo) {
        case "fundo":
            document.body.style.backgroundColor = cor;
            break;
        case "letra":
            elementos = document.getElementsByClassName("data");
            for (i = 0; i < elementos.length; i++) {
                elementos[i].style.color = cor;
            }
            break;
        case "fundoRedefinir":
            document.body.style.backgroundColor = "#000000";
            document.getElementById("inputFundo").value = "#000000";
            break;
        case "letraRedefinir":
            elementos = document.getElementsByClassName("data");
            for (i = 0; i < elementos.length; i++) {
                elementos[i].style.color = "#3d3d3d";
            }
            document.getElementById("inputLetra").value = "#3d3d3d";
            break;
    }
}

function redefinir() {
    formatacaoAvancado = false;
    trocarData();
    document.body.setAttribute('data-bs-theme', 'dark');
    document.getElementById("btnTemaModal").innerHTML = "Escuro";
    trocarCor('fundoRedefinir');
    trocarCor('letraRedefinir');
}