import React from 'react';
import SonDirect from './SonDirect';

export default props => {
  return (
    <div>
      <SonDirect name="Junior" age={20} nerd={true} />
      <SonDirect name="Gabriel" age={17} nerd={false} />
    </div>
  )
}