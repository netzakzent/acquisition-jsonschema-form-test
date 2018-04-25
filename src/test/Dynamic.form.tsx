// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';

import CommonForm from '../common/Common.form';


const schema: JSONSchema6 = {
  "title": "Person",
  "type": "object",
  "properties": {
    "Do you have any pets?": {
      "type": "string",
      "enum": [
        "No",
        "Yes: One",
        "Yes: More than one"
      ],
      "default": "No"
    }
  },
  "required": [
    "Do you have any pets?"
  ],
  "dependencies": {
    "Do you have any pets?": {
      "oneOf": [
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "No"
              ]
            }
          }
        },
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "Yes: One"
              ]
            },
            "How old is your pet?": {
              "type": "number"
            }
          },
          "required": [
            "How old is your pet?"
          ]
        },
        {
          "properties": {
            "Do you have any pets?": {
              "enum": [
                "Yes: More than one"
              ]
            },
            "Do you want to get rid of any?": {
              "type": "boolean"
            }
          },
          "required": [
            "Do you want to get rid of any?"
          ]
        }
      ]
    }
  }
};


const uiSchema = {

};


const formData = {
 
};

export default class DynamicForm extends React.Component {
  public render() {
    return (
      <CommonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData} liveValidate={true} />
    );
  }
}