import './Campo.css'

function Campo({type = 'text', label, valor, aoAlterado, obrigatorio, placeholder}){

    function aoDigitado(evento){
        aoAlterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
            type={type} 
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholder}/>
        </div>
    )
}

export default Campo