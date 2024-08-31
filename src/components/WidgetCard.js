
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const WidgetCard = ({ title, text, value, onRemove }) => {
  return (
    <div className="col-sm-4 mb-4">
      <div className="card bg-white rounded shadow-lg">
        <div className="card-body">
          <button
            onClick={onRemove}
            className="btn btn-danger btn-sm float-end"
          >
            &times;
          </button>
          <h5 className="card-title" style={{marginBottom : "30px"}} >{title}</h5>
         <div className=' ' style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
         <div style={{ width: '100px', margin: '0 10px 10px 10px ' }}>
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                pathColor: 'blue',
                textColor: '',
                
              })}
              
            />
          </div>
          <p className="card-text mt-3">{text}</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;

