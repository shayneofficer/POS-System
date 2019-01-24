import React from 'react';

class MenuCats extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {

    const myStyle = {
            box:{
              
                backgroundColor: "red",
                height: "100px",
                width: "150px",
                display: 'inline-block',
                textAlign: "center",
                paddingRight: "10px",
                paddingLeft: "10px",
                marginLeft: "5px",
                marginTop: "5px"
            },
    }
    return (
      <div  style={myStyle.box}><h1> {this.props.category}</h1></div>
    );
  }
}

export default MenuCats;