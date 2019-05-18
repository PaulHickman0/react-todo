import './styles.scss';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {
    // Prop types
    static propTypes = {
        message: PropTypes.string,
        itemNumber: PropTypes.number,
    };

    // Default props
    static defaultProps = {
        message: '',
        itemNumber: '',
    };

    constructor(props) {
        super(props);
    }

    render() {

        const { itemNumber, message } = this.props;

        return (
            <div className="c-list-item">
                <h4>{itemNumber}. {message}</h4>
            </div>
        );
    }
}