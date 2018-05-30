import * as Ajv from 'ajv';
import * as React from 'react';
import { Button, Form, Input, Message, Select } from 'semantic-ui-react';

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

function setApprover (name: string, value: string, prevState: any) {

    return {
        ...prevState,
        approver: {
            ...prevState.approver,
            [name]: value
        }
    };
}

class TestForm extends React.Component {

    state = {
        approver: {}
    };

    handleChange = (e: any, {name, value}: { name: string, value: any }) => this.setState({[name]: value});
    handleChangeApprover = (e: any, {name, value}: { name: string, value: any }) => this.setState(
        (prevState) => setApprover(name, value, prevState)
    );

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

    private validatePartial = () => {
        const schema = require('./acq-schema-v7-partial.json');
        console.log("====== Submit Partial =======");
        console.log({schema});
        console.log({state: this.state});

        const ajv = new Ajv({
            allErrors: true,
            verbose: true,
            jsonPointers: true,
        }); // options can be passed, e.g. {allErrors: true}

        // this should be executed only once
        ajv.addSchema(schema); // schema should have $id or id attribute, say "schema.json#"

        // every time you validate
        const schemaUri = 'mySchema#/properties/approver';
        const validate = ajv.getSchema(schemaUri); // you can keep them in the map, to avoid getSchema call too
        const valid = validate(this.state.approver); // errors are in validate.errors

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
                    <Form.Field control={Button} onClick={this.validate}>Submit</Form.Field>
                </Form.Group>
                <Message>No errors for internalRepresentative1</Message>
                <Form.Group widths='equal'>
                    <Form.Field control={Input} name="email" label='Email'
                                onChange={this.handleChangeApprover}/>
                    <Form.Field control={Input} name="language" label='Language'
                                onChange={this.handleChangeApprover}/>

                    <Form.Field control={Button} onClick={this.validatePartial}>Submit Partial</Form.Field>
                </Form.Group>
            </Form>
        );
    }
}

export default TestForm;
