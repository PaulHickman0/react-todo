import './styles.scss';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FormatLayout extends PureComponent {
    // Prop types
    static propTypes = {
        className: PropTypes.string
    };

    // Default props
    static defaultProps = {
        className: '',
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={`c-format-layout ${this.props.className}`}>
                {this.props.children}
            </div>
        );
    }
}