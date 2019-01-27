import Menu from "../../../components/Menu";
import { Container, Row, Col } from "../../../components/Grid";
import API from '../../../utils/API';

class OrderPage extends React.Component {
  state = {
    menu: {},
    categories: []
  };

  componentDidMount = () => {
    API.getMenuByName("Shine Main Menu");
  };

  getMenuByName = (name) => {
    API.getMenuByName(name)
      .then((result) => {
        this.setState({
          menu: result.data,
          categories: result.data.categories
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          menu: { error: "Check Log" },
          categories: categories.push({ error: "Check Log" })
        });
      });
  };
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <div className="box">
              <h3>Placeholder</h3>
            </div>
          </Col>
          <Col>
            <Row>
              <div className="box">
                <Menu categories={this.state.categories} />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OrderPage;
