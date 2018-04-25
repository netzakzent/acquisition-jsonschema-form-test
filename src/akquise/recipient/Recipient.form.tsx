import * as React from 'react';
import CommonForm from '../../common/Common.form';


import * as data from './formData.json';
// import * as schemaDiff from './schema-diff.json';
import * as schema from './schema.json';
import * as uiSchema from './uiSchema.json';



// const schemaMerged = merge(schema, schemaDiff) as JSONSchema6;

export default class RecipientForm extends React.Component {
  public render() {
    return (
      <CommonForm
        className="form form-wide container-fluid container-fixed-lg"
        formData={data}
        schema={schema}
        uiSchema={uiSchema} liveValidate={true} />
    );

  }
}