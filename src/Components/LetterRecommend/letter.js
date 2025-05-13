import React from 'react';
import './letter.scss';

const Letter = ({ image, name, title, company, linkedIn, content }) => {
  return (
    <div className="letter-card">
      <div className="letter-header">
        <img className="profile-img" src={image} alt={`${name}'s profile`} />
        <div className="recommender-info">
          <h2>{name}</h2>
          <p>{title} at {company}</p>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">View LinkedIn</a>
        </div>
      </div>
      <div className="letter-body">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Letter;
