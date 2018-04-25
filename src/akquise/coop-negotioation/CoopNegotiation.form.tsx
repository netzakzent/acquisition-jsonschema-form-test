// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file

import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import CommonForm from '../../common/Common.form';

// tslint:disable-next-line:no-var-requires
const merge = require('deepmerge').default;


import * as data from './formData-coop.json';
import * as schema from './schema-coop.json';
import * as schemaDiff from './schema-diff.json';
import * as uiSchema from './uiSchema.json';


const schemaMerged = merge(schema, schemaDiff) as JSONSchema6;

export default class CoopNegotiationForm extends React.Component {
  public render() {
    return (
      <CommonForm
        className="form form-wide container-fluid container-fixed-lg"
        formData={data}
        schema={schemaMerged}
        uiSchema={uiSchema} liveValidate={true} />
    );

  }
}