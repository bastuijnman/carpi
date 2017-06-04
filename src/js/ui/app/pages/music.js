import React from 'react';

import Header from './../components/header';
import ScrubBar from './../components/music/scrubbar';

export default class MusicPage extends React.Component {

    constructor (params) {
        super(params);

        this.state = {
            track: {
                Title: ''
            }
        }
    }

    componentDidMount () {
        this.socket = io();

        this.socket.on('updateTrack', (track) => {
            this.setState({
                track
            });
        })
    }

    componentWillUnmount () {
        this.socket.close();
    }

    render () {

        return (
            <div>
                <Header text="Music" />
                <h1>{this.state.track.Title}</h1>
                <ScrubBar duration={308} />
            </div>
        );

    }

}