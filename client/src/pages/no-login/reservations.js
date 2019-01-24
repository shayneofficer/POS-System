import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>

                <div class="container">

                    <div class="jumbotron">
                        <h1 class="text-center">
                            <span class="fa fa-fire"></span> Hot Restaurant</h1>
                        <hr>
                            <h2 class="text-center">Make your reservation</h2>
                            <br>
                                <div class="text-center">
                                    <a href="/tables">
                                        <button class="btn btn-lg btn-primary">
                                            <span class="fa fa-list-alt"></span> View Tables</button>
                                    </a>
                                    <a href="/">
                                        <button class="btn btn-lg btn-default">
                                            <span class="fa fa-home"></span>
                                        </button>
                                    </a>
                                </div>
</div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <!-- Reservation Page -->
    <div class="card">
                                        <div class="card-header">
                                            Table Reservation
      </div>
                                        <div class="card-body">
                                            <form role="form">
                                                <div class="form-group">
                                                    <label for="reserve-name">Name</label>
                                                    <input type="text" class="form-control" id="reserve-name">
          </div>
                                                    <div class="form-group">
                                                        <label for="reserve-phone">Phone Number</label>
                                                        <input type="text" class="form-control" id="reserve-phone">
          </div>
                                                        <div class="form-group">
                                                            <label for="reserve-email">Email</label>
                                                            <input type="text" class="form-control" id="reserve-email">
          </div>
                                                            <div class="form-group">
                                                                <label for="reserve-unique-id">Unique ID</label>
                                                                <input type="text" class="form-control" id="reserve-unique-id">
          </div>
                                                                <button type="submit" class="btn btn-primary submit">Submit</button>
        </form>
                                                        </div>
                                                    </div>
                                                </div>
</div>


                                            <footer class="footer">
                                                <div class="container">
                                                    <p>
                                                        <a href="/api/tables">API Table Link</a> |
      <a href="/api/waitlist">API Wait List</a>
  </div>
</footer>

</div>
                                        </div>