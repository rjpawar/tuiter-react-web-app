import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis as fasEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

library.add(fasEllipsis, fasHeart, faComment, faArrowUpFromBracket, faRetweet, faCircleCheck)

const PostItem = (
    {
        post = {
            "_id": 100,
            "avatar": "../../public/images/elon_profile.jpeg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "message": "Amazing show about @inspiration4x mission!",
            "image": "../../images/inspiration4.jpeg",
            "contentTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "contentSnippet": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
            "contentOwner": "netflix.com",
            "numComments": "4.2K",
            "numRetweets": "3.5K",
            "numLikes": "37.5K"
        }
    }
) => {
    return(
          <div className="row list-item-group border-bottom pb-2 pt-2 border-gray">
            <div className="col-1 float-left d-inline-block">
                {post.isRetuit && <div><a href="#" className="text-decoration-none text-secondary small ms-4">
                    <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x" /></a></div>}
                <div className="wd-profile-pic">
                    <img src={`/images/${post.avatar}`} alt=""></img>
                </div>
            </div>
            <div className="col-11 ps-4">
                <div className="row position-relative">
                <div className="col-11">
                    {post.isRetuit && <div className="text-secondary small">
                        MAPPA Retuited
                    </div>}

                  <span className="fw-bold small">{post.userName} </span>
                  <span><FontAwesomeIcon icon={faCircleCheck} className="pe-1 text-decoration-none small" /></span>
                  <span className="small text-secondary">{post.handle}</span>
                  <span className="small text-secondary"> &#183; {post.time}</span>
                </div>
                <div className="col-1"><a className=" text-secondary" href="#"><FontAwesomeIcon icon={fasEllipsis} /></a></div>
              </div>
              <p className="small">{post.message}</p>
              <div className="border border-gray rounded-bottom rounded-top">
                  <div className="mt-2 ms-2">
                      {
                          post.image.length > 0 &&
                          <img src={`/images/${post.image}`} className="w-100 rounded-top border-bottom border-gray " alt=""></img>
                      }
                  </div>
                  <div>
                      {
                          post.postContent.userName.length > 0 &&
                          <div className="ms-2">
                              <div className="mt-1"><img className="rounded-circle me-1 mb-1 ms-2" height={15} src={`/images/${post.postContent.avatarIcon}`}/>
                                  <span className="fw-bold small">{post.postContent.userName}</span>
                                  <span ><FontAwesomeIcon icon={faCircleCheck} className="pe-1 text-decoration-none small" /></span>
                                  <span className="small text-secondary"> @{post.postContent.handle}</span> &#183; <span className="small text-secondary">{post.postContent.time}</span></div>
                              <div className="ms-2 me-1 mb-1"> {post.postContent.header} <i className="bi bi-arrow-right"></i>
                                  <a className="text-decoration-none" href="#"> {post.postContent.headerPostLink}</a>
                              </div>
                          </div>
                      }
                  </div>


                <div className="p-2">
                  <h5 className="small fw-bold">{post.title}</h5>
                  <div className="small text-secondary">{post.description}</div>
                  <div><a className="text-decoration-none small text-secondary" href="#">{post.url}</a></div>
                </div>
              </div>
                <div className="row pt-2 pb-2">
                <div className="col-3 align-content-center text-secondary">
                  <a href="#" className="text-decoration-none text-secondary small">
                      <FontAwesomeIcon icon={faComment} className="pe-2 text-decoration-none text-secondary fa-1x"/>{post.comments}</a>
                </div>
                <div className="col-3 align-content-center text-secondary">
                  <a href="#" className="text-decoration-none text-secondary small">
                      <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x" />{post.retweets}</a>
                </div>
                <div className="col-3  text-decoration-none text-secondary">
                  <a href="#" className="text-decoration-none text-secondary small">
                      <FontAwesomeIcon icon={fasHeart} className="pe-2 text-secondary fa-1x"/>{post.likes}</a>
                </div>
                <div className="col-3 text-decoration-none text-secondary">
                  <a href="#"><FontAwesomeIcon icon={faArrowUpFromBracket} className="pe-2 text-decoration-none text-secondary fa-1x" /></a>
                </div>
                <div className="pt-4"><a className="text-decoration-none" href="#">Show this thread</a> </div>
            </div>
            
            </div>
          </div>
 );
};
export default PostItem;