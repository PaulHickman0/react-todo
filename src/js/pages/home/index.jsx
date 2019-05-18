import React, { Component } from 'react';
import './home.scss';

import FormatLayout from 'components/format-layout';
import ListItem from 'components/list-item';

/**
 * Home page component
 * 
 * @class Home
 * @extends { Component }
 */
export class Home extends Component {

    // Prop types
    static propTypes = {

    };

    // Default props
    static defaultProps = {
    };

    constructor(props) {
        super(props);
        this.state = {
            listItems: [{
                messsage: ''
            }],
            newItemText: ''
        }

        this.onInputValueChange = this.onInputValueChange.bind(this);
        this.onInputKeyUp = this.onInputKeyUp.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }


    /**
     * Used to set the value of the text input
     * @param  {Event} e    Event fired from onChange call
     */
    onInputValueChange(e) {
        this.setState({
            newItemText: e.target.value
        })
    }

    /**
     * Called every time a key is pressed whjile the input is focussed
     * Used to detect an enter key press to then add the new todo
     * @param  {Number} options.keyCode    - KeyCode of the key pressed
     */
    onInputKeyUp({ keyCode }) {
        if (keyCode === 13) { //Enter
            this.addToList(this.state.newItemText);
        }
    }

    /**
     * Adds a new item to the list of todo's
     * @param {String]} itemText   - Message for the new todo item
     */
    addToList(itemText) {

        const { listItems } = this.state;

        this.setState({
            newItemText: '',
            listItems: [
                ...listItems,
                {
                    message: itemText
                }
            ]
        })
    }

    render() {

        const { listItems, newItemText } = this.state;

        return (
            <div className="home">
                <FormatLayout>
                    <h1>To Do List</h1>
                    <div className="c-add-to-list">
                        <input
                            className="o-text-input"
                            value={newItemText}
                            onChange={this.onInputValueChange}
                            onKeyUp={this.onInputKeyUp}
                        />
                        <button
                            type="submit"
                            className="o-button"
                            onClick={() => this.addToList(newItemText)}
                        >
                            Add To List
                        </button>
                    </div>
                    {listItems.map((item, index) => (
                        <ListItem
                            key={`List Item ${index}`}
                            itemNumber={index + 1}
                            {...item}
                        />
                    ))}
                </FormatLayout>
            </div>
        );
    }
}

export default Home