import React from "react";
import { Link, useLocation } from "react-router-dom";

const EventSchedule = () => {
  const location = useLocation();
  const data = location.state;
  const schedules = data.event.schedules;

  return (
    <div>
      <table class="table caption-top rounded mt-2 bg-white">
        <caption className="text-white fs-4">Schedules</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index}>
              <th scope="row">{schedule.id}</th>
              <td>{schedule.date}</td>
              <td>{schedule.start_time}</td>
              <td>{schedule.end_time}</td>
              <td>{schedule.activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        className="btn btn-success fw-bold"
        to={`/events/${data.event.id}/schedules/add`}
        state={{ event: data.event }}
      >
        <i class="bi bi-plus-circle"></i> Add Schedule
      </Link>
    </div>
  );
};

export default EventSchedule;
