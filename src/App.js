import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';

const profile = {
  fullName: "Amine Beloud",
  image: '/logo512.png',
  bio: "ingénieur en marketing",
  /*profession: 20*/
}

function App() {
  return (
    <>
    <Profile {...profile}/>
    </>
  );
}

export default App;
