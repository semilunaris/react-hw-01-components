import { Profile } from 'Сomponents/Profiles/Profile'
import { Statistics } from 'Сomponents/Statistics/Statisics'
import { FriendList } from 'Сomponents/FriendList/FriendList'
import user from '../src/user.json'
import data from '../src/data.json'
import friends from '../src/friends.json'



export const App = () => {
  return (
    <div>
      <div><Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> </div>
      <div><Statistics  stats={data} />
      </div>
      <div>
        <FriendList friends={friends}/>
      </div>
    </div>
  );
};