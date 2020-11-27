import React from 'react';
import {yes, no} from '../objects';



class ClickImage extends React.Component {
    state ={
        yes: yes,
        no: no,
        open: true
      }

    clickHandler = () => {
        console.log("Clicked!")
        console.log(this.state.open)
        this.setState(state => ({ open: !state.open }))
    }


    YNPaths = {
        yImage: this.state.yes["yes-image"],
        yStatement: this.state.yes["yes-statement"],
        nImage: this.state.yes["no-image"],
        nStatement: this.state.yes["no-statement"]
    }

    getImageName = () => this.state.open ? 'yImage' : 'nImage'

    render() {
    const imageName = this.getImageName();
    
      return (
        <div onClick= {this.clickHandler} className="card">
          <img  alt="click" src= {this.YNPaths.yImage}/>
          <h2> {this.YNPaths.yStatement} </h2>
        </div>
      );
    }
  }
export default ClickImage;