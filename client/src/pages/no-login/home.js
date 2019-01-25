import React from "react";
import shine from "../../Images/shine.jpg"
import shine2 from "../../Images/shine2.jpg"
import shine3 from "../../Images/shine3.jpg"

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">POS</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/restlogin">Restaurant Login<span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container">
                    <div class="jumbotron">
                        <h1 class="text-center"><span class="fa fa-fire"></span>Webster Halsted</h1>
                        <hr />
                        <h2 class="text-center">Book your seat at our exclusive POS restaurants!</h2>
                        <br />

                        <div class="text-center">
                            {/* <a href="/tables"><button class="btn btn-lg btn-primary"><span class="fa fa-list-alt"></span> View Tables</button></a> */}
                            <a href="/Reservations"><button class="btn btn-lg btn-warning"><span class="fa fa-credit-card"></span> Make
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
                <footer class="footer">
                    {/* <div class="container">
                        <p><a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
                    </div> */}
                </footer>

            </div >
        );
    }
}

export default home;
