const PostSummaryItem = (post) => {
    return(`
          <div class="row list-item-group border-bottom pb-2 pt-2 border-light">
            <div class="col-1 float-left d-inline-block">
                <div class="wd-profile-pic">
                    <img src=${post.avatar} alt="">
                </div>
            </div>
            <div class="col-11 ps-4">
                <div class="row position-relative">
                <div class="col-11">
                  <span class="fw-bold small text-white">${post.userName}</span>
                  <span><i class="fa-solid fa-circle-check small"></i></span>
                  <span class="small text-secondary">${post.handle}</span>
                  <span class="small text-secondary">&#183; ${post.time}</span>
                </div>
                <div class="col-1"><a class=" text-secondary" href="#"><i class="fa-solid fa-ellipsis"></i></a></div>
              </div>
              <p class="small text-white">${post.message}</p>
              <div class="border border-light rounded-bottom rounded-top">
                <img src=${post.image} class="w-100 rounded-top border-bottom border-light">
                <div class="p-2">
                  <h5 class="small fw-bold">${post.title}</h5>
                  <div class="small text-secondary">${post.description}</div>
                  <div><a class="text-decoration-none small text-secondary" href="#">${isUrl(post.url)}</a></div>
                </div>
              </div>
                <div class="row pt-2 pb-2">
                <div class="col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-regular fa-comment pe-2 text-decoration-none text-secondary fa-1x"></i>${post.comments}</a>
                </div>
                <div class="col-3 align-content-center text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-retweet pe-2 text-decoration-none text-secondary fa-1x"></i>${post.retweets}</a>
                </div>
                <div class="col-3  text-decoration-none text-secondary">
                  <a href="#" class="text-decoration-none text-secondary small">
                  <i class="fa-solid fa-heart pe-2 text-secondary fa-1x"></i>${post.likes}</a>
                </div>
                <div class="col-3 text-decoration-none text-secondary">
                  <a href="#"><i class="fa-solid fa-arrow-up-from-bracket pe-2 text-secondary fa-1x"></i></a>
                </div>
            </div>
            
            </div>
          </div>
 `);
}
export default PostSummaryItem;

const isUrl = (url) => {
    return (url !== ""? `<i class="fa-solid fa-link"></i>${url}` : ``);

}