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
    marginTop: "20px",
    marginRight: "100px",
    marginBottom: "30px"
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
    role: "host",
    tables: [
      {
        tableNumber: 1,
        tableNo: "n1",
        tableShape: "rounded-corner",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 2,
        tableNo: "n2",
        tableShape: "square",
        server: "server-3",
        serverName: "Tom"
      },
      {
        tableNumber: 3,
        tableNo: "n3",
        tableShape: "square",
        server: "server-3",
        serverName: "Steve"
      },
      {
        tableNumber: 4,
        tableNo: "n4",
        tableShape: "square",
        server: "server-3",
        serverName: "Steve"
      },
      {
        tableNumber: 5,
        tableNo: "n5",
        tableShape: "square",
        server: "server-4",
        serverName: "Angie"
      },
      {
        tableNumber: 6,
        tableNo: "n6",
        tableShape: "rounded-corner",
        server: "server-2",
        serverName: "Tom"
      },
      {
        tableNumber: 7,
        tableNo: "n7",
        tableShape: "round",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 8,
        tableNo: "n8",
        tableShape: "round",
        server: "server-1",
        serverName: "Jenny"
      },
      {
        tableNumber: 9,
        tableNo: "n9",
        tableShape: "round",
        server: "server-4",
        serverName: "Steve"
      },
      {
        tableNumber: 10,
        tableNo: "n10",
        tableShape: "round",
        server: "server-4",
        serverName: "Steve"
      },
      {
        tableNumber: 11,
        tableNo: "n11",
        tableShape: "round",
        server: "server-2",
        serverName: "Tom"
      },
      {
        tableNumber: 12,
        tableNo: "n12",
        tableShape: "round",
        server: "server-2",
        serverName: "Tom"
      }
    ]
  };

  changeRole = role => {
    this.setState({ role });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <div style={{ display: "inline-flex" }}>
            <button
              onClick={() => this.changeRole("host")}
              style={style.buttons}
              type="button"
              className="btn btn-warning"
            >
              Host
            </button>
            <button
              onClick={() => this.changeRole("server")}
              style={style.buttons}
              type="button"
              className="btn btn-warning"
            >
              Server
            </button>
          </div>
          <div style={style.tables}>
            {this.state.tables
              .filter(table => table.tableShape !== "round")
              .map(table => {
                return (
                  <Table
                    key={table.tableNumber}
                    roleView={this.state.role}
                    tableNumber={table.tableNumber}
                    tableShape={table.tableShape}
                    serverNumber={table.server}
                    tableNo={table.tableNo}
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
                    key={table.tableNumber}
                    tableNumber={table.tableNumber}
                    tableShape={table.tableShape}
                    serverNumber={table.server}
                    roleView={this.state.role}
                    tableNo={table.tableNo}
                  />
                );
              })}
          </div>
        </div>
        <div style={style.buttons}>
          <Link to={`/orderpage`}>
            <button
              style={style.buttons}
              type="button"
              className="btn btn-warning"
            >
              Enter Order
            </button>
          </Link>
          <Link to={`/home`}>
            <button
              style={style.buttons}
              type="button"
              className="btn btn-warning"
            >
              Get Check
            </button>
          </Link>
        </div>
        <div style={style.colorKey}>
          <FloorPlanDesc roleView={this.state.role} />
        </div>
      </div>
    );
  }
}

export default FloorPlan;
