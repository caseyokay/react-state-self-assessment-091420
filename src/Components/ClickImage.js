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
        nImage: this.state.no["no-image"],
        nStatement: this.state.no["no-statement"]
    }

    getImageName = () => this.state.open ? 'yImage' : 'nImage'

    render() {
    const imageName = this.getImageName();
    
      return (
        <div onClick= {this.clickHandler} className="card">
        {this.state.open ? (<img src= {this.YNPaths.nImage}/>): <img  alt="click" src= {this.YNPaths.yImage}/>}
        {this.state.open ? (<h2> {this.YNPaths.nStatement} </h2>): <h2> {this.YNPaths.yStatement} </h2>}
        </div>
      );
    }
  }
export default ClickImage;