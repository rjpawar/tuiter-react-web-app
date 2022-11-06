import React from "react";
import TuitsList from "../tuits/index";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-10 col-lg-8 col-xl-7">
                    <h4>Home</h4>
                    <WhatsHappening/>
                    <TuitsList/>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-5">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
};
export default HomeComponent;