import { useState } from "react";
import './form.css'

const Form = () => {
    // Estado inicial do formulario
    const initilForm = {
        nome: "",
    }

    // Estado do formluario
    // formState -> Tipo o get do Java (Pega)
    // setFormState -> Tipo o set do Java (Devolve)
    const [formState, setFormState] = useState(initilForm);

    // Função para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
    
    // Obter o valor e o nome do campo de emtrada
    const target = event.currentTarget;

    // Extrair o valor e o nome do campo de entrada
    const { value, name} = target;

    // Atualizar o estado ao formulario com os novos valores
    // ... -> Tem a função de esplalhar a informação
    setFormState({ ...formState, [name]: value});

    }

    // Função para lidar com a submissão do formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome);

        setFormState({ ...initilForm });

    }

  return (
    <div className="containerForm">
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label" htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" 
                    value={formState.value} onChange={handleInput}/>
                </div>
                <div className="form-control">
                    <button className="send-button" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form;