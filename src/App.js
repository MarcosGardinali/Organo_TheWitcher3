import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [categorias, setCategorias] = useState([
    {
      id: uuidv4(),
      nome: 'Bruxo',
      cor: '#191A19',
      
    },
    {
      id: uuidv4(),
      nome: 'Feiticeiro(a)',
      cor: '#0B2447',
      
    },
    {
      id: uuidv4(),
      nome: 'Elfo(a)',
      cor: '#CCD6A6',
      
    },
    {
      id: uuidv4(),
      nome: 'Humano(a)',
      cor: '#8E3200',
      
    },
    {
      id: uuidv4(),
      nome: 'Anão',
      cor: '#40513B',
      
    },
    {
      id: uuidv4(),
      nome: 'Monstro',
      cor: '#472D2D',
      
    }    
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Geralt De Rívia',
      descricao: 'Bruxo em tempo integral',
      imagem: 'https://i.pinimg.com/474x/54/50/6b/54506bb1df4ca3cbbd7ba72f1714dcfd--jon-hamm-wild-hunt.jpg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Vesemir',
      descricao: 'Mestre bruxo em Kaer Morhen',
      imagem: 'https://static.wikia.nocookie.net/witcher/images/a/a3/Tw3_vesemir_cut_out.jpg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Eskel',
      descricao: 'Bruxo de Kaer Morhen',
      imagem: 'https://64.media.tumblr.com/9c79966d7bbe33cb0fb0c00de8f8092f/50e2a1f065b9af43-fd/s500x750/f0fcb8a4ec54d6745fd1db1a95803537bd91d084.jpg',
      categoria: categorias[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Yennefer de Vengenberg',
      descricao: 'Feiticeira mais poderosa do continente',
      imagem: 'https://avatarfiles.alphacoders.com/178/178254.jpg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Triss Merigold',
      descricao: 'Feiticeira de Aretuza',
      imagem: 'https://i.redd.it/zhk5t5e6dur71.jpg',
      categoria: categorias[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Avallach',
      descricao: 'Elfo mago sábio',
      imagem: 'https://assets.mycast.io/characters/avallach-983206-normal.jpg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Eredin',
      descricao: 'Rei da caçada selvagem',
      imagem: 'https://assetsio.reedpopcdn.com/the_witcher_3_wild_hunt_walkthrough_11_wandering_in_the_dark.jpg',
      categoria: categorias[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Dandelion',
      descricao: 'Bardo amigo de Geralt',
      imagem: 'https://i.pinimg.com/originals/43/9d/04/439d04faace77329b08e808f5b4a0f24.jpg',
      categoria: categorias[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Zoltan Chivay',
      descricao: 'Anão amigo de Geralt',
      imagem: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/The-Witcher-3-Zoltan-Chivay.jpg',
      categoria: categorias[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Liche',
      descricao: 'Espírito da floresta',
      imagem: 'https://i.pinimg.com/236x/dd/03/db/dd03dbb55716505cecfcf8eb4906074b.jpg',
      categoria: categorias[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Troll',
      descricao: 'Troll de pedra',
      imagem: 'https://i.redd.it/my-5-favorite-tw3-characters-v0-vonn90tljxga1.jpg',
      categoria: categorias[5].nome
    }
  ]

  const [personagens, setPersonagens] = useState(inicial)

  function deletarPersonagem(id){
    setPersonagens(personagens.filter(personagem => personagem.id !== id))
  }

  function mudarCorDaCategoria(cor, id){
    setCategorias(categorias.map(categoria =>{
      if(categoria.id === id){
        categoria.cor = cor 
      }
      return categoria
    }))
  }

  function cadastrarCategoria(novaCategoria){
    setCategorias([...categorias, {... novaCategoria, id: uuidv4() } ])
  }

  function aoNovoPersonagemAdicionado(personagem){
    setPersonagens([...personagens, personagem])
  }

  function resolverFavorito(id){
    setPersonagens(personagens.map(personagem =>{
      if(personagem.id === id) personagem.favorito = !personagem.favorito 
      return personagem
      
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarCategoria={cadastrarCategoria}
        categorias={categorias.map(categoria => categoria.nome)} 
        aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)} 
      />
      <section className='categorias'>
        {categorias.map(categoria => <Categoria 
          mudarCor={mudarCorDaCategoria}
          key={categoria.nome} 
          id={categoria.id}
          nome={categoria.nome} 
          cor={categoria.cor}
          personagens={personagens.filter(personagem => personagem.categoria === categoria.nome)}
          aoDeletar={deletarPersonagem}
          aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;