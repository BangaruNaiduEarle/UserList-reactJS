import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Naidu',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Radha',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Mouni',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Mohnish',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    ImageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Pardhu',
    role: 'Software Developer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User Lists</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
      ;
    </ul>
  </div>
)

export default App
