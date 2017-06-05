import React from 'react';

import Header from './../components/header';
import Track from './../components/music/track';
import Controls from './../components/music/controls';
import ScrubBar from './../components/music/scrubbar';

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',

    /*
     * Cheating a bit with the height, see if there is a proper fix for this.
     * TODO: find proper fix.
     */
    height: '110%',
    flexDirection: 'column'
};

export default class MusicPage extends React.Component {

    constructor (params) {
        super(params);

        this.state = {
            track: {
                Title: 'Waiting on the world to change',
                Artist: 'John Mayer'
            },
            duration: 0,
            position: 0
        }
    }

    componentDidMount () {
        this.socket = io();

        this.socket.on('mediaPlayerUpdate', (payload) => {

            let track = payload.track || {};
            let position = payload.position || 0;
            let duration = payload.track.duration || 0;
            let status = payload.status || 'stopped';

            // Convert from miliseconds to seconds.
            duration = Math.round(duration / 1000);
            position = Math.round(position / 1000);

            this.setState({
                track,
                position,
                duration,
                status
            });
        });
    }

    componentWillUnmount () {
        this.socket.close();
    }

    render () {
        return (
            <div>
                <Header text="Music" />
                <div style={contentStyle}>
                    <Track artist={this.state.track.Artist} title={this.state.track.Title} />
                    <Controls status={this.state.status} />
                </div>
                <ScrubBar duration={this.state.duration} position={this.state.position} />
            </div>
        );

    }

}