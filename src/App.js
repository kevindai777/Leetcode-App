import React from 'react';
import Question from './Question'
import customData from './customData';

class App extends React.Component {

  createQuestions = () => {
    return customData.stat_status_pairs.map(object => 
      <Question
        title={object.stat.question__title}
        frequency={object.frequency}
      />
    )
  }

  render() {
    return (
      <div>
        {console.log(customData)}
        {this.createQuestions()}
      </div>
    )
  }
}


export default App;
