import React from 'react';

import timeFormatter from './../../utils/timeformatter';

const style = {

    container: {
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '100%'
    },

    barContainer: {
        background: '#0B486B',
        height: '1rem',
        width: '100%'
    },

    time: {
        color: '#FFF',
        fontFamily: 'OpenSans, sans-serif',
        padding: '0.5rem 1rem'
    },

    left: {
        float: 'left'
    },

    right: {
        float: 'right'
    }

};

export default class ScrubBar extends React.Component {

    constructor (params) {
        super(params);

        this.state = {
            position: 0,
            duration: params.duration
        }
    }

    render () {
        return (
            <div style={style.container}>

                <span style={Object.assign({}, style.time, style.left)}>{timeFormatter(this.state.position)}</span>
                <span style={Object.assign({}, style.time, style.right)}>{timeFormatter(this.state.duration)}</span>
                <div style={{clear: 'both'}} />

                <div style={style.barContainer}></div>
            </div>
        )
    }

}