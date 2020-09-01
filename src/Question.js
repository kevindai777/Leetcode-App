import React from 'react';

class Question extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}
                <br></br>
                {this.props.frequency}
            </div>
        )
    }
}

export default Question