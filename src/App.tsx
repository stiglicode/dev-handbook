import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import axios from 'axios';
import axiosConfig from './axios.config';
import { Button } from '@components/Button';

export function App() {
  axios.defaults = axiosConfig;
  const f = {
    a: 'v',
    c: 'aa',
    gf: 's'
  };

  return (
    <div>
      <h1>Hello world</h1>
      <Button />
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  );
}
