import React from 'react';
import { connectToSpreadsheet } from "react-google-sheet-connector"

const GoSheetData = (props) => {
    return (
        <div>
            {
                props.tabName && props.getSheet(props.tabName)
                  .map((row, i) =>
                    <div className="card-wrap" key={`kjhgf${i}`}>
                      <div className="card-que"><span>{i+1}</span>Que: {row[0]}</div>
                      <div className="card-ans">Ans: {row[1]}</div>
                      <div className="card-author clearfix">
                        <span className="card-label">{row[2]}</span>
                        <div className="card-author-wrap"><span className="card-author-label">Author:</span> {row[3]}</div>
                      </div>
                    </div>
                )
            }        
        </div>
    )
}

export default connectToSpreadsheet(GoSheetData);
