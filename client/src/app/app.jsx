import React, { useEffect  } from 'react';
import { AppRouter } from '../routing/';

function App() {
  useEffect(() => {
    document.title = "Knownet";
  }, []);

  return (
   <AppRouter/>
  );
}

export default App;