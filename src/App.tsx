// import Message from './message';

import List from './CSS-Modules/list';

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

// // Import Bootstrap CSS

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

// import React from 'react';
// import { AiOutlineHeart } from 'react-icons/ai';
// import Message from './pure-components/message';

// const App = () => {
//   return (
//     <div>
//       <Message />
//       <Message />
//       <Message />
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Expense List
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { categories } from './expense-tracker/categories';
// import ExpenseList from './expense-tracker/ExpenseList';
// import ExpenseFilter from './expense-tracker/ExpenseFilter';
// import ExpenseForm from './expense-tracker/ExpenseForm';

// const App = () => {
//   const [cartItem, setCartitem] = useState([
//     {
//       id: 1,
//       description: 'Bike',
//       amount: 100,
//       category: 'Groceries',
//     },
//     {
//       id: 2,
//       description: 'Food',
//       amount: 100,
//       category: 'Utility',
//     },
//     {
//       id: 3,
//       description: 'Food',
//       amount: 100,
//       category: 'Groceries',
//     },
//     {
//       id: 4,
//       description: 'Entertainement',
//       amount: 100,
//       category: 'Entertainment',
//     },
//     {
//       id: 5,
//       description: 'Travel',
//       amount: 100,
//       category: 'tility',
//     },
//   ]);

//   const [selectedCategory, setSelectedCategory] = useState('');
//   let visibleItems = cartItem;

//   if (selectedCategory === 'All') {
//     visibleItems = cartItem;
//   } else {
//     visibleItems = selectedCategory
//       ? cartItem.filter((e) => e.category === selectedCategory)
//       : cartItem;
//   }

//   return (
//     <div>
//       <div className="mb-3">
//         <ExpenseForm
//           onSubmit={(data) =>
//             setCartitem([...cartItem, { ...data, id: data.amount * 10 }])
//           }
//         />
//       </div>

//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategeory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         Expenses={visibleItems}
//         onDelete={(id) =>
//           setCartitem(cartItem.filter((item) => item.id !== id))
//         }
//       />
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// useForm
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import UseEffect from './useEffect/UseEffect';
// import EffectCleanup from './useEffect/EffectCleanup';

// const App = () => {
//   return (
//     <div>
//       <EffectCleanup />
//     </div>
//   );
// };

// export default App;

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// FETCHING DATA
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

import React, { useEffect, useRef, useState } from 'react';
import apiClient, { CanceledError } from './service/api-client';
import AddUserForm from './AddUserForm';
import { AxiosError } from 'axios';
import userService, { type } from './service/user-service';

const App = () => {
  const [users, setUser] = useState<type[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoader] = useState(false);
  const [AddBtn, setAddBtn] = useState(true);
  const [formState, setFormState] = useState(false);

  useEffect(() => {
    //The AbortController is a built-in Web API that allows cancelling asynchronous operations.
    // AbortController is a built-in JavaScript API that allows you to abort one or more web requests at once. When an AbortController is created, it generates an AbortSignal object which can be passed to a fetch() or XMLHttpRequest request as an option. If the AbortController.abort() method is called, it will signal the AbortSignal to abort the request. This can be useful for cancelling long-running or unnecessary requests to improve performance and user experience. In the code snippet you provided, the AbortController is used to create an AbortSignal object which is passed to the Axios request options as signal.
    setLoader(true);

    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUser(res.data);
        setLoader(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoader(false);
      });

    // Using async and await
    // const reqHandler = async () => {
    //   try {
    //     const res = await axios.get<type[]>(
    //       'https://jsonplaceholder.typicode.com/users'
    //     );
    //     setUser(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };
    // reqHandler();
    return () => cancel();
  }, []);

  const deleteUser = (user: type) => {
    const originalUsers = [...users];
    setUser(users.filter((u) => u.id !== user.id));

    apiClient
      .delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .catch((err) => {
        setError((err as AxiosError).message);
        setUser(originalUsers);
      });
  };

  const addUserBtn = () => {
    setFormState(true);
    setAddBtn(false);
  };

  const addUser = (user: type) => {
    setFormState(false);
    setAddBtn(true);
    const originalUsers = [...users];
    apiClient
      .post('/users', user)
      .then((res) => {
        setUser([res.data, ...users]);
      })
      .catch((err) => {
        setError((err as AxiosError).message);
        setUser(originalUsers);
      });
  };

  const UpdateUser = (user: type) => {
    const originalUsers = [...users];
    const udatedUser = { ...user, name: user.name + ' updated' };
    setUser(users.map((u) => (u.id === user.id ? udatedUser : u)));

    apiClient.patch(`/users/${user.id}`, udatedUser).catch((err) => {
      setError((err as AxiosError).message);
      setUser(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      {AddBtn && (
        <button className="btn btn-primary mb-3" onClick={() => addUserBtn()}>
          Add User
        </button>
      )}
      {formState && <AddUserForm addUser={addUser} />}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteUser(user)}
              >
                Delete{' '}
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => UpdateUser(user)}
              >
                Update{' '}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
