import React from "react";
import { Title } from "components";

const staff = () => {
    return (
        <div className="container">
            <Title title='Staff Management'/>
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/* <NewStaff /> */}
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/* <ImportCSV /> */}
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    {/* <Search /> */}
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    {/* <DateInput /> */}
                </div>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button onClick={this.toggleForm} type="button" className="btn btn-info btn-block marginB10">Apply</button>
                </div>
            </div>
            {/* <ListItem data={items} /> */}
            {/* <Pagination /> */}
        </div>
    )
}

export default staff;