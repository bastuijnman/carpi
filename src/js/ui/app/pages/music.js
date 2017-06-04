import React from 'react';

import Header from './../components/header';
import ScrubBar from './../components/music/scrubbar';

export default class MusicPage extends React.Component {

    componentDidMount () {
        this.socket = io();
    }

    componentWillUnmount () {
        this.socket.close();
    }

    render () {

        return (
            <div>
                <Header text="Music" />
                <ScrubBar duration={308} />
            </div>
        );

    }

}