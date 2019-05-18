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
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <div className="home">
                <FormatLayout>
                    <h1>To Do List</h1>
                    <ListItem
                        itemNumber={1}
                        message="This is my todo"
                    />
                </FormatLayout>
            </div>
        );
    }
}

export default Home