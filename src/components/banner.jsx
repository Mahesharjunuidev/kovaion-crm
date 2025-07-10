import React from 'react';
import AreaChartComponent from './chart';
import BarChartComponent from './barchart';
export default function Banner() {
 return (
    <div className="container">
      <div className="row mt-4">
        <div className='col-md-6'>
          <h1>Chart</h1>
          <AreaChartComponent />
        </div>
            <div className='col-md-6'>
          <h1>barchart</h1>
          <BarChartComponent />
        </div>
        
      </div>
    </div>
  );
}
