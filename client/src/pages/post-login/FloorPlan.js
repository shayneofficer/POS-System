import React from "react";
import Table from "../../components/Tables";
import FloorPlanDesc from "../post-login/FloorPlan_desc";
import FloorPlanLinks from "../post-login/FloorPlan_links";
import OrderCheckBtns from "../../components/FloorPlan_Order_Check_Btns";
import ReservationBtn from "../../components/FloorPlan_Reservation_Btn";
import Button from "react-bootstrap/Button";
import ServerKey from "../../components/ServerKey";
import API from "../../utils/API";
import ReservationList from "../../components/ReservationList";

const style = {
  tables: {
    display: "flex",
    justifyContent: "center"
  },
  links: {
    margin: "50px"
  },
  buttons: {
    margin: "10px",
    fontSize: "1.3rem",
    display: "flex",
    justifyContent: "center"
  },
  colorKey: {
    display: "flex",
    flexDirection: "row"
  }
};

class FloorPlan extends React.Component {
  state = {
    role: "host",
    restaurant: undefined,
    restId: undefined,
    dbTables: [],
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
        serverName: "Steve"
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

  componentDidMount = () => {
    this.getTables();
  };

  getTables= () => {
    this.getRestaurant((result) => {
      const Restaurant = result;
      let tableArr = [];
      Restaurant.Tables.map((table, i) => {
        tableArr.push(table);
      });
      this.setState({
        restaurant: Restaurant,
        restId: Restaurant._id,
        dbTables: tableArr
      });
    });
  };

  getRestaurant = (callback) => {
    API.getRestaurants().then((restaurants) => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  changeRole = role => {
    console.log("role");
    this.setState({ role });
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <div style={{ display: "inline-flex" }}>
            <Button
              onClick={() => this.changeRole("manager")}
              style={style.buttons}
              variant="warning"
            >
              Manager
            </Button>
            <Button
              onClick={() => this.changeRole("host")}
              style={style.buttons}
              variant="warning"
            >
              Host
            </Button>
            <Button
              onClick={() => this.changeRole("server")}
              style={style.buttons}
              variant="warning"
            >
              Server
            </Button>
          </div>
          <FloorPlanLinks roleView={this.state.role} />
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
        <OrderCheckBtns roleView={this.state.role} tables={this.state.dbTables} />
        <ReservationBtn roleView={this.state.role} />
        <div style={style.colorKey}>
          <ServerKey />
          <FloorPlanDesc roleView={this.state.role} />
        </div>
        <div>
          <ReservationList roleView={this.state.role} />
        </div>
      </div>
    );
  }
}

export default FloorPlan;
