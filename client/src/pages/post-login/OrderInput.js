import React from 'react';
import MenuCats from "../../components/MenuCats"

class Order extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        category: ["Appetizers", "Entrees", "Sushi", "Etc"]
    }


    render() {

        const colSize = {
            row: {
                display: "flex",
            },

            column: {
                flex: "50%",
            }
        }
        return (
            <div>
                <div className="row" style={colSize.row}>
                    <div className="column" style={colSize.column}>
                        <form >
                            <select name="table-no">
                                <option value="table1">Table 1</option>
                                <option value="table2">Table 2</option>
                                <option value="table3">Table 3</option>
                                <option value="table4">Table 4</option>
                            </select>
                            <div className="orderList">






                            </div>
                            <input type="submit" />
                        </form>

                    </div>
                    <div className="column" style={colSize.column}>

                        {this.state.category.map((category) => {
                            return (<MenuCats category={category} />)
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default Order;