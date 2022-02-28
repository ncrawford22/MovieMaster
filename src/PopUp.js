import React from 'react';
import './App.css';
import './PopUp.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class PopUp extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
        popup: false,
      }
  
    
      this.popupSwitch = this.popupSwitch.bind(this);
    }

    popupSwitch() {
        this.setState({popup: !this.state.popup});
      }
    
    render() {
        let overview = ""
        if (this.props.description.length <= 20) {
          overview = <p>You'll have to watch this movie yourself. It is not well known enough to include further information.</p>
        }
        else {
          overview = <p>{this.props.description}</p>
          }
          return (
            <div className="PopUp">
              <Button id={this.props.id} type="button" color="blue">
                Details
              </Button>
              <Popover placement="bottom" isOpen={this.state.popup} target={this.props.id} toggle={this.popupSwitch}>
                <PopoverHeader>Details</PopoverHeader>
                <PopoverBody>{overview}</PopoverBody>
              </Popover>
            </div>
          );
      }
}
// export default popUp;