import React, { Component } from 'react';
import './Principal.css';

class Cad extends Component {

  handleSubmit = (e) => {
      e.preventDefault();
      let pacienteStr = localStorage.getItem('@acme-app/paciente');
      if (pacienteStr !== null)
      {
        let pacienteObj = JSON.parse(pacienteStr);
        if (pacienteObj.cpf !== e.target.elements.cpf.value)
        {
          let paciente = {
            nome: e.target.elements.nome.value,
            dtnasc: e.target.elements.dtnasc.value,
            cpf: e.target.elements.cpf.value,
            end: e.target.elements.end.value,
            cidade: e.target.elements.cidade.value,
            uf: e.target.elements.uf.value,
            sexo: e.target.elements.sexo.value,
            ativo: e.target.elements.ativo.value,}
          localStorage.setItem('@acme-app/paciente', JSON.stringify(paciente));
          window.location.reload();
        }
        else
        {
          window.alert("Paciente já cadastrado ou CPF duplicado!");
        }
      }
      else
      {
        let paciente = {
          nome: e.target.elements.nome.value,
          dtnasc: e.target.elements.dtnasc.value,
          cpf: e.target.elements.cpf.value,
          end: e.target.elements.end.value,
          cidade: e.target.elements.cidade.value,
          uf: e.target.elements.uf.value,
          sexo: e.target.elements.sexo.value,
          ativo: e.target.elements.ativo.value,}
        localStorage.setItem('@acme-app/paciente', JSON.stringify(paciente));
        window.location.reload();
      }
  }


    handleRemove = (nome) => {
      const Nome = nome;
      
      if (Nome != null)
      {
        let pacienteStr = localStorage.getItem('@acme-app/paciente');
        let pacienteObj = JSON.parse(pacienteStr);

        if (pacienteStr !== null) 
        { 
          if (pacienteObj.nome == Nome) 
          {
            var ok = window.confirm("Excluir definitivamente o paciente " + [nome] + " ?");
            if(ok)
            {
              localStorage.removeItem('@acme-app/paciente');
              window.alert("Paciente Excluido!");
            }
            else
            {
              window.alert("Paciente não encontrado!");
            }
          }
          else
          {
            window.alert("Paciente não encontrado!");
          }
        }
        else
        {
          window.alert("Paciente não encontrado!");
        }
      }   
      else
      {
        window.alert("Paciente não encontrado!");
      }
  }

  handleSearch = () => {
      const Nome = window.document.getElementById("nome").value;
        
      if (Nome !== null || Nome !== '')
      {
        let pacienteStr = localStorage.getItem('@acme-app/paciente');
        let pacienteObj = JSON.parse(pacienteStr);

        if (pacienteStr !== null) 
        { 
          if (pacienteObj.nome == Nome)
          {
            localStorage.setItem('@acme-app/ok', "ok");
            window.location.reload();
          }
          else
          {
            window.alert("Paciente não encontrado!");
          }
        }
        else
        {
          window.alert("Paciente não encontrado!");
        }
      }
      else
      {
        window.alert("Paciente não encontrado!");
      }
  }

  render()
  {
    let ok = localStorage.getItem('@acme-app/ok');
      if (ok == "ok")
      {
        let pacienteStr = localStorage.getItem('@acme-app/paciente');
        let pacienteObj = JSON.parse(pacienteStr);
        if (pacienteStr !== null)
        {
          localStorage.setItem('@acme-app/ok', "No");
          return (
            <div className="Cad">
              <form onSubmit={this.handleSubmit}>
              <p>
                <span>Nome: </span>
                <input type="text" id="nome" name="nome" placeholder="Paciente" title="Consulte por este campo " value={pacienteObj.nome} required autoFocus/>
              </p>
              <p>
                <span>Data de Nascimento: </span>
                <input type="date" name="dtnasc" placeholder="Data de Nascimento" value={pacienteObj.dtnasc} required />
              </p>
              <p>
                <span>CPF: </span>
                <input type="text" id="cpf" name="cpf" placeholder="Digite CPF válido" value={pacienteObj.cpf} required pattern="[A-Z]{0}[0-9]{11}"/>
              </p>
              <p>
                <span>Endereço: </span>
                <input type="text" name="end" placeholder="Endereco" value={pacienteObj.end} />
              </p>
              <p>
                <span>Cidade: </span>
                <input type="text" name="cidade" placeholder="Cidade" value={pacienteObj.cidade}/>
              </p>
              <p>
                <span>Estado: </span>
                <input type="text" name="uf" placeholder="UF"  value={pacienteObj.uf} pattern="[A-Z]{2}[0-9]{0}"/>
                <span>Sexo: </span>
                <script type="text/javascript">
                  if(pacienteObj.sexo == "M")
                  {
                    <select name="sexo">
                      <option value="M" selected>Masculino</option>
                      <option value="F">Feminino</option>
                    </select>
                  }
                  else
                  {
                    <select name="sexo">
                      <option value="M">Masculino</option>
                      <option value="F" selected>Feminino</option>
                    </select>
                  }
                </script>
              </p>
              <p>
                <span>Status: </span>
                <script type="text/javascript">
                  if(pacienteObj.ativo == "s")
                  {
                    <input type="checkbox" name="ativo" value="s" checked/>
                  }
                  else
                  {
                    <input type="checkbox" name="ativo" value="s"/>
                  }
                </script>
                <span className="Direita">ativo</span>
              </p>
              <div className="Bt">  
                <button type="submit">Salvar</button>
                <button type="push" onClick={this.handleSearch}>Buscar</button>
                <button type="push" onClick={() => this.handleRemove(window.document.getElementById("nome").value)}>Deletar</button>
              </div>
              </form>
            </div>
          );
        }
      }
      else
      {
        localStorage.setItem('@acme-app/ok', "No");
        return (
          <div className="Cad">
            <form onSubmit={this.handleSubmit}>
            <p>
              <span>Nome: </span>
              <input type="text" id="nome" name="nome" placeholder="Paciente" title="Consulte por este campo " required autoFocus/>
            </p>
            <p>
              <span>Data de Nascimento: </span>
              <input type="date" name="dtnasc" placeholder="Data de Nascimento" required />
            </p>
            <p>
              <span>CPF: </span>
              <input type="text" id="cpf" name="cpf" placeholder="Digite CPF válido" required pattern="[A-Z]{0}[0-9]{11}"/>
            </p>
            <p>
              <span>Endereço: </span>
              <input type="text" name="end" placeholder="Endereco"/>
            </p>
            <p>
              <span>Cidade: </span>
              <input type="text" name="cidade" placeholder="Cidade"/>
            </p>
            <p>
              <span>Estado: </span>
              <input type="text" name="uf" placeholder="UF" pattern="[A-Z]{2}[0-9]{0}"/>
              <span>Sexo: </span>
              <select name="sexo">
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
              </select>
            </p>
            <p>
              <span>Status: </span>
              <input type="checkbox" name="ativo" value="s"/>
              <span className="Direita">ativo</span>
            </p>
            <div className="Bt">  
              <button type="submit">Salvar</button>
              <button type="push" onClick={this.handleSearch}>Buscar</button>
              <button type="push" onClick={() => this.handleRemove(window.document.getElementById("nome").value)}>Deletar</button>
            </div>
            </form>
          </div>
        );
      }
  }
}

export default Cad;