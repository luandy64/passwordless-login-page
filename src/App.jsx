import React from 'react';
import Routes from './Routes';

// const App = () => {
//     return (
//         <div className="App">
//             <Routes />
//         </div>
//     )
// }

function App() {
    return (
        <div className="App">
            <Routes />
        </div>
    )
}

export default App;
// import './App.css'
// import React, { useState } from 'react';

// var isNew = true;

// const switchScreen = e => {
//     e.preventDefault();
//     isNew = !isNew;
// }

// const SignUp = () => {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleSignUp = e => {
//         e.preventDefault();
//         console.log({username, password})
//     }

//     return (
//         <div id="signup-wrapper">
//             <form onSubmit={handleSignUp}>
//                 <label>
//                     <p>Username</p>
//                     <input 
//                         type="text"
//                         onChange={e => setUserName(e.target.value)}
//                         />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input 
//                         type="password"
//                         onChange={e => setPassword(e.target.value)}
//                         />
//                 </label>
//                 <div>
//                     <button type="submit">Sign In</button>
//                 </div>
//             </form>
//             <form onSubmit={switchScreen}>
//                 <div>
//                     <button type="submit">Log In Instead</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// const Login = () => {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();

//     const handleLogIn = e => {
//         e.preventDefault();
//         console.log({username, password})
//     }

//     return (
//         <div id="login-wrapper">
//             <form onSubmit={handleLogIn}>
//                 <label>
//                     <p>Username</p>
//                     <input 
//                         type="text"
//                         onChange={e => setUserName(e.target.value)}
//                         />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input 
//                         type="password"
//                         onChange={e => setPassword(e.target.value)}
//                         />
//                 </label>
//                 <div>
//                     <button type="submit">Log In</button>
//                 </div>
//             </form>
//         </div>
//     )
// };

// export default function App() {
//   return (
//     <div>
//         {isNew ? <SignUp /> : <Login />}
//     </div>
//   )
// }
