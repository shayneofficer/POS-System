import React from "react";
import Table from "../../components/Tables";
import FloorPlanDesc from "../post-login/FloorPlan_desc";
import { Link } from "react-router-dom";



class FloorPlan extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  state = {
    role: 1,
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

  changeRole = role => {
    this.setState({ role: role });
    console.log("hit change role");
  };

  render() {

    const style = {
      buttons: {
        margin: "10px",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center"
      }
    };
    
    return (
      <div style={{ textAlign: "center" }}>
        <FloorPlanDesc />

        <div>
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
                      role={this.state.role}
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
                      role={this.state.role}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div style={style.buttons}>
        <Link to={`/order`} >
          <button style={style.buttons} type="button" class="btn btn-warning">
            Enter Order
          </button>
          </Link>
          <Link to={`/home`}>
            <button style={style.buttons} type="button" class="btn btn-warning">
              Get Check
            </button>
          </Link>

          <button
            onClick={() => this.changeRole(1)}
            style={style.buttons}
            type="button"
            class="btn btn-warning"
          >
            Host
          </button>
          <button
            onClick={() => this.changeRole(2)}
            style={style.buttons}
            type="button"
            class="btn btn-warning"
          >
            Waitor
          </button>
        </div>
      </div>
    );
  }
}

export default FloorPlan;
