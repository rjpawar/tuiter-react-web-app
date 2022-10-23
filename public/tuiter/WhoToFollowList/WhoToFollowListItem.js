const WhoToFollowListItem = (who) => {
    return(`
<div class="list-group-item">
<div class="row border-gray pt-1 pb-2">
                 <div class="col-2 wd-image pt-1 ps-1"><img class="rounded-circle" src=${who.avatarIcon} alt="Relativity Space Logo"></div>
                 <div class="col-8">
                        <span class="fw-bold small">${who.userName} <i class="fa fa-check-circle" aria-hidden="true"></i></span>
                        <div>@${who.handle}</div>
                 </div>
                 <div class="col-2 mt-1 mt-1 pt-1">
                        <button type="button" class="btn btn-primary rounded-pill float-end">Follow</button>
                 </div>
           </div>
</div>
           
     
`)
}
export default WhoToFollowListItem;