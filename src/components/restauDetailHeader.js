import React from "react";
import { Link } from "react-router-dom";

const RestauDetailHeader = (props)=> {
  const {name, type, address, phone, website} = props.restaurant
    return (
      <div className="header">
        <div className="summary">
          <h2>{name}</h2>
          <ul className="categories restau">
            {type.map((t, i) => {
              return (
                <li className={t.name} key={i}>
                  {t.name}
                </li>
              );
            })}
          </ul>
          <i className="fas fa-map-marker-alt"></i>
          <span className="contactInfo">{address}</span>
          <br />
          <i className="fas fa-phone"></i>
          <span className="contactInfo">{phone}</span>
          <span className="contactInfo">•</span>
          <i className="fas fa-mouse-pointer"></i>
          <a href={website}>
            <span className="contactInfo">Website</span>
          </a>
        </div>
        <Link to="/">
          <span className="back">
            Back to the list <i className="fas fa-chevron-right"></i>
          </span>
        </Link>
      </div>
    );

}

export default RestauDetailHeader;
