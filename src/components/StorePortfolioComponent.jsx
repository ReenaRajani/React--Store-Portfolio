import React from 'react';

import StoreFeatureWidget from './partials/StoreFeatureWidget';
import StoreBrandWidget from './partials/StoreBrandWidget';
import StoreCategoryWidget from './partials/StoreCategoryWidget';

import StoreProfileWidget  from './partials/StoreProfileWidget';

var brandsData = require("json!../JsonData/brands.json");
var categoriesData = require("json!../JsonData/categories.json");
var storeData = require("json!../JsonData/store.json");

var StorePortfolio = React.createClass({
  
  render: function(){
    return (
      <div className ="store-profile-container">
        <div className="store-image-container" />
          <StoreProfileWidget storeData={storeData.data}/>
        <StoreFeatureWidget storeAttributesData={storeData.data.attributes}/>
        <StoreBrandWidget storeBrandData={brandsData.data}/>
        <StoreCategoryWidget storeCategoryData={categoriesData.data}/>
      </div>

      );
  }
});

export default StorePortfolio;