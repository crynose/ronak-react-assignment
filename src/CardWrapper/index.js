import React from 'react';
import './CardWrapper.css';

const CardWrapper = ({data}) => {
  return(
    <div className="col-sm-12 row cardWrapper">
      {data && data.map(item => renderCard(item))}
    </div>
  )
};

const renderCard = item => (
  <div className='col-sm-4 card'>
    <img
      src={item.image}
      alt={item.name}
      className='img'
    />
    <div>{item.name}</div>
    <div>
        <span>{item.id}</span>
        <span>{item.created}</span>
    </div>
  </div>

)

export default CardWrapper;
