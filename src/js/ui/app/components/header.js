import React from 'react';

const style = {

    container: {
        background: 'rgba(59,134,134,0.30)',
        boxShadow: '0 1px 0 0 rgba(0,0,0,0.05), 0 5px 4px 0 rgba(59,134,134,0.25)'
    },

    text: {
        fontFamily: 'open_sansregular, sans-serif',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '1rem 0',
        fontWeight: 'normal'
    }

}

export default class Header extends React.Component {

    render () {
        return (
            <div style={style.container}>
                <h1 style={style.text}>{this.props.text}</h1>
            </div>
        );
    }

}