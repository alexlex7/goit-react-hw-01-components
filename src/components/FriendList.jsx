import PropTypes from 'prop-types';
import FriendsItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <FriendsItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
