import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { UserProvider, useUserContext } from './context';
import { Navigation } from './routes';

function AppContent() {
  const { isLoggedIn } = useUserContext();

  return (
    <>
      <Toaster position="top-right" richColors duration={1500} />
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppContent />
      </UserProvider>
    </div>
  );
}

export default App;
