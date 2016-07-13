var React = require('react');
var Category = require('../../constants/category.js');

var moment = require('moment');
var FaClock = require('react-icons/lib/fa/clock-o');
var FaLocationArrow = require('react-icons/lib/fa/location-arrow');
var FaMapMarker = require('react-icons/lib/fa/map-marker');
var FaPhone = require('react-icons/lib/fa/phone');
var FaGlobe = require('react-icons/lib/fa/globe');

var StoreProfileWidget = React.createClass({
  propTypes: {
    storeData: React.PropTypes.object
  },

  render: function(){
    var storeAttributes = this.props.storeData['attributes'];
    
    return (
      <div className="store-information-container">
        <div className ='store-image'>
        <img src= {storeAttributes['photos'][0]} className="img-responsive" />
        </div>
         <div className= "store-name"> {storeAttributes['name']} </div>
         <div className= "store-suburb"> {storeAttributes['city']} </div>
         <div className= "range-category"> 
            <span className='range'>{Category[storeAttributes['range']]} 
            </span>
            |
            <span className='category'>{storeAttributes['topLevelCategory']}
            </span> 
         </div>
         <div className="timing-distance">
          {this.getStoreTiming()}
          {this.getLocation()}
         </div>
          
          {this.getStoreAddress(storeAttributes)}
          <div className = 'contact-button'> 
            <FaPhone color={'white'}/>Call {storeAttributes['phone']}
          </div>
          <div className = 'contact-button'>
            <a href={storeAttributes.url}> <FaGlobe color={'white'}/> Visit store Website </a>
          </div>
      </div>
      );
  },
  getStoreTiming: function(){
    
    var today = moment().format('ddd').toLowerCase();
    var storeTimings = this.props.storeData['attributes']['openingHours'][today];
    return(
      <div className="opening-hours"> 
      <FaClock color={'white'}/> Open today {storeTimings['open']}am - {storeTimings['close']}pm
       </div>
       );
  },

  getLocation: function(){
    return(
      <div className = 'store-location'>
      <FaLocationArrow color={'white'}/> 6 km away </div>
      );
  },

  getStoreAddress:function(storeAttributes){
  
    return(
    <div className='address-info'>
      <p>
        <FaMapMarker color={'white'}/> {storeAttributes['address']} 
      </p>
      <p> 
        {storeAttributes['city']}, {storeAttributes['postcode']}, {storeAttributes['state']}
      </p>
    </div>
      );
  }

});

export default StoreProfileWidget;