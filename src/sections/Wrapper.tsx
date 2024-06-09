import React from 'react'

const Wrapper = (Components : React.FC) => () => {
  return (
    <div className='content'>
      <Components />
    </div>
  );
}

export default Wrapper