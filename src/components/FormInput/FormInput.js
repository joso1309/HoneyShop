import React from 'react';
import './FormInput.css'
import Wrap from '../../hoc/Wrap/Wrap';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <div className='InputText'>
                    <input
                        className='InputElement'
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                </div>
            );
            break;
        case ('textarea'):
            inputElement = (
                <div className='InputText'>
                    <textarea
                        rows="10"

                        className='InputElement'
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                </div>
            );
            break;
        case ('select'):
            inputElement = (
                <div className='InputSelect'>
                    {/* <label className='Label'>{props.label}</label> */}
                    <select
                        className='InputElementSelect'
                        value={props.value}
                        onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option className='Option' key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                </div>
            );
            break;
        default:
            inputElement = (
                <div className='Input'>
                    <input
                        className='InputElement'
                        {...props.elementConfig}
                        value={props.value}
                        onChange={props.changed} />
                </div>
            );
    }

    return (
        <Wrap>
            {inputElement}
        </Wrap>
    );

};

export default input;