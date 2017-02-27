import React from 'react'

class Index extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>Powered by Google Maps.</p>
        { this.props.children }
			</div>
		);
	}
}

export default Index
