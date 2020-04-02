import React from "react";
import Grid from "@material-ui/core/Grid";

class Gallery extends React.Component {
  state = {
    images: this.props.images,
    mainImage: this.props.images[0]
  };

  componentWillMount() {
    this.setState({
      images: this.props.images,
      mainImage: this.props.images[0]
    });
  }

  componentWillReceiveProps(nextProp) {
    this.setState({ images: nextProp.images, mainImage: nextProp.images[0] });
  }

  changeMain = img => {
    this.setState({ mainImage: img });
  };
  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div
            className="mainImg"
            style={{
              backgroundImage: `url(${this.state.mainImage})`
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {this.state.images.map(j => {
              return (
                <Grid item xs={3} md={6}>
                  <div
                    className="otherImg"
                    style={{
                      backgroundImage: `url(${j})`
                    }}
                    onMouseOver={x => this.changeMain(j)}
                  ></div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Gallery;
