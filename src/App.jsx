import Web3StateProvider from './context/WalletProvider'
import './App.css'
import CandidateRegistration from './pages/CandidateRegistration/CandidateRegistration'
import VoterRegistration from './pages/VoterRegistration/VoterRegistration'

function App() {

  return (
    <div> 
  <Web3StateProvider>
      {/* <CandidateRegistration /> */}
      <VoterRegistration />
  </Web3StateProvider>
    </div>
  )
}

export default App
