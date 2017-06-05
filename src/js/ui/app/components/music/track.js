import React from 'react';

const containerStyle = { textAlign: 'center' };
const h1Style = { fontFamily: 'OpenSans, sans-serif', fontSize: '2rem', fontWeight: 'lighter', color: '#FFFFFF' };
const h2Style = Object.assign({}, h1Style, { color: 'rgba(255, 255, 255, 0.5)' });

export default class Track extends React.Component {

    render () {

        return (
            <div style={containerStyle}>
                <h1 style={h1Style}>{this.props.artist}</h1>
                <h2 style={h2Style}>{this.props.title}</h2>
            </div>
        )

    }

}