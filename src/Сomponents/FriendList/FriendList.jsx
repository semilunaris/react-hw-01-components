import { FriendListItem } from "Сomponents/FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem 
                    key={id} 
                    avatar={avatar} 
                    name={name} 
                    isOnline={isOnline} 
                    id={id} 
                />
            ))}
        </ul>
    );
};