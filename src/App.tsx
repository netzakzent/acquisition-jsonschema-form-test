import * as React from 'react';
import './App.css';

import { Jumbotron, PageHeader, Tab, Tabs } from 'react-bootstrap';

import FormTest from './test/FormTest'

class App extends React.Component {
  public render() {
    return (

      <Jumbotron>

        <div className="container" >

          <PageHeader>
            react-jsonschema-form <small>examples and evaluation</small>
          </PageHeader>



          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Basic Tests">
              <div className="container" >
                <FormTest />
              </div>
            </Tab>

            <Tab eventKey={2} title="Tab 2">
              Tab 2 content
          </Tab>

            <Tab eventKey={3} title="Tab 3" disabled={true}>
              Tab 3 content
          </Tab>
          </Tabs>

        </div>

      </Jumbotron>
    );
  }
}

export default App;
