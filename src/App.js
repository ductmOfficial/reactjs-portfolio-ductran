// third-party
import { SWRConfig } from 'swr';

// project imports
import { ManagedUIContext } from 'context/uiContext';
import Routes from 'routes';
import fetcher from 'utils/fetcher';

const App = () => (
  <SWRConfig
    value={{
      refreshInterval: 0,
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      fetcher,
    }}
  >
    <ManagedUIContext>
      <Routes />
    </ManagedUIContext>
  </SWRConfig>
);

export default App;
