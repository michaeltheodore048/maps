import React from 'react'

class DistanceMatrix extends React.Component {

  handleView(){
    let origin = this.props.distanceMatrix.originAddresses[0]
    let destination = this.props.distanceMatrix.destinationAddresses[0]
    let result = this.props.distanceMatrix.rows[0].elements[0]

    return(
      <p>{`Distance from ${origin} to ${destination} is ${result.distance.text}, estimated time ${result.duration.text}.`}</p>
    )
  }

  render() {
    return(
      <span>{this.handleView()}</span>
    )
  }
}

export default DistanceMatrix
