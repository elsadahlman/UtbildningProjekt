import { useState } from 'react';
import Page from './Page';
import Filter from './Filter';

const App = () => {

  const [limit, setLimit] = useState(10);

  return (
    <>
      <Page title="Page 1" limit={limit}>
        Hej <b>Vite</b>
      </Page>

      <Filter onClick={(limit) => setLimit(limit)} />
    </>
  );
}
export default App