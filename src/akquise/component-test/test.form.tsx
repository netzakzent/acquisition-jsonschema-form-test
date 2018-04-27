import * as React from 'react';
import { Button, Form } from 'semantic-ui-react'

import LabeledTextField from './labeled-text-field.component';
// import LabeledText from './labeled-text.component';


const fluid = true;

const user = {
  email: 'walter.leinert@aracom.de',
  firstname: 'Walter',
  lastname: 'Leinert',
  salutation: 'Herr',
  tvtgs: '100'
}

class TestForm extends React.Component {

  public render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <LabeledTextField fluid={fluid} label={'Anrede'} placeholder={'salutation'} value={user.salutation} />
          <LabeledTextField fluid={fluid} label={'Vorname'} placeholder={'first name'} value={user.firstname} />
        </Form.Group>

        <Form.Group widths='equal'>
          <LabeledTextField required={true} fluid={fluid} label={'Nachname'} placeholder={'last name'} value={user.lastname} />
          <LabeledTextField required={true} fluid={fluid} label={'Email'} placeholder={'email'} value={user.email} />
        </Form.Group>

        <Form.Group widths='equal'>
          <LabeledTextField fluid={fluid} label={'TVTG'} placeholder={'tvtgs'} value={user.tvtgs} />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>

    );
  }
}

export default TestForm;
