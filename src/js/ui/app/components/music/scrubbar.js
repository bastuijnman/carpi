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
        height: '0.5rem',
        width: '100%'
    },

    barFill: {
        background: '#3B8686',
        height: '0.5rem',
        width: '0%'
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
    },

    clear: {
        clear: 'both'
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
        let progress = this.state.position / (this.state.duration / 100) + '%';

        return (
            <div style={style.container}>

                <span style={Object.assign({}, style.time, style.left)}>{timeFormatter(this.state.position)}</span>
                <span style={Object.assign({}, style.time, style.right)}>{timeFormatter(this.state.duration)}</span>
                <div style={style.clear} />

                <div style={style.barContainer}>
                    <div style={Object.assign({}, style.barFill, {width: progress})} />
                </div>
            </div>
        )
    }

}