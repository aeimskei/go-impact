import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class LocationMap extends Component {

    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      lat: '',
      lng: ''
    }

    onMarkerClick = (props, marker, e) => {
      this.setState({
        showingInfoWindow: true,
        activeMarker: marker,
        selectedPlace: props
      })
    }

    onMapClicked = (props, marker, e) => {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

    onInfoWindowClosed = () => {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

    render() {
    return (
      <Map google={this.props.google} onClick={this.onMapClicked} initialCenter={{lat: this.props.latitude, lng: this.props.longitude}} zoom={10}>

        <Marker onClick={this.onMarkerClick}
                name={this.props.name}
                position={{lat: this.props.latitude, lng: this.props.longitude}}
                />

        <InfoWindow onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({ apiKey: process.env.REACT_APP_GOOGLE_API_KEY})(LocationMap);