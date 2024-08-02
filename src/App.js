import { Profile } from 'Сomponents/Profile'
import user from '../src/user.json'


export const App =() => {
return <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>}
