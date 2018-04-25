// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';

import CommonForm from '../common/Common.form';


const schema: JSONSchema6 = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "A list of tasks",
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "title": "Task list title"
    },
    "tasks": {
      "type": "array",
      "title": "Tasks",
      "items": {
        "type": "object",
        "required": [
          "title"
        ],
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "description": "A sample title"
          },
          "details": {
            "type": "string",
            "title": "Task details",
            "description": "Enter the task details"
          },
          "done": {
            "type": "boolean",
            "title": "Done?",
            "default": false
          }
        }
      }
    }
  }
};


const uiSchema = {
  "tasks": {
    "items": {
      "details": {
        "ui:widget": "textarea"
      }
    }
  }
};


const formData = {
  "title": "My current tasks",
  "tasks": [
    {
      "title": "My first task",
      "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "done": true
    },
    {
      "title": "My second task",
      "details": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      "done": false
    }
  ]
};

export default class NestedForm extends React.Component {
  public render() {
    return (
      <CommonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData} liveValidate={true} />
    );
  }
}