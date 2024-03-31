import FriendListItem from '../components/FriendListItem/FriendListItem';
import css from '../components/FriendListItem/FriendListItem.module.css';

export default function FriendList ({ friends })  {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
