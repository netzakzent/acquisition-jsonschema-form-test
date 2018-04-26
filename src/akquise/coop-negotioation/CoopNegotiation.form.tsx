// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file

import * as React from 'react';
import CommonForm from '../../common/Common.form';

// import * as data from './formData-coop.json';
// import * as schema from './schema-coop.json';
import * as data from './formData.json';
import * as schema from './schema-customer.json';

import * as uiSchema from './uiSchema.json';


export default class CoopNegotiationForm extends React.Component {
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