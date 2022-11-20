import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCircleCheck, faEllipsis as fasEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet, faCertificate} from '@fortawesome/free-solid-svg-icons'
//import {deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

library.add(fasEllipsis, fasHeart, faComment, faArrowUpFromBracket, faRetweet, faCertificate)


const TuitItem = (
    {
        tuit = {
            "_id": 100,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpeg",
            "liked": false,
            "replies": 1,
            "retuits": 2,
            "likes": 5,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <article className="row">
                <div className="col-1 wd-avatar img-fluid">
                    <img src={tuit.image} alt="tuit" className="rounded-circle" width={60} ></img>
                </div>
                <section className="col-11 ps-4">
                    <div className="row">
                        <div className="">
                            <span className="fw-bold small">{tuit.userName}</span>
                            <span className="px-1 text-primary"><FontAwesomeIcon icon={faCircleCheck} className="pe-1 text-decoration-none small" /></span>
                            <span className="small text-secondary">{tuit.handle} &middot;</span>
                            <span className="small text-secondary px-1">{tuit.time}</span>
                            <span><i className="bi bi-x-lg float-end"
                                     onClick={() => deleteTuitHandler(tuit._id)}></i>
                            </span>
                        </div>
                    </div>
                    <p className="small">{tuit.tuit}</p>
                    <TuitStats
                        key={tuit._id}
                        tuit={tuit}/>
                </section>
            </article>
        </li>
    );
};
export default TuitItem;