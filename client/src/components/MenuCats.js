import React from 'react';

class MenuCats extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render() {

    const myStyle = {
      catbtn:{
        
          height: "75px",
          display: 'inline-block',
          textAlign: "center",
          paddingRight: "10px",
          paddingLeft: "10px",
          marginLeft: "5px",
          marginTop: "5px",
          textTransform: "uppercase"
      },
}
    return (
      // <button className="btn btn-light" onClick={this.props.getItems} style={myStyle.catbtn}> {this.props.category}</button>
      <button className="btn btn-light" onClick={this.props.showItems} style={myStyle.catbtn}> {this.props.category}</button>
    );
  }
}

export default MenuCats;