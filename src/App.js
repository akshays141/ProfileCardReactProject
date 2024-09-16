
import './App.css';
import Profilecard from './Profilecard';

function App() {

  const user={
    name:'Ganesh',
    age:30,
    location:'karve nagar, Pune',
    bio:'Software developer with a passion for building web app. Software developers design and write code for new software applications.'
  }

  return (
    <div className="App">
       <Profilecard name={user.name} age={user.age} location={user.location} bio={user.bio}/>
    </div>
  );
}

export default App;
