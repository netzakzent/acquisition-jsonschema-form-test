// tslint:disable:no-console
// tslint:disable:object-literal-sort-keys
import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import Form from "react-jsonschema-form";
import './App.css';

enum Color { RED, GREEN, BLUE }; 

const numbersSchema = {
  type: "number",
  enum: [ Color.RED, Color.GREEN, Color.BLUE],
  enumNames: ["Rot", "Grün", "Blau"]
};

const schema: JSONSchema6 = {
  properties: {
    done: { type: "boolean", title: "Done?", default: 'false', enumNames: ['ja', 'nein'] },
    title: { type: "string", title: "Title", default: "A new task" },
    email: { type: "string", format: "email" },
    foo: { type: "boolean" },
    date: { type: "string", format: "date" },
    numbers: numbersSchema,
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
    "ui:options":  {
      addable: true,
      removable: true
    }
  },

  title: {
    classNames: "task-title foo-bar"
  },

  "ui:order": ["title", "done", "*"],
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
const onError = (errors: any[]) => console.log("I have", errors.length, "errors to fix");

class App extends React.Component {
  public render() {
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} />
    );
  }
}

export default App;
