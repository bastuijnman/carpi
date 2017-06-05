import React from 'react';

const containerStyle = { fontSize: '5rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }
const playPauseStyle = { fontSize: '10rem' }

export default class Controls extends React.Component {

    render () {
        return (
            <div style={containerStyle}>
                <i className="icon icon-backward-step" />
                <i style={playPauseStyle} className="icon icon-pause" />
                <i className="icon icon-forward-step" />
            </div>
        )
    }

}