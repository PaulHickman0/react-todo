import './styles.scss';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {
    // Prop types
    static propTypes = {
        message: PropTypes.string,
        itemNumber: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
        onClick: PropTypes.func,
    };

    // Default props
    static defaultProps = {
        message: '',
        itemNumber: '',
        onClick: () => null
    };

    constructor(props) {
        super(props);
    }

    render() {

        const { itemNumber, message, onClick, status } = this.props;

        return (
            <div
                className={`c-list-item ${status === 'done' ? 'is-done' : ''}`}
                onClick={onClick}
            >
                <h4>{itemNumber ? `${itemNumber}. ` : ''}{message}</h4>
            </div>
        );
    }
}