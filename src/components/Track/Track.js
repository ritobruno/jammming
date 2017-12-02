import React from 'react';
import './Track.css';

class Track extends Component {
  renderAction(){
    if(isremoval){
      document.getElementByClassName("Track-action").innerHTML = "-";
    }
    else {
      document.getElementByClassName("Track-action").innerHTML = "+";
    }
  }

  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a className="Track-action"><!-- + or - will go here --></a>
      </div>

    );
  }
}

export default Track;
