import Message from './message';

// function App() {
//   return (
//     <div>
//       <Message />
//     </div>
//   );
// }

function Greeting() {
  let items = [
    'New York',
    'Delhi',
    'Mumbai',
    'San Francisco',
    'Tokyo',
    'Sydeny',
  ];

  let Greeting = [
    'Hi',
    'Hello',
    'Good Morning',
    'Good Afternoon',
    'Good Evening',
  ];

  return (
    <>
      <Message items={items} heading={'Cities'} />
      <Message items={Greeting} heading="Greetings" />
    </>
  );
}

export default Greeting;
