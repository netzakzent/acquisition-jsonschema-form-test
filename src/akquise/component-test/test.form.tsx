import * as React from 'react';
import { Button, Form } from 'semantic-ui-react'

import LabeledTextField from './labeled-text-field.component';
import LabeledText from './labeled-text.component';


const fluid = true;

const user = {
  email: 'walter.leinert@aracom.de',
  firstname: 'Walter',
  lastname: 'Leinert'
}

class TestForm extends React.Component {

  public render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <LabeledText fluid={fluid} label={'Anrede'} placeholder={'salutation'} />
          </Form.Field>

          <Form.Field>
            <LabeledText fluid={fluid} label={'Vorname'} placeholder={'first name'} />
          </Form.Field>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field>
            <LabeledTextField required={true} fluid={fluid} label={'Nachname'} placeholder={'last name'} value={user.lastname} />
          </Form.Field>

          <Form.Field>
            <LabeledTextField required={true} fluid={fluid} label={'Email'} placeholder={'email'} value={user.email} />
          </Form.Field>
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field>
            <LabeledText fluid={fluid} label={'TVTG'} placeholder={'tvtgs'} />
          </Form.Field>
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>

    );
  }
}

export default TestForm;
