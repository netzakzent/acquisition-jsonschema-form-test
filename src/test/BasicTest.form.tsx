// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';

import CommonForm from '../common/Common.form';

enum Color { NONE, RED, GREEN, BLUE };


// enumNames not json schema compliant
// class Colors {
//   public static readonly SCHEMA: JSONSchema6 = {
//     type: "number",
//     enum: [Color.RED, Color.GREEN, Color.BLUE],
//     enumNames: ["Rot", "Grün", "Blau"]      // tslint:disable-line
//   };
// }

class ColorSchema {
  public static readonly SCHEMA: JSONSchema6 = {
    title: "Farbe",
    type: "number",
    default: Color.GREEN,
    anyOf: [
      {
        type: "number",
        title: "-keine-",
        enum: [
          Color.NONE
        ]
      },      
      {
        type: "number",
        title: "Rot",
        enum: [
          Color.RED
        ]
      },
      {
        type: "number",
        title: "Grün",
        enum: [
          Color.GREEN
        ]
      },
      {
        type: "number",
        title: "Blau",
        enum: [
          Color.BLUE
        ]
      }
    ]
  };

  public static readonly UI_SCHEMA = {
    "ui:enumDisabled": [Color.GREEN]
  };
}


class MultipleChoicesSchema {
  public static readonly SCHEMA: JSONSchema6 = {
    type: "array",
    title: "A multiple choices list",
    items: {
      type: "string",
      // enum: ["foo", "bar", "fuzz", "qux"],
      // enum alternative:
      anyOf: [
        {
          type: "string",
          title: "Foo",
          enum: [
            "foo"
          ]
        },      
        {
          type: "string",
          title: "Bar",
          enum: [
            "bar"
          ]
        },
        {
          type: "string",
          title: "Fuzz",
          enum: [
            "fuzz"
          ]
        },
        {
          type: "string",
          title: "Qux",
          enum: [
            "qux"
          ]
        }
      ]
    },
    uniqueItems: true
  };

  public static readonly UI_SCHEMA = {
    "ui:widget": "checkboxes",
    "ui:options": {
      inline: true
    }
  };
}

const schema: JSONSchema6 = {
  properties: {
    done: {
      type: "boolean", title: "Done?", default: 'false',
      // enumNames: ['ja', 'nein']
    },
    title: { type: "string", title: "Title", default: "A new task", minLength: 2 },
    email: { type: "string", format: "email" },
    foo: { type: "boolean" },
    date: { type: "string", format: "date" },
    // color: Colors.SCHEMA,
    colorAnyOf: ColorSchema.SCHEMA,
    multipleChoices: MultipleChoicesSchema.SCHEMA,
    items: {
      title: "Multiple Items",
      type: "array",

      items: {
        type: "string"
      }
    }
  },
  required: ["title"],
  title: "Todo",
  type: "object",
};


const uiSchema = {
  date: {
    "ui:disabled": true
  },
  done: {
    "ui:widget": "radio" // could also be "select"
  },
  email: {
    "ui:readonly": false
  },
  foo: {
    "ui:widget": "hidden"
  },
  items: {
    "ui:options": {
      addable: true,
      removable: true
    }
  },

  colorAnyOf: ColorSchema.UI_SCHEMA,
  multipleChoices: MultipleChoicesSchema.UI_SCHEMA,

  title: {
    "ui:autofocus": true,
    classNames: "task-title foo-bar"
  },

  "ui:order": ["title", "done", "*"],
  "ui:rootFieldId": "akquise"
};


interface IFormData {
  done?: boolean;
  title: string,
  email: string
}

const formData: IFormData = {
  done: true,
  email: "walter.leinert@aracom.de",
  title: "First task"
};


export default class BasicTestForm extends React.Component {
  public render() {
    return (
      <CommonForm
        schema={schema}
        uiSchema={uiSchema}
        formData={formData} liveValidate={true} />
    );
  }
}