import {
  MainProfile,
  Description,
  Icon,
  Name,
  Tag,
  Location,
  Stats,
  StatItem,
  Label,
  Quantity
} from './Profile.styled';


export const Profile = ({username, tag, location, avatar, stats,}) => {
    return (
        <MainProfile>
  <Description>
    <Icon
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <StatItem>
      <Label>Followers </Label>
      < Quantity>{ stats.followers}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Views </Label>
      < Quantity>{ stats.views}</Quantity>
    </StatItem>
    <StatItem>
      <Label>Likes </Label>
      < Quantity>{ stats.likes}</Quantity>
    </StatItem>
  </Stats>
</MainProfile>
    )
}