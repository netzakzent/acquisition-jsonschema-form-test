// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file

import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
// tslint:disable-next-line:no-var-requires
const merge = require('deepmerge').default;

import FormCommon from '../../common/FormCommon';

import * as data from './formData.json';
import * as schemaDiff from './schema-diff.json';
import * as schema from './schema.json';
import * as uiSchema from './uiSchema.json';


// NOTE: remove tvtgs.items because new items from schema-diff will be merged into
delete (schema as any).properties.tvtgs.items;

const schemaMerged = merge(schema, schemaDiff) as JSONSchema6;


export default class AkquiseFormSupervisor extends React.Component {
  public render() {
    return (
        <FormCommon
          formData={data}
          schema={schemaMerged}
          uiSchema={uiSchema} liveValidate={true} />
    );
    
  }
}