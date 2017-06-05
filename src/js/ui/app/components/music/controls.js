import React from 'react';

const containerStyle = { fontSize: '5rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
const playPauseStyle = { fontSize: '7.5rem' }

export default class Controls extends React.Component {

    render () {

        let playPauseIcon = this.props.status === 'playing' ? 'icon-pause' : 'icon-play';
        let playPauseClass = 'icon ' + playPauseIcon;

        return (
            <div style={containerStyle}>
                <i className="icon icon-backward-step" />
                <i style={playPauseStyle} className={playPauseClass} />
                <i className="icon icon-forward-step" />
            </div>
        )
    }

}