// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file



import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import Form from "react-jsonschema-form";

// tslint:disable-next-line:no-var-requires
const merge = require('deepmerge').default;
import * as data from './recipient/formData.json';
import * as schemaDiff from './recipient/schema-diff.json';
import * as schema from './recipient/schema.json';
import * as uiSchema from './recipient/uiSchema.json';



const schemaMerged = merge(schema, schemaDiff) as JSONSchema6;


const log = (type: string) => console.log.bind(console, type);
const onSubmit = (e: any) => console.log("Data submitted: ", e);
const onCancel = (e: React.SyntheticEvent<HTMLButtonElement>) => console.log("Form cancelled: ");
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix");

export default class AkquiseForm extends React.Component {
  public render() {
    return (
      <Form
        formData={data}
        schema={schemaMerged}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} liveValidate={true} >


        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}