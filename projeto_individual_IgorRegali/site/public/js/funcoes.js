// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var jogomj = sessionStorage.JJ_DADOS_PERFIL;
    var jogoff = sessionStorage.JF_DADOS_PERFIL;
    var confav = sessionStorage.CF_DADOS_PERFIL;
    

    var b_usuario = document.getElementById("b_usuario");
    var b_dominio = document.getElementById("b_dominio");
    var b_jmj = document.getElementById("b_jmj");
    var b_jff = document.getElementById("b_jff");
    var b_cff = document.getElementById("b_cff");
    
    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;
        b_dominio.innerHTML = email;
        b_jmj.innerHTML = jogomj;
        b_jff.innerHTML = jogoff;
        b_cff.innerHTML = confav;
        // finalizarAguardar();
    } else {
        window.location = "../index.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

