import React, {Component} from 'react'
import ListItem from '../components/ListItem.js'
import './ListBox.css'
class ListBox extends Component{



  render(){

    const listNodes = this.props.data.map(film => {
      return (
        <ListItem key={film.id} name={film.name} url={film.url}/>
      )
    })

    return(
      <div className="list-box">
        {listNodes}
      </div>
    )
  }
}

export default ListBox;
