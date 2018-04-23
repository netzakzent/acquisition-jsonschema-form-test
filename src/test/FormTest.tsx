// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file


import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import Form from "react-jsonschema-form";

// enum Color { RED, GREEN, BLUE };

// class Numbers {
//   public static readonly SCHEMA = {
//     type: "number",
//     enum: Color,
//     // enumNames: ["Rot", "Grün", "Blau"]
//   };
// }

// class MultipleChoices {
//   public static readonly SCHEMA = {
//     type: "array",
//     title: "A multiple choices list",
//     items: {
//       type: "string",
//       enum: ["foo", "bar", "fuzz", "qux"],
//     },
//     uniqueItems: true
//   };

//   public static readonly UI_SCHEMA = {
//     "ui:widget": "checkboxes",
//     "ui:options": {
//       inline: true
//     }
//   };
// }

const schema: JSONSchema6 = {
  properties: {
    done: {
      type: "boolean", title: "Done?", default: 'false',
      // enumNames: ['ja', 'nein']
    },
    title: { type: "string", title: "Title", default: "A new task" },
    email: { type: "string", format: "email" },
    foo: { type: "boolean" },
    date: { type: "string", format: "date" },
    // numbers: Numbers.SCHEMA,
    // multipleChoices: MultipleChoices.SCHEMA,
    items: {
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
    "ui:readonly": true
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

  // multipleChoices: MultipleChoices.UI_SCHEMA,

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
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix");

export default class FormTest extends React.Component {
  public render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} >

        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </Form>
    );
  }
}