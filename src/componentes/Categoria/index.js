import Personagem from '../Personagem'
import './Categoria.css'
import hexToRgba from 'hex-to-rgba';

function Categoria(props){
    return(
        (props.personagens.length > 0) && <section className='categoria' style={{backgroundImage: 'url(/imagens/bg.png)', backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input__cor' />
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='personagens'>
            {props.personagens.map( personagem => {
                return (<Personagem
                    id={personagem.id} 
                    favorito={personagem.favorito}
                    corDeFundo={props.cor} 
                    key={personagem.nome} 
                    nome={personagem.nome} 
                    descricao={personagem.descricao} 
                    imagem={personagem.imagem} 
                    aoDeletar={props.aoDeletar}
                    aoFavoritar={props.aoFavoritar}
                    />
                )
            })}
            </div>
        </section>
    )
}

export default Categoria