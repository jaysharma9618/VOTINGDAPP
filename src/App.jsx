import Web3StateProvider from './context/WalletProvider'
import './App.css'
import Child from './Child'

function App() {

  return (
    <div> 
  <Web3StateProvider>
      <Child/>
  </Web3StateProvider>
    </div>
  )
}

export default App
