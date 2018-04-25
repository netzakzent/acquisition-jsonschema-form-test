// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file



import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import FormCommon from '../../common/FormCommon';

// tslint:disable-next-line:no-var-requires
const merge = require('deepmerge').default;


import * as data from './formData.json';
import * as schemaDiff from './schema-diff.json';
import * as schema from './schema.json';
import * as uiSchema from './uiSchema.json';



const schemaMerged = merge(schema, schemaDiff) as JSONSchema6;

export default class AkquiseFormCoopNegotiation extends React.Component {
  public render() {
    return (
      <FormCommon
        className="form form-wide container-fluid container-fixed-lg"
        formData={data}
        schema={schemaMerged}
        uiSchema={uiSchema} liveValidate={true} />
    );

  }
}