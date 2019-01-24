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
        tableShape: "rounded-corner",
        server: "server-1"
      },
      {
        tableNumber: 2,
        tableShape: "square",
        server: "server-3"
      },
      {
        tableNumber: 3,
        tableShape: "square",
        server: "server-3"
      },
      {
        tableNumber: 4,
        tableShape: "square",
        server: "server-3"
      },
      {
        tableNumber: 5,
        tableShape: "square",
        server: "server-4"
      },
      {
        tableNumber: 6,
        tableShape: "rounded-corner",
        server: "server-2"
      },
      {
        tableNumber: 7,
        tableShape: "round",
        server: "server-1"
      },
      {
        tableNumber: 8,
        tableShape: "round",
        server: "server-1"
      },
      {
        tableNumber: 9,
        tableShape: "round",
        server: "server-4"
      },
      {
        tableNumber: 10,
        tableShape: "round",
        server: "server-4"
      },
      {
        tableNumber: 11,
        tableShape: "round",
        server: "server-2"
      },
      {
        tableNumber: 12,
        tableShape: "round",
        server: "server-2"
      }
    ]
  };

  render() {
    return (
      <div>
        <div>
          {this.state.tables
            .filter(table => table.tableShape !== "round")
            .map(table => {
              return (
                <Table
                  tableNumber={table.tableNumber}
                  tableShape={table.tableShape}
                  serverNumber={table.server}
                />
              );
            })}
        </div>
        <div>
          {this.state.tables
            .filter(table => table.tableShape === "round")
            .map(table => {
              return (
                <Table
                  tableNumber={table.tableNumber}
                  tableShape={table.tableShape}
                  serverNumber={table.server}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default FloorPlan;
