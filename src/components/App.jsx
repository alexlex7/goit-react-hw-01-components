import Profile from './Profile';
import Statistics from './statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../data/user';
import data from '../data/data';
import friendsData from '../data/friends';
import transactionsData from '../data/transactions';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 12,
    //   textTransform: 'uppercase',
    //   color: '#010101',
    // }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
};
