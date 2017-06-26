import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/music"><Button icon="music-notes" text="music" /></Link>
                    <Button icon="radio" text="radio" />
                    <Button icon="phone" text="phone" />
                </div>
            </div>
        )
    }

}
