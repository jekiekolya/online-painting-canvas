// import { Children } from "react";
import { Container } from './App.styled';

import { Profile } from './Profile/Profile';

import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// Import data
import user from '../data/user';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <Container>
      <div>Ex-1</div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <div>Ex-2</div>
      <Statistics title="Upload stats" stats={data} />
      <div>Ex-3</div>
      <FriendList friends={friends} />
      <div>Ex-4</div>
      <TransactionHistory items={transactions} />
    </Container>
  );
};
