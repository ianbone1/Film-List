import React, {Component} from 'react'

class ListItem extends Component{

  render(){

    const {name, url} = this.props

    return(
      <div className="list-item">
        <h3>
          <li>
            <a href={url}>{name}</a>
          </li>
        </h3>
      </div>
    )
  }
}

export default ListItem;
