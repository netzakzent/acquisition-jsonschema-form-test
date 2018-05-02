import * as React from 'react';
import './App.css';

import AjvTestForm from './akquise/ajv-test/test-form';

class App extends React.Component {
    public render() {
        return (

            <div className="container">

                <div className="container">
                    <AjvTestForm/>
                </div>

            </div>

        );
    }
}

export default App;
