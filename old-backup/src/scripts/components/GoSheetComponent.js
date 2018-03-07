import React from 'react';
import ReactGoogleSheetConnector from "react-google-sheet-connector";
import { YOUR_CLIENT_ID, YOUR_API_KEY, YOUR_SPREADSHEET_ID } from '../Constant/index';
import GoSheetData from './GoSheetData';
import { Tabs, Tab, TabContainer, TabContent, TabPane } from 'react-bootstrap';

class GoSheetComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  handle (e) {
    e.preventDefault()
    $(this).tab('show')
  }
  render() {
    return (
      <div>
       
        <ReactGoogleSheetConnector
          apiKey={YOUR_API_KEY}
          spreadsheetId={YOUR_SPREADSHEET_ID}
          spinner={ <div className="loading-spinner"><img src="public/img/loader.svg" /></div> } >
            <div className="nk-override-tab">
              <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="HTML">
                  <GoSheetData tabName="HTML" />
                </Tab>
                <Tab eventKey={2} title="CSS">
                  <GoSheetData tabName="CSS" />
                </Tab>
                <Tab eventKey={3} title="JS">
                  <GoSheetData tabName="JS" />
                </Tab>
                <Tab eventKey={4} title="Jquery">
                  <GoSheetData tabName="Jquery" />
                </Tab>
                <Tab eventKey={5} title="Coding">
                  <GoSheetData tabName="Coding" />
                </Tab>
              </Tabs>

            </div>
        </ReactGoogleSheetConnector>
      </div>
    )
  }
}

export default GoSheetComponent;
