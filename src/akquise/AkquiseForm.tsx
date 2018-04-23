// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import * as React from 'react';
import Form from "react-jsonschema-form";
import * as schema from './formData.json';

const log = (type: string) => console.log.bind(console, type);
const onSubmit = (e: any) => console.log("Data submitted: ", e);
const onCancel = (e: React.SyntheticEvent<HTMLButtonElement>) => console.log("Form cancelled: ");
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix");

export class AkquiseForm extends React.Component {
  public render() {
    return (
      <Form
        schema={schema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} >

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}

export default AkquiseForm;