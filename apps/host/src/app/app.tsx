import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

import {UserContext} from '@portal/common-context';
import { useContext, useEffect } from 'react';
import { CiText } from '@portal/common-ui';

const SupplyChain = React.lazy(() => import('supply-chain/Module'));

const Insights = React.lazy(() => import('insights/Module'));

export function App() {
  const { firstName,setFirstName } = useContext(UserContext);

  useEffect(()=>{
    setFirstName('Amihay')
  },[setFirstName])

  return (
      <React.Suspense fallback={null}>
        <span>{`Hi ${firstName}`}</span>
        <CiText text={` host text for ${firstName}`}/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/supply-chain">SupplyChain</Link>
          </li>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<NxWelcome title="host" />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </React.Suspense>
  );
}

export default App;
