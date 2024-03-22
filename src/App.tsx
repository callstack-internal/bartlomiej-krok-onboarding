import React from 'react';

import { RootNavigation } from './navigation';
import { QueryProvider } from './network/queries/QueryProvider';

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <RootNavigation />
    </QueryProvider>
  );
}

export default App;
