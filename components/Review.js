import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {
  return (
    <div className="pb-5 flow-root">
      <div className="float-left">{review.fields.Description}</div>
      <div className="float-right flex pr-5">
        <ReactStars
          count={5}
          size={17}
          edit={false}
          value={review.fields.Rating}
        />
        <div className='pl-2'>{review.fields.Rating}</div>
      </div>
    </div>
  );
};

export default Review;
