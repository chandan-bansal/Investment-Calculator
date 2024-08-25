export function Input({inputId, inputType, inputTag, value, onValueChanged}){
    return(
        <div>
            <label htmlFor={inputId}>{inputTag}</label>
            <input id={inputId} type={inputType} value={value} onChange={onValueChanged} min="0"></input>
        </div>
    )
}