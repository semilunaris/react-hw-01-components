import { ListItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <ListItem>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ListItem>
    );
};