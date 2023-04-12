// ATIVIDADE 1 // ATIVIDADE 1  // ATIVIDADE 1  // ATIVIDADE 1  // ATIVIDADE 1 //

function validarDados() {

    let dia = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    let erro = document.getElementById('mensagem-erro');

    erro.style.backgroundColor = '';
    erro.style.color = ''
    erro.style.display = '';


    if (dia.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo da Data não pode estar vazio");
        return false;
    }

    if (nome.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Nome do Cliente' não pode estar vazio");
        return false;
    }

    if (telefone.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Telefone' não pode estar vazio");
        return false;
    }

    if (email.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Email' não pode estar vazio");
        return false;
    }

    if (produto.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Nome do Produto' não pode estar vazio");
        return false;
    }

    if (quantidade.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Quantidade' não pode estar vazio");
        return false;
    }

    if (valor.trim() == '') {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Valor unitário' não pode estar vazio");
        return false;
    }

    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------

    if (nome.length < 5) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Nome do Cliente' deve conter pelo menos 5 caracteres");
        return false;
    }

    if (telefone.length < 5) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Telefone' deve conter pelo menos 5 caracteres");
        return false;
    }

    if (email.length < 5) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Email' deve conter pelo menos 5 caracteres");
        return false;
    }

    if (produto.length < 5) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Nome do Produto' deve conter pelo menos 5 caracteres");
        return false;
    }

    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------


    if (quantidade.trim() <= 0) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo de 'Quantidade' não pode conter valor zero ou negativo");
        return false;
    }

    if (valor.trim() <= 0) {
        erro.style.display = 'block';
        erro.innerHTML = ("O campo 'Valor unitário' não pode conter valor zero ou negativo");
        return false;
    }

    else {



        erro.style.backgroundColor = '#adff2f';
        erro.style.color = '#139f00'
        erro.style.display = 'block';

        erro.innerHTML = ("Seu formulario foi enviado com Sucesso🎉!!! Duas palavras, Para bens!! 🎉🎉🥳🥳🎉🎉🎁🎁 ");

    }


}

// ATIVIDADE 2 // ATIVIDADE 2  // ATIVIDADE 2  // ATIVIDADE 2  // ATIVIDADE 2 //

function criarImagens() {

    let numImagens = parseInt(document.getElementById("inQtdImg").value);
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";

    if (numImagens < 0) {
        alert("Não é fisicamente possivel gerar algo negativo, 🤮");
    }

    else {

        for (let i = 0; i < numImagens; i++) {

            if (numImagens >= 0) {
                console.log("ESTA FUNCIONANDO AAAAAAAAAAAAAA")
                let imagem = document.createElement("img");
                imagem.src = 'img/porque.png';
                imagem.classList.add("imagens");
                canvas.appendChild(imagem);
            }

        }

    }
}



// ATIVIDADE 3 // ATIVIDADE 3  // ATIVIDADE 3  // ATIVIDADE 3  // ATIVIDADE 3 //

function alterarFoto() {
    let botao = document.getElementById('btnEnviar');
    let imagem = document.getElementById("lampada");
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);

    if (arquivo == 'apagada.jpg' || arquivo == '') {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = 'Apagar';
    }
    else {
        imagem.src = 'img/apagada.jpg';
        botao.textContent = 'Acender';
    }
}

function mudarEscrita() {
    let botao = document.getElementById('btnEnviar');

    if (botao.textContent == 'Acender')
        botao.textContent = 'Apagar';
    else
        botao.textContent = 'Acender';
}

// ATIVIDADE 4 // ATIVIDADE 4  // ATIVIDADE 4  // ATIVIDADE 4  // ATIVIDADE 4 //

function calcularCoisa() {
    let pedido = document.getElementById('inValorPedido').value;
    let porcentagem = document.getElementById('inPercDesc');
    let desconto = document.getElementById('inValDesc');
    let valorLiquido = document.getElementById('inValFinal');


    if (pedido > 0 && pedido < 500) {
        let porcentagem = 0
        // let porcentagemEmNumero = porcentagem * 100 + "%";
        let desconto = pedido * porcentagem / 100
        console.log("0 - 500");
        // document.getElementById("inPercDesc").value = porcentagemEmNumero;
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 500 && pedido < 1000) {
        let porcentagem = 0.5
        // let porcentagemEmNumero = porcentagem * 100 + "%";
        let desconto = pedido * porcentagem / 100
        console.log("500 - 1000");
        // document.getElementById("inPercDesc").value = porcentagemEmNumero;
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 1000 && pedido < 1500) {
        let porcentagem = 0.8
        // let porcentagemEmNumero = porcentagem * 100 + "%";
        let desconto = pedido * porcentagem / 100
        console.log("1000 - 1500");
        // document.getElementById("inPercDesc").value = porcentagemEmNumero;
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 1500 && pedido < 2000) {
        let porcentagem = 1.0
        // let porcentagemEmNumero = porcentagem * 100 + "%";
        let desconto = pedido * porcentagem / 100
        console.log("1500 - 2000");
        // document.getElementById("inPercDesc").value = porcentagemEmNumero;
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    if (pedido >= 2000) {
        let porcentagem = 1.5
        // let porcentagemEmNumero = porcentagem * 100 + "%";
        let desconto = pedido * porcentagem / 100
        console.log("2000");
        // document.getElementById("inPercDesc").value = porcentagemEmNumero;
        document.getElementById("inPercDesc").value = porcentagem;
        document.getElementById("inValDesc").value = desconto;
        document.getElementById("inValFinal").value = pedido - desconto;
        return
    }

    else {
        alert("Houve um erro inesperado, Você provavelmente digitou um valor negativo ou zero, Tente Novamente com valores positivos! 😁");
        console.log("ALERTA");
    }




}
