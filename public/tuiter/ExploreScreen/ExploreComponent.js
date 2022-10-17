import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
             <div class="row mb-2 me-2">
                <div class="col-11 position-relative">
                    <input class="fontAwesome form-control rounded-pill p-2" type="text" placeholder="&#xf002;    Search Tuiter" aria-label="search tuiter">
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"><i class="fa fa-gear fa-2x pt-1"></i></a>
                </div>
            </div>

            <ul class="nav nav-tabs navbar-expand pb-1">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item d-md-block d-sm-none d-none">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div class="position-relative">
                <img src="../../../images/starship.jpeg" class="w-100" alt="SpaceX Starship">
                <h2 class="fw-bold position-absolute bottom-0 text-light">SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;