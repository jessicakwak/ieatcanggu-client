import React from "react";
import Grid from "@material-ui/core/Grid";

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.images,
      mainImage: this.props.images[0]
    };
  }

  static getDerivedStateFromProps(props,state){
    if(props.images!==state.images){
      return {
        images:props.images,
        mainImage:props.images[0]
      }
    }
    return null
  }

  changeMain = img => {
    this.setState({ mainImage: img });
  };
  render() {
    const {images, mainImage} = this.state
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div
            className="mainImg"
            style={{
              backgroundImage: `url(${mainImage})`
            }}
          ></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            {images.map((j, i) => {
              return (
                <Grid item xs={3} md={6} key={i}>
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
