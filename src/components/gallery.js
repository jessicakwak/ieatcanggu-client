import React from "react";

class Gallery extends React.Component {
  state = {
    images: this.props.images
  };
  componentWillReceiveProps(nextProp) {
    this.setState({ images: nextProp.images });
  }
  render() {
    return (
      <div id="gallery">
        {this.state.images.map((e, i) => {
          return (
            <div
              className="photo"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
