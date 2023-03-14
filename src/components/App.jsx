import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json'
import transactions from '../data/transactions.json';
import Profile from './user-profile/profile';
import Statistics from './statistics/statistics';
import { Friendlist } from './friends/friends';
import { TransactionHistory } from './transactions/transaction';


export const App = () => {
  return (
    <div className='app'>
    <Profile 
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
    />
     <Statistics title="Upload Stats" stats={data} />
    <Friendlist friends={friends} friendsCards={5}/>
    <TransactionHistory transactions={transactions} />;
    </div>
  );
};
