import React from 'react';

import Header from './../components/header';
import Button from './../components/dashboard/button';

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%'
};

export default class DashboardPage extends React.Component {

    render () {
        return (
            <div>
                <Header text="Dashboard" />
                <div style={contentStyle}>
                    <Button icon="music-notes" text="music" />
                    <Button icon="radio" text="radio" />
                    <Button icon="phone" text="phone" />
                </div>
            </div>
        )
    }

}
