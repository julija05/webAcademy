import React, { useEffect  } from 'react';
import { AppRouter } from '../routing/';

function App() {
  useEffect(() => {
    document.title = "Multi page";
  }, []);

  return (
   <AppRouter/>
  );
}

export default App;