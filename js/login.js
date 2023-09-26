const btn_EnviarCadastro = document.getElementById("btn_EnviarCadastro");
const btn_FazerLogin = document.getElementById("btn_FazerLogin")
const btn_FazerCadastro = document.getElementById("btn_FazerCadastro");
const modal_Cadastro = document.getElementById("modal_Cadastro");
const modal_Login = document.getElementById("modal_Login");
const lbl_mensagemLogin = document.getElementById("lbl_mensagemLogin");
const btn_Entrar = document.getElementById("btn_Entrar");
const btn_FecharTelaLogin = document.getElementById("btn_FecharTelaLogin");
const btn_fecharCadastro = document.getElementById("btn_fecharCadastro");
const erroCadastro = document.getElementById("erroCadastro");
const user = document.getElementById("user");

class Usuario {
  constructor(CPF, nome, endereco, numeroTelefone, dataNasc, e_mail, senha) {
    this.CPF = CPF;
    this.nome = nome;
    this.endereco = endereco;
    this.numeroTelefone = numeroTelefone;
    this.dataNasc = dataNasc;
    this.e_mail = e_mail;
    this.senha = senha;
  }
  cadastrarUsuario() {
    btn_EnviarCadastro.addEventListener('click', () => {
      let usuario = this.lerDados();
      if (this.validarDados(usuario)) {
        listaUsuarios.push(usuario);
        erroCadastro.textContent = "Usuário cadastrado";
        console.log("usuario cadastrados", listaUsuarios);

      };




    })
  }

  lerDados() {
    const inp_CPF = document.getElementById("inp_CPF").value;
    const inp_Nome = document.getElementById("inp_Nome").value;
    const inp_Endereco = document.getElementById("inp_Endereco").value;
    const inp_Telefone = document.getElementById("inp_Telefone").value;
    const inp_DataNasc = document.getElementById("inp_DataNasc").value;
    const inp_CadastroEmail = document.getElementById("inp_CadastroEmail").value;
    const inp_CadastroSenha = document.getElementById("inp_CadastroSenha").value;
    let usuario = new Usuario(inp_CPF, inp_Nome, inp_Endereco, inp_Telefone, inp_DataNasc, inp_CadastroEmail, inp_CadastroSenha);
    return usuario;
  }

  validarDados(usuario) {

    if (usuario.CPF == "" || usuario.nome == "" || usuario.endereco == "" || usuario.numeroTelefone == "" || usuario.dataNasc == ""
      || usuario.e_mail == "" || usuario.senha == "") {
      erroCadastro.textContent = "Campos em branco";
    }
    else {
      return true;

    }

  }



  realizarLoginUser() {
    btn_FazerLogin.onclick = () => {
      const inp_EmailLogin = document.getElementById("inp_EmailLogin").value;
      const inp_EmailSenha = document.getElementById("inp_EmailSenha").value;
      if (listaUsuarios.length === 0) {

        lbl_mensagemLogin.textContent = "Usuário não Cadastrado";
      }
      else {
        listaUsuarios.forEach((usuario) => {
          if (inp_EmailLogin === usuario.e_mail && inp_EmailSenha === usuario.senha) {
            console.log("usuario " + usuario.nome + "encontrado");
            user.textContent = usuario.nome;

          }

          else if (isNaN.inp_EmailLogin !== usuario.e_mail && inp_EmailSenha !== usuario.senha) {
            lbl_mensagemLogin.textContent = "Usuário não Cadastrado";
          }


        });
      }
    }
  }
}

btn_FazerCadastro.onclick = () => {
  modal_Cadastro.style.display = "flex";
  modal_Login.style.display = "none";

}

btn_Entrar.onclick = () => {
  modal_Login.style.display = "flex";

}

btn_fecharCadastro.onclick = () => {
  modal_Login.style.display = "none"
  modal_Cadastro.style.display = "none";
}
btn_FecharTelaLogin.onclick = () => {
  modal_Login.style.display = "none";

  modal_Cadastro.style.display = "none";

}



const listaUsuarios = [];
const novoLogin = new Usuario();
novoLogin.realizarLoginUser();

const novoUsuario = new Usuario();
novoUsuario.cadastrarUsuario();





