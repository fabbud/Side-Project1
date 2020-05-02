import React from 'react';
import './UserCard.css';

function UserCard(props) {
  console.log(props);

  return (
    <div className="card-div">
      <h4>{props.name} </h4>
      <div className="contact-info">
        <p>
          username: <span>{props.username}</span>
        </p>
        <p>
          e-mail: <span>{props.email}</span>
        </p>
        <p>
          address:{' '}
          <span>
            {props.address.street}, {props.address.suite}
          </span>
        </p>
        <p>
          city:{' '}
          <span>
            {props.address.city} - {props.address.zipcode}
          </span>
        </p>
        <p>
          geo: Lat{' '}
          <span>
            {props.address.geo.lat} | Lng {props.address.geo.lng}
          </span>
        </p>
        <p>
          phone: <span>{props.phone}</span>
        </p>
        <p>
          website: <span>{props.website}</span>
        </p>
      </div>
      <div className="company-info">
        <p className="company-info-title">-- Company Information -- </p>
        <p>
          name: <span>{props.company.name}</span>{' '}
        </p>
        <p>
          catch phrase: <span>{props.company.catchPhrase}</span>
        </p>
        <p>
          bs: <span>{props.company.bs}</span>
        </p>
      </div>
      <div className="button-div">
        <button
          className="delete-button"
          onClick={() => props.deleteUser(props.id)}
        >
          Delete user
        </button>
      </div>
    </div>
  );
}

export default UserCard;
