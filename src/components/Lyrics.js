import React, { Component } from 'react'

class Lyrics extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return(
        <div>
          {this.props.lyrics}
        </div>
    )
  }
}
export default Lyrics;
