
const PostSummaryItem = (post) => {
    return(`
     <div class="row list-group-item m-0 p-2">
       <div class="col-10 float-left d-inline-block">
            <div class="text-secondary small fw-bold">${post.topic}</div>
            <span class="fw-bold small">${post.userName}
       <i class="fa-solid fa-circle-check small"></i></span>
            <span class="text-secondary small fw-bold"> - ${post.time}</span>
            <p class="small fw-bold mb-0">${post.title}</p>
       </div>
       <div class="col-2 wd-image-logo pt-1 float-end">
                    <img src=${post.image} class="float-end rounded" alt="">
       </div>
     </div>
 `);
}
export default PostSummaryItem;