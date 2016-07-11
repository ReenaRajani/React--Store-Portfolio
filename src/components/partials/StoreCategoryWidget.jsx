import React from 'react';

var StoreCategoryWidget = React.createClass({
  propTypes: {
    storeCategoryData: React.PropTypes.array
  },
  getInitialState: function(){
    return {
      isExpanded: false
    }
  },
  shouldComponentUpdate: function(nextProps, nextState){
    return (nextState.isExpanded != this.state.isExpanded); 
  },

  render: function(){
    return (
      <div className = 'store-categories-container'>
        <div className= 'title'> Categories </div>
        {this.renderCategoriesContainer()}
      </div>
      );
  },

  renderCategoriesContainer: function(){
    if(!this.state.isExpanded){
     return(this.renderCollapsed());
    }else{
       return(this.renderExpanded());
    }
  },

  renderExpanded: function(){
    var categories = this.props.storeCategoryData;
    return(
      <div className = 'categories-box'>
      {
        categories.map(function(category){
          return(this.renderCategory(category))
        }.bind(this))
      }
      </div>
      );
  },
  renderCollapsed: function(){
    var categories = this.props.storeCategoryData;
    if(categories.length < 6){
      return(
        <div className='categories-box'>
        {
          categories.map(function(category){
            return(this.renderCategory(category))
          }.bind(this))
        }
        </div>
        );
    }else {
      return(
        <div className='categories-box'>
        {
          categories.map(function(category,index){
            if(index < 6){
              return(this.renderCategory(category))
            }
          }.bind(this))
        }
        <div className='more' conClick={this.renderMore}> + more 
        </div>
        </div>
        );
    }

  },
  renderCategory:function(category){
    return(
      <div  className='category-box'>
        <div className='category-name' key={category.id}> {category.attributes.name}
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

export default StoreCategoryWidget;