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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const style = {
  links: {
    margin: "50px"
  },
  buttons: {
    margin: "10px",
    fontSize: "1.3rem"
  }
};

class FloorPlan extends React.Component {
  state = {
    displayReservations: false,
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

  getTables = () => {
    this.getRestaurant(result => {
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

  getRestaurant = callback => {
    API.getRestaurants().then(restaurants => {
      const restaurant = restaurants.data[0];
      callback(restaurant);
    });
  };

  changeRole = role => {
    console.log(role);
    this.setState({ role });
  };

  changeReservation = () => {
    this.setState({ displayReservations: !this.state.displayReservations });
    console.log(this.state.reservation);
  };

  render() {
    return (
      //
      //     <div>
      //
      //     </div>
      //   </div>
      // </div>

      <Container>
        <Row>
          <Col md={12} lg={12}>
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
            <FloorPlanLinks roleView={this.state.role} />
          </Col>
        </Row>
        <Row>
          <Col md={3} lg={3}>
            <ServerKey />
          </Col>
          <Col xs={8} md={6} lg={6} style={{ justifyContent: "center" }}>
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
            <br />
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
          </Col>

          <Col md={3} lg={3}>
            <FloorPlanDesc roleView={this.state.role} />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <OrderCheckBtns
              roleView={this.state.role}
              tables={this.state.dbTables}
            />
            <ReservationBtn
              roleView={this.state.role}
              changeReservations={this.changeReservation}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            {this.state.displayReservations && (
              <ReservationList roleView={this.state.role} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FloorPlan;
