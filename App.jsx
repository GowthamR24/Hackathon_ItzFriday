import React from 'react';
import External from './External.jsx';
import Out from './Out.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            Displaying from App.jsx file
            <External/>
            <Out />
         </div>
      );
   }
}

export default App;
