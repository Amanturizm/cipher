import React from 'react';
import Toolbar from './components/UI/Toolbar/Toolbar';
import Cipher from './features/cipher/Cipher';

const App = () => (
  <>
    <header>
      <Toolbar />
    </header>

    <main style={{ marginTop: 90 }}>
      <Cipher />
    </main>
  </>
);

export default App;