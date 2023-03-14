import css from './friendlist.module.css';
import { FriendItem } from './friends-item';
import PropTypes from 'prop-types';

export const Friendlist = ({ friends, friendsCards }) => {
  const FriendsToDisplay = [];

  for (let i = 0; i < friendsCards; i++) {
    FriendsToDisplay.push(friends[i]);
  }

  return (
    <ul className={css.friend_list}>
      {FriendsToDisplay.map(friend => {
        return <FriendItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.array,
  friendsCards: PropTypes.number,
};