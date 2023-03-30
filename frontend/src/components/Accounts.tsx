import React from 'react';
import { User } from '../clients/github/types';
import './Accounts.scss';

interface AccountsProps {
  users: User[]
}

function Accounts(props: AccountsProps) {
  return (
    <div className="Accounts">
      <ul>
        {props.users.map((user) => (
          <li>
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