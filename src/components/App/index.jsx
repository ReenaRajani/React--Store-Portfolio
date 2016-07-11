import React from 'react';
import {render} from 'react-dom';

import StorePortfolioComponent  from '../StorePortfolioComponent';

export default React.createClass({
  
  render: function() {
    return (
      <div>
        <div className="menu-bar">
          <div className='title'>booodl. </div>
        <div className='menu'>LOGIN</div>
        </div>
        <StorePortfolioComponent />
      </div>
    );
  }
});


