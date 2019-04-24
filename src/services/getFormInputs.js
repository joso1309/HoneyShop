const fromInputs = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Ime i Prezime'
        },
        value: ''
    },
    street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Ulica i broj'
        },
        value: ''
    },
    city: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Mjesto'
        },
        value: ''
    },
    telephone: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Broj mobitela'
        },
        value: ''
    },
    remark: {
        elementType: 'input',
        elementConfig: {
            type: 'textarea',
            placeholder: 'Napomena'
        },
        value: ''
    },
    day: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'subota', displayValue: 'Subota' },
                { value: 'nedjelja', displayValue: 'Nedjelja' }
            ]
        },
        value: ''
    },
    timeBegin: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 10, displayValue: 10 },
                { value: 12, displayValue: 12 },
                { value: 14, displayValue: 14 },
                { value: 16, displayValue: 16 },
                { value: 18, displayValue: 18 }
            ]
        },
        value: ''
    },
    timeEnd: {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 10, displayValue: 10 },
                { value: 12, displayValue: 12 },
                { value: 14, displayValue: 14 },
                { value: 16, displayValue: 16 },
                { value: 18, displayValue: 18 }
            ]
        },
        value: ''
    }
}

function getFormInputs() {
    return fromInputs
}

export default getFormInputs