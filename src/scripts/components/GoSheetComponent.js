import React from 'react';
import ReactGoogleSheetConnector from "react-google-sheet-connector";
import { YOUR_CLIENT_ID, YOUR_API_KEY, YOUR_SPREADSHEET_ID } from '../Constant/index';
import GoSheetData from './GoSheetData';

class GoSheetComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ReactGoogleSheetConnector
          apiKey={YOUR_API_KEY}
          spreadsheetId={YOUR_SPREADSHEET_ID}
          spinner={ <div className="loading-spinner"/> } >
            <div>
              <GoSheetData />
            </div>
        </ReactGoogleSheetConnector>
      </div>
    )
  }
}

export default GoSheetComponent;
