import React, { Suspense, lazy, Fragment } from 'react';
import ReactDOM from 'react-dom';
import FallBack from './components/Fallback/index';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NasaImgPage = lazy(() => import('./pages/NasaImg/index'));

ReactDOM.render(
  <Fragment>
    <Suspense fallback={<FallBack />}>
      <NasaImgPage></NasaImgPage>
    </Suspense>
  </Fragment>,
  document.getElementById('root'),
);
