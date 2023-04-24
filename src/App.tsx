// import Message from './message';

// // function App() {
// //   return (
// //     <div>
// //       <Message />
// //     </div>
// //   );
// // }

// function Greeting() {
//   let items = [
//     'New York',
//     'Delhi',
//     'Mumbai',
//     'San Francisco',
//     'Tokyo',
//     'Sydeny',
//   ];

//   let Greeting = [
//     'Hi',
//     'Hello',
//     'Good Morning',
//     'Good Afternoon',
//     'Good Evening',
//   ];

//   return (
//     <>
//       <Message
//         items={items}
//         heading={'Cities'}
//         onSelectItem={(item) => console.log(item)}
//       />
//       <Message
//         items={Greeting}
//         heading="Greetings"
//         onSelectItem={(item) => console.log(item)}
//       />
//     </>
//   );
// }

// export default Greeting;

// import React from 'react';
// import Alert from './alert';

// const App = () => {
// return (
//   <div>
//     <Alert>
//       <h1>Hello World </h1>
//     </Alert>
//   </div>
// );
// };

// export default App;

// import React, { useState } from 'react';
// import DismissibleAlert from './dismissibleAlert';
// // import BtnClose from './btnClose';
// import Button from './button';

// // // Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

// const App = () => {
//   const [alertVisible, alertManager] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <DismissibleAlert onClick={() => alertManager(false)}>
//           Try again later...!!!
//         </DismissibleAlert>
//       )}

//       <Button color="danger" onBtnClick={() => alertManager(true)}>
//         Button
//       </Button>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import List from './CSS-in-JS/list';

const App = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default App;
