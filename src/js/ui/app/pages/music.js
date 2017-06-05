import React from 'react';

import Header from './../components/header';
import ScrubBar from './../components/music/scrubbar';

export default class MusicPage extends React.Component {

    constructor (params) {
        super(params);

        this.state = {
            track: {
                Title: '',
                Artist: '',
                Duration: 0
            }
        }
    }

    componentDidMount () {
        this.socket = io();

        this.socket.on('updateTrack', (track) => {

            // Convert from miliseconds to seconds.
            track.Duration = Math.round(track.Duration / 1000);

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
                <h1>{this.state.track.Artist}</h1>
                <h2>{this.state.track.Title}</h2>
                <ScrubBar duration={this.state.track.Duration} />
            </div>
        );

    }

}