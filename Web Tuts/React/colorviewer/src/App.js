import Background from "./Background";
import Input from "./Input";
import { useState } from 'react';


function App() {

  const [background, changeBackground] = useState('Empty Value');

  return (
    <div className="App">
      <Background
      background={background}
      />
      <Input
      background={background}
      changeBackground={changeBackground}
      />
    </div>
  );
}

export default App;
