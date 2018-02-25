import React from 'react';
import GoSheetComponent from './GoSheetComponent';


class App extends React.Component {
	constructor(props) {
		super(props)
	}

	toggleTheme(theme) {
		const newTheme = theme;
		this.props.dispatchThemeChange(newTheme)
	}

	render() {
		return (
			<div id='main' className={this.props.theme}>
				


				<div className="card-main-wrap">
					<GoSheetComponent />
				</div>

				<div className="bottom-fixed">
					<button className="btn-c" onClick={()=>{this.toggleTheme('dark')}}>
					Sachin
					</button>
					<button className="btn-c" onClick={()=>{this.toggleTheme('light1')}}>
					Dhoni
					</button>
					<button className="btn-c" onClick={()=>{this.toggleTheme('light2')}}>
					Virat
					</button>
					<button className="btn-c" onClick={()=>{this.toggleTheme('light3')}}>
					Shikhar
					</button>
					<button className="btn-c" onClick={()=>{this.toggleTheme('light4')}}>
					Viru
					</button>
					<button className="btn-c" onClick={()=>{this.toggleTheme('light5')}}>
					Raina
					</button>
				</div>
			</div>
			)
	}
}

export default App
