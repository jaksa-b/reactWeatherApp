import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  render () {
    console.log("WeatherList: ",this.props.weather);
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temp(°С)</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map((data) => {
              const city = data.city.name;
              const { lon, lat } = data.city.coord;
              const temps = data.list.map(data => data.main.temp);
              const pressures = data.list.map(data => data.main.pressure);
              const humidities = data.list.map(data => data.main.humidity);
              return (
                <tr key={city}>
                  <td>
                    <GoogleMap lon={lon} lat={lat}/>
                  </td>
                  <td>
                    <Chart data={temps} color="blue" units="°С"/>
                  </td>
                  <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                  </td>
                  <td>
                    <Chart data={humidities} color="red" units="%"/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({ weather }) { // {weather} same as state.weather
  return { weather }; // {weather} same as { weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
