import React, { useEffect, useState } from 'react';
import { Message } from '@nx-react-express-seed/api-interfaces';
import { HelloUser } from './components/hello-user'
import {UserEntity} from "./entities/user-entity";

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  const user: UserEntity = {
    userName: 'Robert',
    userId: '123456'
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to react-express-seed! Ciao</h1>
        <HelloUser {...user}/>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
