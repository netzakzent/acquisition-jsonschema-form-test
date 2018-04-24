// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import Form from "react-jsonschema-form";

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
        title: "-",
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
}

class MultipleChoicesSchema {
  public static readonly SCHEMA: JSONSchema6 = {
    type: "array",
    title: "A multiple choices list",
    items: {
      type: "string",
      enum: ["foo", "bar", "fuzz", "qux"],
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


const log = (type: string) => console.log.bind(console, type);
const onSubmit = (e: IFormData) => console.log("Data submitted: ", e);
const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => console.log("Form cancelled: ");
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix", JSON.stringify(errors));

export default class FormTest extends React.Component {
  public render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} liveValidate={true} >

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}