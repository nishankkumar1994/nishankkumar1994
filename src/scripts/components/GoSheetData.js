import React from 'react';
import { connectToSpreadsheet } from "react-google-sheet-connector"

const GoSheetData = (props) => {
    return (
        <div>
            {
                props.getSheet("HTML")
                  .map((row, i) =>
                    <div className="card-wrap" key={`kjhgf${i}`}>
                      <div className="card-que"><span>{i+1}</span>Que: {row[0]}</div>
                      <div className="card-ans">Ans: {row[1]}</div>
                    </div>
                  )
            }        
        </div>
    )
}

export default connectToSpreadsheet(GoSheetData);
