import React from 'react';
import '../styles/Reviews.css';

const reviewsData = [
  { name: "John Doe", review: "Amazing experience!", image: "/assets/user1.png" },
  { name: "Jane Smith", review: "Top-notch support!", image: "/assets/user2.png" }
];

function Reviews() {
  return (
    <div className="reviews">
      <h2>What Our Users Say</h2>
      <div className="review-list">
        {reviewsData.map((review, index) => (
          <div className="review-item" key={index}>
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
