function gerarTicket(){

    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim();

    if (nomeRaw.length < 3) {
        alert("Erro: Digite um nome com pelo menos 3 ou mais caracteres!"); 
        return;
    }

    // 🔹 Separando primeiro e último nome
    const partesNome = nomeLimpo.split(" ");
    const primeiroNome = partesNome[0];
    const ultimoNome = partesNome[partesNome.length - 1];
    const nomeFormatado = primeiroNome + " " + ultimoNome;

    // 🔹 Pegando urgência (valor vem do select)
    const diasPrazo = parseInt(document.getElementById("select-urgencia").value);

    // Datas
    const dataAtual = new Date();
    const dataPrazo = new Date();

    dataPrazo.setDate(dataAtual.getDate() + diasPrazo);

    // Inserindo no HTML
    document.getElementById("out-nome").innerText = nomeFormatado;
    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');
    document.getElementById("ticket-resultado").style.display = "block";
}