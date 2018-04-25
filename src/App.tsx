import * as React from 'react';
import './App.css';

import { Jumbotron, PageHeader, Tab, Tabs } from 'react-bootstrap';

// import CoopNegotiationForm from './akquise/coop-negotioation/CoopNegotiation.form';
import RecipientForm from './akquise/recipient/Recipient.form';
import SupervisorForm from './akquise/supervisor/Supervisor.form';
import BasicTestForm from './test/BasicTest.form'

class App extends React.Component {
  public render() {
    return (

      <Jumbotron>

        <div className="container" >

          <PageHeader>
            react-jsonschema-form <small>examples and evaluation</small>
          </PageHeader>



          <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Basic Tests">
              <div className="container" >
                <BasicTestForm />
              </div>
            </Tab>

            <Tab eventKey={2} title="Akquise Form Recipient">
              <div className="container" >
                <RecipientForm />
              </div>
            </Tab>


            <Tab eventKey={3} title="Akquise Form Supervisor">
              <div className="container" >
                <SupervisorForm />
              </div>
            </Tab>

 {/*            <Tab eventKey={3} title="Akquise Form Coop Negotiation">
              <div className="container" >
                <CoopNegotiationForm />
              </div>
            </Tab> */}

          </Tabs>

        </div>

      </Jumbotron>
    );
  }
}

export default App;
