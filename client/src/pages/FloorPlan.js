import React from "react";
import Table from "../components/Tables";

class FloorPlan extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  state = {
    tables: [
      {
        tableNumber: 1,
        tableShape: "rounded-corner"
      },
      {
        tableNumber: 2,
        tableShape: "square"
      },
      {
        tableNumber: 3,
        tableShape: "square"
      },
      {
        tableNumber: 4,
        tableShape: "square"
      },
      {
        tableNumber: 5,
        tableShape: "square"
      },
      {
        tableNumber: 6,
        tableShape: "rounded-corner"
      },
      {
        tableNumber: 7,
        tableShape: "round"
      },
      {
        tableNumber: 8,
        tableShape: "round"
      },
      {
        tableNumber: 9,
        tableShape: "round"
      },
      {
        tableNumber: 10,
        tableShape: "round"
      },
      {
        tableNumber: 11,
        tableShape: "round"
      },
      {
        tableNumber: 12,
        tableShape: "round"
      }
    ]
  };

  render() {
    return (
      <div>
        {this.state.tables.map(table => {
          return (
            <Table
              tableNumber={table.tableNumber}
              tableShape={table.tableShape}
            />
          );
        })}
      </div>
    );
  }
}

export default FloorPlan;
