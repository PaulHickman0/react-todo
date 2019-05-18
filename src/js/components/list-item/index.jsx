import './styles.scss';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends PureComponent {
    // Prop types
    static propTypes = {
        message: PropTypes.string,
        itemNumber: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
        onClick: PropTypes.func,
        status: PropTypes.oneOf('done', 'todo'),
        onRemove: PropTypes.func,
    };

    // Default props
    static defaultProps = {
        message: '',
        itemNumber: '',
        onClick: () => null,
        status: 'todo',
        onRemove: () => null,
    };

    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
    }

    /**
     * Called when remove 'x' is clicked
     * Prevents event bubbling and calls onRemove prop
     * @param  {Event} e    - Event object sent from onClick
     */
    onRemove(e = {}) {

        if (e.stopPropagation) {
            e.stopPropagation();
        }
        
        this.props.onRemove();
    }

    render() {

        const { itemNumber, message, onClick, status } = this.props;

        return (
            <div
                className={`c-list-item ${status === 'done' ? 'is-done' : ''}`}
                onClick={onClick}
            >
                <h4>{itemNumber ? `${itemNumber}. ` : ''}{message}</h4>
                <div
                    className="c-list-item__remove"
                    onClick={this.onRemove}
                >
                    X
                </div>
            </div>
        );
    }
}