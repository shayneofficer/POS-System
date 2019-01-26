import React from "react";
import shine from "../../Images/shine.jpg"
import shine2 from "../../Images/shine2.jpg"
import shine3 from "../../Images/shine3.jpg"


const style = {
    buttons: {
        margin: "10px",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center"
    },
    navbar: {
        marginLeft: "1150px",
        align: "right",
        fontSize: "1.3rem",
        color: "red"
    }
};

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center"><span className="fa fa-fire"></span>Webster Halsted</h1>
                        <hr />
                        <h2 className="text-center">Book your seat at our exclusive POS restaurants!</h2>
                        <br />

                        <div className="text-center">
                            {/* <a href="/tables"><button className="btn btn-lg btn-primary"><span className="fa fa-list-alt"></span> View Tables</button></a> */}
                            <a href="/Reservations"><button
                                style={style.buttons}
                                type="button"
                                className="btn btn-warning">
                                Reservation</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={shine} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine2} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine3} alt={"logo"} width="250px" height="250px"></img>
                        <img src={shine3} alt={"logo"} width="250px" height="250px"></img>
                    </div>
                </div>
                <footer className="footer">
                    {/* <div className="container">
                        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
                    </div> */}
                </footer>

            </div >
        );
    }
}

export default home;
