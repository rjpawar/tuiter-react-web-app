
const NavigationSidebar = (active) => {
    return(`
    <div class="list-group">
         <a class="list-group-item" href="#"><i class="fab fa-twitter"></i></a>
         <a class="list-group-item ${isActive("Home", active)}" href="../HomeScreen/index.html">
             <i class="fa fa-home pe-1 pt-1 float-start" aria-hidden="true"></i>
             <span class="d-none d-xl-block position-relative float-start">Home</span></a>
         <a class="list-group-item ${isActive("Explore", active)}" href="../ExploreScreen/index.html">
              <i class="fa fa-hashtag pe-1 pt-1 float-start" aria-hidden="true"></i>
              <span class="d-none d-xl-block position-relative float-start">Explore</span></a>
         <a class="list-group-item ${isActive("Notifications", active)}" href="#">
               <i class="fa fa-bell pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">Notifications</span></a>
         <a class="list-group-item ${isActive("Messages", active)}" ef="#">
               <i class="fa fa-envelope pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">Messages</span></a>
         <a class="list-group-item ${isActive("Bookmarks", active)}" href="#">
               <i class="fa fa-bookmark pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">Bookmarks</span></a>
         <a class="list-group-item ${isActive("Lists", active)}" href="#">
               <i class="fa fa-list-ul pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">Lists</span></a>
         <a class="list-group-item ${isActive("Profile", active)}" href="#">
               <i class="fa fa-user pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">Profile</span></a>
         <a class="list-group-item rounded-bottom ${isActive("More",active)}" href="#">
               <i class="fa fa-bars pe-1 pt-1 float-start" aria-hidden="true"></i>
               <span class="d-none d-xl-block position-relative float-start">More</span></a>
         <button type="button" class="btn btn-primary mt-4 rounded-pill">Tuit</button>
    </div>
 `);
}
export default NavigationSidebar;

const isActive = (tab, active) => {
    return (tab === active ? `active` : null)
}
