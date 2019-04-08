import React, {Component} from 'react'
import './MoreInfo.css'
class MoreInfo extends Component{


  render(){
    const {url, description}= this.props.data
    return(
      <div className="more-info">
        <h2>
          <a href={url}>{description}</a>
        </h2>
      </div>
    )
  }
}

export default MoreInfo;
