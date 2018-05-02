import * as Ajv from 'ajv';
import * as React from 'react';
import { Button, Form, Message, Select } from 'semantic-ui-react';

/* tslint:disable */
const options = [
    {
        key: '1',
        text: 'coop 1',
        value: '1',
    },
    {
        key: '2',
        text: 'coop 2',
        value: '2',
    },
];

const storeOptions = [
    {
        key: true,
        text: 'Ja',
        value: true,
    },
    {
        key: false,
        text: 'Nein',
        value: false,
    },
];

class TestForm extends React.Component {

    state = {
    };

    handleChange = (e: any, {name, value}: { name: string, value: any }) => this.setState({[name]: value});

    private validate = () => {
        const schema = require('./acq-schema-v7-def.json');
        console.log("====== Submit =======");
        console.log({schema});
        console.log({state: this.state});

        const ajv = new Ajv({
            allErrors: true,
            verbose: true,
            jsonPointers: true,
        }); // options can be passed, e.g. {allErrors: true}

        const validate = ajv.compile(schema);
        const valid = validate({coop: this.state});
        if (!valid) {
            console.log({errors: validate.errors});
        }
    };

    render() {
        return (
            <Form>
                <Message>Open console to see JSON schema errors</Message>
                <Form.Group widths='equal'>
                    <Form.Field control={Select} name="newType" label='Coop' options={options}
                                onChange={this.handleChange}/>
                    <Form.Field control={Select} name="storeConstruction" label='Store' options={storeOptions}
                                onChange={this.handleChange}/>
                </Form.Group>
                <Form.Field control={Button} onClick={this.validate}>Submit</Form.Field>
            </Form>
        );
    }
}

export default TestForm;
