// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';

import Form, { UiSchema } from "react-jsonschema-form";

// tslint:disable-next-line:no-empty-interface
export interface IState {

}

export interface IAkquiseFormCommonProps {
  className?: string;
  formData: any;
  schema: JSONSchema6;
  uiSchema: UiSchema;
  liveValidate?: boolean;
}


const log = (type: string) => console.log.bind(console, type);
const onSubmit = (e: any) => console.log("Data submitted: ", e);
const onCancel = (e: React.SyntheticEvent<HTMLButtonElement>) => console.log("Form cancelled: ");
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix");

export default class AkquiseFormCommon extends React.Component<IAkquiseFormCommonProps, IState> {

  public constructor(props: IAkquiseFormCommonProps) {
    super(props);
  }


  public render() {
    return (
      <Form
        className={this.props.className}
        formData={this.props.formData}
        schema={this.props.schema}
        uiSchema={this.props.uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} 
        liveValidate={this.props.liveValidate} >

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}