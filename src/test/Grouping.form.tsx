// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';

import CommonForm from '../common/Common.form';


const schema: JSONSchema6 = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "A set of groups",
  "type": "object",
 
  "properties": {
    "group1": {
      "type": "object",
      "title": "Group 1",

      "properties": {
        "group1_1": {
          "type": "object",
          "title": "Group 1.1",

          "properties": {
            "group1_1_1": {
              "type": "string",
              "title": "Group 1.1.1"
            },
           
            "group1_1_2": {
              "type": "string",
              "title": "Group 1.1.2"
            },
          }
        },
       
        "group1_2": {
          "type": "object",
          "title": "Group 1.2",
          
          "properties": {
            "group1_2_1": {
              "type": "string",
              "title": "Group 1.2.1"
            },
           
            "group1_2_2": {
              "type": "string",
              "title": "Group 1.2.2"
            },
          }
        },
      }
    },
   
    "group2": {
      "type": "object",
      "title": "Group 2",

      "properties": {
        "group2_1": {
          "type": "string",
          "title": "Group 2.1"
        },
       
        "group2_2": {
          "type": "string",
          "title": "Group 2.2"
        },
      }
    },
  }
};


const uiSchema = {
  "group1": {    
    "group_1_1": {
      "classNames": "col-md-4",
      "group_1_1_1": {
        "classNames": "col-md-4"
      }
    },
    "group_1_2": {
      "classNames": "col-md-4"
    },
    
    "classNames": "col-md-12",
  },
  "group2": {        
    "classNames": "col-md-12",
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

export default class GroupingForm extends React.Component {
  public render() {
    return (
      <CommonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData} liveValidate={true} />
    );
  }
}