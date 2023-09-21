import React, { Suspense } from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered">loading</div>}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
            <Route
              path=""
              element={
                <div className="centered">
                  <Link className="btn--flat" to={`comments`}>
                    Load Comments
                  </Link>
                </div>
              }
            />
            <Route path={`comments`} element={<Comments />} />
          </Route>
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
