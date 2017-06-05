import React from 'react';

import socket from './../../utils/socket';

const containerStyle = { fontSize: '5rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
const playPauseStyle = { fontSize: '7.5rem' }

export default class Controls extends React.Component {

    render () {

        let playPauseIcon = this.props.status === 'playing' ? 'icon-pause' : 'icon-play';
        let playPauseClass = 'icon ' + playPauseIcon;

        return (
            <div style={containerStyle}>
                <i onClick={this.onPreviousClick.bind(this)} className="icon icon-backward-step" />
                <i onClick={this.onPlayPauseClick.bind(this)} style={playPauseStyle} className={playPauseClass} />
                <i onClick={this.onNextClick.bind(this)} className="icon icon-forward-step" />
            </div>
        )
    }

    onPlayPauseClick () {
        socket.emit('broadcast', {
            eventName: 'mediaEvent',
            payload: {
                type: 'playPause',
                status: this.props.status
            }
        });
    }

    onPreviousClick () {
        socket.emit('broadcast', {
            eventName: 'mediaEvent',
            payload: {
                type: 'goToPrevious'
            }
        })
    }

    onNextClick () {
        socket.emit('broadcast', {
            eventName: 'mediaEvent',
            payload: {
                type: 'goToNext'
            }
        })
    }

}