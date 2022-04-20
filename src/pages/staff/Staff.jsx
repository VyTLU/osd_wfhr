import React from "react";
import { Title, NewButton, Search, DateInput, Paging } from "components";
import  ImportCSV  from "./ImportCSV";
import ListStaff from "./ListStaff";

const staff = () => {
    return (
        <div className="container">
            <Title title='Staff Management'/>
            <div className="row">
                <div className="row__btn">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <NewButton />
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <ImportCSV />
                    </div>
                </div>
                <div className="row__input">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <DateInput />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10">Apply</button>
                    </div>
                </div>
            </div>
            <ListStaff />
            <Paging />
        </div>
    )
}

export default staff;