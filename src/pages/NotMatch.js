import React from 'react';

const NotMatch = () => {
  const errorStyle = {
    fontSize: '30px',
  };
  return (
    <>
      <div>
        <h2 style={errorStyle}>No match for this page</h2>
      </div>
    </>
  );
};
export default NotMatch;
