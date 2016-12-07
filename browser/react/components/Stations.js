import React from 'react';
import {Link} from 'react-router';

export default function (props) {
  const stations = props.stations;
  const stationArr = Object.keys(stations);

  return <div>
        <h3>Stations</h3>
        <div className="list-group">
        { stationArr.map(function(station) {
              return <div className="list-group-item" key={station}>
                <Link to={`/stations/${station}`}>{station}</Link>
              </div>
            })
        }
        </div>
      </div>
    }