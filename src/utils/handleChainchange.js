export const handleChainChange = async (setWeb3State) => {
    let chainIdHEx = await window.ethereum.request({ method: 'eth_chainId' });
    let chainId = parseInt(chainId, 16);
    setWeb3State((prevState)=>({...prevState, chainId}));
}