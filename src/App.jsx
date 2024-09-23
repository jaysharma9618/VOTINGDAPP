import Web3StateProvider from './context/WalletProvider'
import './App.css'
import CandidateRegistration from './pages/CandidateRegistration/CandidateRegistration'
import VoterRegistration from './pages/VoterRegistration/VoterRegistration'
import DisplayCandidate from './components/displayCandidate/displayCandidate'
import DisplayVoter from './components/displayVoter/DisplayVoter'

function App() {

  return (
    <div> 
  <Web3StateProvider>
      {/* <CandidateRegistration /> */}
      {/* <VoterRegistration /> */}
      {/* <DisplayCandidate /> */}
      <DisplayVoter />
  </Web3StateProvider>
    </div>
  )
}

export default App
