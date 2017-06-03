import React from 'react';
import ReactDOM from 'react-dom';

const style = {
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(50% 136%, #3B8686 0%, #0B486B 100%)',
    width: '100%',
    height: '100%'
};

class App extends React.Component {

    render () {

        return (
            <div style={style}>

            </div>
        )

    }

}

// Render the actual application
ReactDOM.render(<App />, document.getElementById('app'));