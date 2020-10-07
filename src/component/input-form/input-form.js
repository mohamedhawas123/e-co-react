import React from 'react'
import './input-form.scss';


const Input = props => (
    <div className="group">
        <input className="form-input" type={props.type} name={props.name} value={props.value} placeholder={props.placeholder}  onChange={props.change} />
        {props.label ? (
            <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {props.label}
            </label>
        ): null}
    </div>
)

   
export default Input