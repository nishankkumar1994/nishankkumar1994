// export const YOUR_CLIENT_ID = '24589456290-2e95tupibmf7ck8026e3i5cvn842rk6s.apps.googleusercontent.com';
// export const YOUR_CLIENT_ID = '';
// export const YOUR_API_KEY = 'AIzaSyBtObdfmrXqX-QZa_h_EMhGJm-heTVqP0A';
export const YOUR_API_KEY = 'AIzaSyDgKX6Bscba8Df2r4IonVzrGYUCA45X8Wg';
// export const YOUR_SPREADSHEET_ID = '1BdGwKJeThZ7fZdRvT8s6ZXNdjIrhn-j6Rj7PxN6P2MU';
export const YOUR_SPREADSHEET_ID = '1jkRxiDmmlvcm3DMWG8M3T-z2Y5zetsoB1Nv5xbKgngw';
const colorSet = [
	'rgba(128, 0, 0, 0.2)',
	'rgba(128, 32, 0, 0.2)',
	'rgba(128, 64, 0, 0.2)',
	'rgba(128, 96, 0, 0.2)',
	'rgba(128, 128, 0, 0.2)',
	'rgba(96, 128, 0, 0.2)',
	'rgba(64, 128, 0, 0.2)',
	'rgba(32, 128, 0, 0.2)',
	'rgba(0, 128, 0, 0.2)',
	'rgba(0, 128, 32, 0.2)',
	'rgba(0, 128, 64, 0.2)',
	'rgba(0, 128, 96, 0.2)',
	'rgba(0, 128, 128, 0.2)',
	'rgba(0, 96, 128, 0.2)',
	'rgba(0, 64, 128, 0.2)',
	'rgba(0, 32, 128, 0.2)',
	'rgba(0, 0, 128, 0.2)',
	'rgba(32, 0, 128, 0.2)',
	'rgba(64, 0, 128, 0.2)',
	'rgba(96, 0, 128, 0.2)',
	'rgba(128, 0, 128, 0.2)',
	'rgba(128, 0, 96, 0.2)',
	'rgba(128, 0, 64, 0.2)',
	'rgba(128, 0, 32, 0.2)',
	'rgba(128, 0, 0, 0.2)'
];
export function randomColor() {
	return colorSet[Math.floor(Math.random() * Math.floor(25))];
}

export function randomColorWR() {
	return Math.floor(Math.random() * Math.floor(25));
}
