import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`


<ul class="list-group">
    <h4 class="small fw-bold list-group-item mb-0">Who To Follow</h4>
         ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
 </ul>


      
      
   `);
}
export default WhoToFollowList;