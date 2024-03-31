import css from "./FriendListItem.module.css"

export default function FriendListItem ({ friend })  {
    const { avatar, name, isOnline } = friend;
    const statusText = isOnline ? 'Online' : 'Offline';
    const statusColor = isOnline ? 'green' : 'red';
  
    return (
      <div className={css.friendCard}>
        <img src={avatar} alt="Avatar" width="68" />
        <p className={css.name}>{name}</p>
        <p className={css.statusColor} style={{ color: statusColor }}>{statusText}</p>
      </div>
    );
  }
  
