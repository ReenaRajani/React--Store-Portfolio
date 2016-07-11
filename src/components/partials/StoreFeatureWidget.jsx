var React = require('react');
var FaWheelchair = require('react-icons/lib/fa/wheelchair');
var FaTrain = require('react-icons/lib/fa/train');

var FaProductHunt = require('react-icons/lib/fa/product-hunt')
var Features = require('../../constants/features.js');

var StoreFeatureWidget = React.createClass({
  propTypes: {
    storeAttributesData: React.PropTypes.object
  },

  render: function(){
    return (
      <div className="store-feature-container">
        {this.renderTranportIconBox()}
        {this.renderParkingIconBox()}
        {this.renderAccessibilityIconBox()}
      </div>
      );
  },

  renderTranportIconBox: function(){
    if (this.props.storeAttributesData['transport'] === true){
      return(
        <div className ='icon-box'>
          <div className ='icon'> <FaTrain width={'1.5em'} height={'1.5em'}/> </div>
          <div className = 'icon-Name'> {Features.transport} </div>
        </div>
      );
    }
  },
  renderParkingIconBox: function(){
    if (this.props.storeAttributesData['parking'] === true){
      return(
        <div className ='icon-box'>
          <div className ='icon'> <FaProductHunt width={'1.5em'} height={'1.5em'}/> </div>
          <div className = 'icon-Name'> {Features.parking} </div>
        </div>
      );
    }
    
  },
  renderAccessibilityIconBox: function(){
    if(this.props.storeAttributesData['handicapAccess'] ===  true){
      return(
        <div className ='icon-box'>
          <div className='icon'><FaWheelchair width={'1.5em'} height={'1.5em'}/> </div>
          <div className='icon-Name'> {Features.handicapAccess} </div>
        </div>
      );
    }
  }
});

export default StoreFeatureWidget;