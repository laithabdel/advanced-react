import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {
  timeDisplay = timestamp =>
    timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  shouldComponentUpdate(nextProps) {
    const currentTimeDisplay = this.timeDisplay(this.props.timestamp);
    const nextTimeDisplay = this.timeDisplay(nextProps.timestamp);
    return currentTimeDisplay !== nextTimeDisplay;
  }

  render(){
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
      </div>
    );
  }
}

function extraProps(store){
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
