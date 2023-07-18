import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
        <div className="lista__suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
//Dentro da tag <select>, é utilizado o método map para iterar sobre o array de itens
//fornecidos através da propriedade props.itens. Cada item é utilizado para renderizar 
//uma tag <option> com a propriedade key definida como o próprio item.

export default ListaSuspensa