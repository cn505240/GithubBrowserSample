import React from 'react';
import { User } from '../clients/github/types';
import './Accounts.scss';

interface AccountsProps {
  users: User[]
  setSelectedUser: (user: User) => void
}

function Accounts(props: AccountsProps) {
  return (
    <div className="Accounts">
      <ul>
        {props.users.map((user) => (
          <li key={user.login} className="Accounts-user" onClick={() => props.setSelectedUser(user)}>
            <span>{user.login}</span>
            <span>{user.name}</span>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default Accounts;