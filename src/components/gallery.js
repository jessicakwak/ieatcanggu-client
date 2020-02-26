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
      <div id="grid">
        <div
          id="mainImg"
          style={{ backgroundImage: `url(${this.state.images[0]})` }}
        ></div>
        <div id="gallery">
          {this.state.images.map((e, i) => {
            if (i > 0) {
              return (
                <div
                  className="photo"
                  style={{ backgroundImage: `url(${e})` }}
                ></div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Gallery;
