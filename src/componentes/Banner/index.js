import './Banner.css'

function Banner(){
    //Isso é um JSX, ou seja, é a forma que o react lê o código e insere no DOM
    return(
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página do Organo" />
        </header>
    )
}

export default Banner