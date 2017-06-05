import React from 'react';

import Header from './../components/header';
import Track from './../components/music/track';
import ScrubBar from './../components/music/scrubbar';

export default class MusicPage extends React.Component {

    constructor (params) {
        super(params);

        this.state = {
            track: {
                Title: 'Waiting on the world to change',
                Artist: 'John Mayer',
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
                <Track artist={this.state.track.Artist} title={this.state.track.Title} />
                <ScrubBar duration={this.state.track.Duration} />
            </div>
        );

    }

}