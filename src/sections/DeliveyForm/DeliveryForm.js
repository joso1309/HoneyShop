import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/FormInput/FormInput';
import getFormInputs from '../../services/getFormInputs';
import Button from '../../components/Button/Button';
import './DeliveryForm.css'

class DeliveryForm extends Component {

    state = {
        formInputs: getFormInputs(),
        items: this.props.products
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.state.formInputs);
        console.log(this.state.items);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormInput = {
            ...this.state.formInputs
        };
        const updatedFormElement = {
            ...updatedFormInput[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormInput[inputIdentifier] = updatedFormElement;
        this.setState({ formInputs: updatedFormInput });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.formInputs) {
            formElementsArray.push({
                id: key,
                config: this.state.formInputs[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <FormInput
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <div className='Button'>
                    <Button text='Naruči' />
                </div>

            </form>
        );
        return (
            <div className='DeliveryForm'>
                <h4>Unesite podatke</h4>
                {form}
                <Link to='/kosarica'>Natrag</Link>
            </div>
        );
    }
}

export default DeliveryForm



