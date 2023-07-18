import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Personagem.css'

//Essa é uma outra forma de usar o props, desestruturando-o
function Personagem({id, nome, descricao, imagem, corDeFundo, aoDeletar, favorito, aoFavoritar}){

    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito ={
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='personagem'>
            <AiFillCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(id)} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{descricao}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <AiFillHeart {... propsFavorito} color='#FF0000'/> 
                        : <AiOutlineHeart {... propsFavorito}
                    />}
                </div>
            </div>
        </div>
    )
}

export default Personagem