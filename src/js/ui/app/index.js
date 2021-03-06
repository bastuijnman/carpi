import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import MusicPage from './pages/music';
import DashboardPage from './pages/dashboard';

const style = {
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(50% 136%, #3B8686 0%, #0B486B 100%)',
    width: '100%',
    height: '100%'
};

class App extends React.Component {

    render () {

        return (

            <Router>
                <div style={style}>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/music" component={MusicPage} />
                </div>
            </Router>
        )

    }

}

// Render the actual application
ReactDOM.render(<App />, document.getElementById('app'));