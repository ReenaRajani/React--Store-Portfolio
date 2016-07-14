import React from 'react';

var StoreBrandWidget = React.createClass({
  propTypes: {
    storeBrandData: React.PropTypes.array
  },

  getInitialState: function() {
      return {
          isExpanded: false 
      };
  },

  shouldComponentUpdate: function(nextProps, nextState) {
      return (nextState.isExpanded != this.state.isExpanded); 
  },
  
  render: function(){
    return (
      <div className = 'store-brands-container'>
        <div className= 'title'> Brands </div>
        {this.renderBrands()}
      </div>
      );
  }, 

  renderBrands: function(){
    if(!this.state.isExpanded){
     return(this.renderCollapsed());
    }else{
       return(this.renderExpanded());
    }
  },

  renderExpanded: function(){
    var brands = this.props.storeBrandData;
    this.groupBrands();
    return(
      <div className= 'brands-box'>
      {
        brands.map(function(brand){
          return (this.renderBrand(brand))
        }.bind(this))
      }
      </div>
    );
  },

  renderCollapsed: function(){
   var brands = this.props.storeBrandData;
   if(brands.length < 6){
      return(
        
        <div className= 'brands-box'>
        {
          brands.map(function(brand){
            if(index)
            return (this.renderBrand(brand))
          }.bind(this))
        }
        </div>
        );
    }else {
      return(
        <div className= 'brands-box'>
          {
            brands.map(function(brand, index){
              if(index < 6){
                return(this.renderBrand(brand))
              }
            }.bind(this))
          }
          <div className='more' onClick={this.renderMore}> + More </div> 
        </div>
        );
    }
  },

  renderBrand: function(brand){
    return(
      <div className='brand-box'>
        <div className='brand-name' key={brand.id}> {brand.attributes.name}
        </div>
      </div>
      );
  },

  renderMore: function(){
    this.setState(
      { isExpanded: true }
      );  
  }
});

export default StoreBrandWidget;