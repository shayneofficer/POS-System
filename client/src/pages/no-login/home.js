import React from "react";
import Background from "../../Images/shine4.jpg"



const style = {
    buttons: {
        marginLeft: "450px",
        fontSize: "1.3rem",
        display: "flex",
        justifyContent: "center"
    },
    navbar: {
        marginLeft: "1150px",
        align: "right",
        fontSize: "1.3rem",
        color: "red"
    },
    header: {
        color: "#ffc107",
        fontSize: "2.5rem"
    }
};

const section = {
    background: {
        width: "100%",
        height: "800px",
        backgroundImage: `url(${Background})`
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
                <section style={section.background}>
                    <div className="container">
                        <div className="header">
                            <h1 className="text-center" style={style.header}><span className="fa fa-fire"></span>Webster Halsted</h1>
                            <hr />
                            <h2 className="text-center" style={style.header}>Book your seat at Shine, our exclusive POS restaurant!</h2>
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

                    </div>
                    <footer className="footer">
                        {/* <div className="container">
                        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
                    </div> */}
                    </footer>
                </section>
            </div >
        );
    }
}

export default home;
