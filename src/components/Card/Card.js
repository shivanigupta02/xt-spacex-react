import React from "react";
import "./Card.scss";

export default function Card(props) {
  const {
    mission_name,
    flight_number,
    launch_year,
    launch_success = "", // make empty string if not available
    launch_landing,
    mission_id = [],
    details,
    links: { mission_patch_small },
  } = props;

  return (
    <div className="xt-card">
      <img src={mission_patch_small} alt={details} />
      <h3>
        {mission_name} #{flight_number}{" "}
      </h3>
      <ul>
        <li>
          <strong>Mission Ids:</strong> {mission_id.join(", ")}
        </li>
        <li>
          <strong>Launch Year:</strong> {launch_year}
        </li>
        <li>
          <strong>Successful Launch:</strong>{" "}
          {launch_success ? launch_success.toString() : ""}
        </li>
        <li>
          <strong>Successful Landing:</strong> {launch_landing}
        </li>
      </ul>
    </div>
  );
}
