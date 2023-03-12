import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json'
import transactions from '../transactions.json';
import Profile from './profile';
import Statistics from './statistics';
import Friends from './friends';
import TransactionHistory from './transaction';


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
    <Statistics 
     title="Upload stats" 
     stats={data} 
    />
    <Friends friends={friends}/>
    <TransactionHistory transactions={transactions} />;
    </div>
  );
};
