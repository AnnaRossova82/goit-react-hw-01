import css from "./Profile.module.css"

export default function Profile ({ name, tag, location, image, stats }) {
    return (
      <div className={css.profileTotal}>
        <div >
          <img className={css.image} src={image} alt="User avatar" />
          <p className={css.name}>  {name}</p>
          <p className={css.describe}>@{tag}</p>
          <p className={css.describe}>{location}</p>
        </div>
  
        <ul className={css.status}>
          <li className={css.statusItems}>
            <span className={css.cardInfo}>Followers</span>
            <span className={css.cardNum}>{stats.followers}</span>
          </li>
          <li className={css.statusItems}>
            <span className={css.cardInfo}>Views</span>
            <span className={css.cardNum}>{stats.views}</span>
          </li>
          <li className={css.statusItems}>
            <span className={css.cardInfo}>Likes</span>
            <span className={css.cardNum}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );

  }
