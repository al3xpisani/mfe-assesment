import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const TodoCreate = React.lazy(() => import('mfe_app_create/CreateApp'));

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoCreate />
    </Suspense>
  </>
);
const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />);

export default App;
