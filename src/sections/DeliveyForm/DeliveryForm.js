import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/FormInput/FormInput';
import getFormInputs from '../../services/getFormInputs';

class DeliveryForm extends Component {

    state = {
        formInputs: getFormInputs()
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
        this.setState({ orderForm: updatedFormInput });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <FormInput></FormInput>
                    // <Input 
                    //     key={formElement.id}
                    //     elementType={formElement.config.elementType}
                    //     elementConfig={formElement.config.elementConfig}
                    //     value={formElement.config.value}
                    //     changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                {/* <Button btnType="Success">ORDER</Button> */}
            </form>
        );
        return (
            <div>
                <h4>Unesite podatke</h4>
                <FormInput></FormInput>
                <Link to='/kosarica'>Natrag</Link>
            </div>
        );
    }
}

export default DeliveryForm



