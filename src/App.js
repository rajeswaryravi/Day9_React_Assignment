import logo from './logo.svg';
import './App.css';
//import * as React from 'react';
import React, { Component } from 'react';

// const title = 'Hello React';
// function App() {
//   return (
//     <div className="App">
//       {title}
//     </div>
//   );
// }
// const getUser = () => {
//   return Promise.resolve({ id: '1', name: 'Robin' });
// };
// function App() {
//   const [search, setSearch] = React.useState('');
//   const [user, setUser] = React.useState(null);

//   React.useEffect(() => {
//     const loadUser = async () => {
//       const user = await getUser();
//       setUser(user);
//     };

//     loadUser();
//   }, []);

//   function handleChange(event) {
//     setSearch(event.target.value);
//   }


//   return (
//     <div>
//        {user ? <p>Signed in as {user.name}</p> : null}
//       <Search value={search} onChange={handleChange}>
//         Search:
//       </Search>

//       <p>Searches for {search ? search : '...'}</p>
//     </div>
//   );
// }

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input
//         id="search"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </div>
//   );
// }
export const doIncrement = prevState => ({
  counter: prevState.counter + 1

});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);

  }
  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;
    return (<div><h4>My Counter</h4><Counter counter={counter} /><button type="button" className="increment" onClick={this.onIncrement}>
      Increment</button>&nbsp;<button type="button" className="decrement" onClick={this.onDecrement}>
        Decrement</button></div>
    );
  }
  
}

export const Counter = ({ counter }) => <p>{counter}</p>;
export default App;

