import './Formulario.css'
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Formulario(props){
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [categoria, setCategoria] = useState('')
    const [nomeCategoria, setNomeCategoria] = useState('')
    const [corCategoria, setCorCategoria] = useState('#000000')


    function aoSalvar(evento){
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            id: uuidv4(),
            favorito: false,
            nome,
            descricao, 
            imagem,
            categoria
    })
    setNome('')
    setDescricao('')
    setImagem('')
    setCategoria('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
            <Campo
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome do personagem" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
             />
            <Campo
                obrigatorio={true} 
                label="Descrição" 
                placeholder="Selecione a categoria do personagem" 
                valor={descricao}
                aoAlterado={valor => setDescricao(valor)}
                />
            <Campo 
                obrigatorio={true} 
                label="Imagem" 
                placeholder="Digite o endereço da imagem do personagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Categoria" 
                itens={props.categorias} 
                valor={categoria}
                aoAlterado={valor => setCategoria(valor)}
                />
            <Botao>
                Criar Personagem
            </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarCategoria({
                    nome: nomeCategoria,
                    cor: corCategoria
                })
                setNomeCategoria('')
                setCorCategoria('')
            }}>
                <h2>Preencha os dados para criar uma nova categoria</h2>
            <Campo
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o nome da categoria" 
                valor={nomeCategoria}
                aoAlterado={valor => setNomeCategoria(valor)}
             />
            <Campo
                obrigatorio={true} 
                label="Cor" 
                type="color"
                placeholder="Selecione a cor da categoria" 
                valor={corCategoria}
                aoAlterado={valor => setCorCategoria(valor)}
            />
            <Botao>
                Criar Categoria
            </Botao>
            </form>
        </section>
    )
}

export default Formulario