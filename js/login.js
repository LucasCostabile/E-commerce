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
const usuariosArmazenados = JSON.parse(localStorage.getItem("usuariosLocalstorage"));

class Usuario {
  constructor(CPF, nome, e_mail, senha) {
    this.CPF = CPF;
    this.nome = nome;
    this.e_mail = e_mail;
    this.senha = senha;
  }
  cadastrarUsuario() {
    btn_EnviarCadastro.addEventListener('click', () => {
      let usuario = this.lerDados();
        if (this.validarDados(usuario))
       {
        listaUsuarios.push(usuario);
        const armazenaLocal = (chave, valor) => {
          localStorage.setItem(chave, JSON.stringify(valor));
        }

        armazenaLocal("usuariosLocalstorage", listaUsuarios);

        setTimeout(() => {
          modal_Cadastro.style.display = "none";
          erroCadastro.textContent = "";
        }, 1500)
        erroCadastro.textContent = "Cadastrando Usuário...";
        const limpaForm = document.querySelector(".formulario-cadastro");
        limpaForm.querySelectorAll("input").forEach((campo) => {
          campo.value = "";

        })
      };
    })
  }

  lerDados() {
    const inp_CPF = document.getElementById("inp_CPF").value;
    const inp_Nome = document.getElementById("inp_Nome").value;
    const inp_CadastroEmail = document.getElementById("inp_CadastroEmail").value;
    const inp_CadastroSenha = document.getElementById("inp_CadastroSenha").value;
    let usuario = new Usuario(inp_CPF, inp_Nome, inp_CadastroEmail, inp_CadastroSenha);
    return usuario;
  }

  validarDados(usuario) {
    if (usuario.CPF == "" || usuario.nome == "" || usuario.e_mail == "" || usuario.senha == "")
    {
      erroCadastro.textContent = "Preencha todos os campos";
    }
    else {
      return true;
    }

  }

  realizarLoginUser() {
    btn_FazerLogin.onclick = () => {
      const inp_EmailLogin = document.getElementById("inp_EmailLogin").value;
      const inp_EmailSenha = document.getElementById("inp_EmailSenha").value;
      let usuarioLS = JSON.parse(localStorage.getItem("usuariosLocalstorage"))

      if (!usuarioLS || usuarioLS.length === 0) 
      {
        setTimeout(() => {
          modal_Cadastro.style.display = "flex";
          modal_Login.style.display = "none";
          lbl_mensagemLogin.textContent = "";

        }, 1500)
        lbl_mensagemLogin.textContent = "Usuário não Cadastrado";
      }

      let usuarioEncontrado = false;
      usuarioLS.forEach((usuario) => {
        if (inp_EmailLogin === usuario.e_mail && inp_EmailSenha === usuario.senha)
        {
          usuarioEncontrado = true;
          lbl_mensagemLogin.textContent = "Usuário logado";
          user.textContent = usuario.nome;
        }
      });
      if (usuarioEncontrado == false)
      {
        lbl_mensagemLogin.textContent = "Usuário Não Encontrado";
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
  lbl_mensagemLogin.textContent="";
   const limpaForm = document.querySelector(".tela-login-modal");
        limpaForm.querySelectorAll("input").forEach((campo) => {
          campo.value = "";

        })

}


const listaUsuarios = usuariosArmazenados || [];
const novoLogin = new Usuario();
novoLogin.realizarLoginUser();
const novoUsuario = new Usuario();
novoUsuario.cadastrarUsuario();





