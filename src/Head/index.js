import React from 'react';

const Head = ({selectedFilter}) => {
  const filterLength = Object.keys(selectedFilter).length;
  return(
    <React.Fragment>
      {filterLength > 0 && (
        <div>
          Selected Filter
        </div>
      )}
    </React.Fragment>
  )
}

export default Head;
