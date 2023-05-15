// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import {CiButton,CiText } from '@portal/common-ui'
import React, { useContext } from 'react';
import { UserContext } from '@portal/common-context';



export function App() {
  const { firstName } = useContext(UserContext);

  return (
    <div>
      <CiText text={`insights mfe text for ${firstName}`}/>
      <CiButton text={'insights mfe button'}/>
      <NxWelcome title="insights" />
    </div>
  );
}

export default App;
