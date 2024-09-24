import Web3StateProvider from './context/WalletProvider'
import './App.css'
import CandidateRegistration from './pages/Candidate/CandidateRegistration'
import VoterRegistration from './pages/Voter/VoterRegistration'
import DisplayCandidate from './pages/Candidate/displayCandidate'
import DisplayVoter from './pages/Voter/DisplayVoter'
import { routes } from './routes/routes'
import { RouterProvider } from 'react-router-dom'
function App() {

  return (
    <div> 
  <Web3StateProvider>
      {/* <CandidateRegistration /> */}
      {/* <VoterRegistration /> */}
      {/* <DisplayCandidate /> */}
      {/* <DisplayVoter /> */}
    <RouterProvider router={routes} ></RouterProvider>
  </Web3StateProvider>
    </div>
  )
}

export default App
