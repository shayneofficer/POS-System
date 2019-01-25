import React from "react";
import Table from "../../components/Tables";
import FloorPlanDesc from "../post-login/FloorPlan_desc";
import { Link } from "react-router-dom";

const style = {
  colorKey: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: "100px",
    marginRight: "100px"
  },
  buttons: {
    margin: "10px",
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center"
  },
  tables: {
    display: "flex",
    justifyContent: "center"
  }
};

class FloorPlan extends React.Component {
  state = {
    role: 1,
    tables: [
      {
        tableNumber: 1,
        tableShape: "rounded-corner",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 2,
        tableShape: "square",
        server: "server-3",
        serverName: "Tom"
      },
      {
        tableNumber: 3,
        tableShape: "square",
        server: "server-3",
        serverName: "Steve"
      },
      {
        tableNumber: 4,
        tableShape: "square",
        server: "server-3",
        serverName: "Steve"
      },
      {
        tableNumber: 5,
        tableShape: "square",
        server: "server-4",
        serverName: "Angie"
      },
      {
        tableNumber: 6,
        tableShape: "rounded-corner",
        server: "server-2",
        serverName: "Tom"
      },
      {
        tableNumber: 7,
        tableShape: "round",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 8,
        tableShape: "round",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 9,
        tableShape: "round",
        server: "server-4",
        serverName: "Steve"
      },
      {
        tableNumber: 10,
        tableShape: "round",
        server: "server-4",
        serverName: "Steve"
      },
      {
        tableNumber: 11,
        tableShape: "round",
        server: "server-2",
        serverName: "Tom"
      },
      {
        tableNumber: 12,
        tableShape: "round",
        server: "server-2",
        serverName: "Tom"
      }
    ]
  };

  changeRole = role => {
    // sessionStorage.setItem("role", role);
    this.setState({ role: role });
  };

  render() {
    // if (sessionStorage.getItem("role")) {
    //   sessionStorage.setItem("role", 1);
    //   this.setState({ role: sessionStorage.getItem("role") });
    // }
    return (
      <div>
        <div>
          <div style={{ display: "inline-flex" }}>
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
          <div style={style.tables}>
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
          <div style={style.tables}>
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
        <div style={style.buttons}>
          <button style={style.buttons} type="button" class="btn btn-warning">
            Enter Order
          </button>
          <Link to={`/home`}>
            <button style={style.buttons} type="button" class="btn btn-warning">
              Get Check
            </button>
          </Link>
        </div>
        <div style={style.colorKey}>
          <FloorPlanDesc />
        </div>
      </div>
    );
  }
}

export default FloorPlan;
