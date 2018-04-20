// tslint:disable:no-console
import { JSONSchema6 } from 'json-schema';
import * as React from 'react';
import Form from "react-jsonschema-form";
import './App.css';

const schema: JSONSchema6 = {
  properties: {
    done: { type: "boolean", title: "Done?", default: false },
    title: { type: "string", title: "Title", default: "A new task" },
  },
  required: ["title"],
  title: "Todo",
  type: "object",
};


const uiSchema =  {
  done: {
    "ui:widget": "radio" // could also be "select"
  }
};


interface IFormData {
  done?: boolean;
  title: string
}

const formData: IFormData = {
  done: true,
  title: "First task",
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
