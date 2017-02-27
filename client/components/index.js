import React from 'react'
import _ from 'lodash'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

// Components
import DistanceMatrix from './DistanceMatrix'

class Index extends React.Component {

	constructor(props) {
		super(props)
    this.state = {
      markers: [],
			directions: null,
			distanceMatrix: null
    }
	}

  onMarkerRightClick(index){
    console.log('rightclick', index)
  }

	handleMapLoad(map){
		this._mapComponent = map
	}

	handleDistance(){
		const DirectionsService = new google.maps.DirectionsService()
		const DistanceMatrixService = new google.maps.DistanceMatrixService()

		DirectionsService.route({
      origin: this.state.markers[0].position,
      destination: this.state.markers[1].position,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({ directions: result })
      } else {
        console.error(`error fetching directions ${result}`)
      }
    })

		DistanceMatrixService.getDistanceMatrix({
			origins: [this.state.markers[0].position],
			destinations: [this.state.markers[1].position],
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
		}, (result, status) => {
			if (status == 'OK') {
				console.log(result)
				this.setState({ distanceMatrix: result })
			} else {
				console.error(`error fetching distance matrix ${result}`)
			}
		})
	}

	handleMapClick(event){
		let nextMarker = this.state.markers

		if (nextMarker.length >= 2) nextMarker = nextMarker.slice(1, 3)

		nextMarker.push({
			position: event.latLng,
			defaultAnimation: 2,
			key: new Date()
		})

		this.setState({
      markers: nextMarker,
    })

		this.state.markers.length == 2 && this.handleDistance()
	}

	handleMarkerRightClick(idx){
		let markers = this.state.markers
		markers.splice(idx, 1)
		this.setState({ markers })
	}

	render() {
		return (
			<div>
				{this.state.distanceMatrix && <DistanceMatrix distanceMatrix={this.state.distanceMatrix} />}

        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `80vh` }} />
          }
          mapElement={
            <div style={{ height: `80vh` }} />
          }
          onMapLoad={(e) => this.handleMapLoad(e)}
          onMapClick={(idx) => this.handleMapClick(idx)}
          markers={this.state.markers}
					directions={this.state.directions}
          onMarkerRightClick={(e) => this.handleMarkerRightClick(e)}
        />
			</div>
		)
	}
}

export default Index

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={17}
    defaultCenter={{ lat: -6.21462, lng: 106.84513 }}
    onClick={props.onMapClick}
  >
    { props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}

		{ props.directions &&
			<DirectionsRenderer directions={props.directions} />
		}
  </GoogleMap>
))
