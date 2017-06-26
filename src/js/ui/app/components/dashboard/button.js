import React from 'react';

const buttonStyle = {
    width: '12rem',
    height: '12rem',
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '0 1.25rem',
    display: 'inline-block',
    borderRadius: '0.4rem',
    position: 'relative',
    textAlign: 'center'
};

const iconStyle = {
    fontSize: '5rem',
    lineHeight: '12rem',
    color: 'rgba(255, 255, 255, 0.6)'
}

const titleStyle = {
    fontSize: '1.5rem',
    color: '#FFFFFF',
    position: 'absolute',
    bottom: '10px',
    left: '0',
    width: '12rem',
    textAlign: 'center',
    fontFamily: 'OpenSans, sans-serif'
}

export default class DashboardButton extends React.Component {

    render () {
        let iconClass = "icon icon-" + this.props.icon;

        return (
            <div style={buttonStyle}>
                <i className={iconClass} style={iconStyle} />
                <span style={titleStyle}>{this.props.text}</span>
            </div>
        );

    }

}
