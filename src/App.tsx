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


const formData = {
  done: true,
  title: "First task",
};


const log = (type: any) => console.log.bind(console, type);

class App extends React.Component {
  public render() {
    return (
      <Form 
        schema={schema}
        formData={formData}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    );
  }
}

export default App;
