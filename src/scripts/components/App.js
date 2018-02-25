import React from 'react';
import GoSheetComponent from './GoSheetComponent';


class App extends React.Component {
	constructor(props) {
		super(props)
	}

	toggleTheme(theme) {
		const newTheme = theme;
		localStorage ? localStorage.setItem('THEME_COLOR', theme) : '';
		this.props.dispatchThemeChange(newTheme)
	}

	render() {
		const theme_mmr = localStorage && localStorage.getItem('THEME_COLOR') ? localStorage.getItem('THEME_COLOR'): this.props.theme;
		return (
			<div className={theme_mmr}>
				<div className="container">
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
			</div>
			)
	}
}

export default App
