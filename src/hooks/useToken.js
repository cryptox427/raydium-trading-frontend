import { useState } from "react";

const useToken = () => {
    const [tokenAddress, setTokenAddress] = useState('');
    return {
        tokenAddress,
        setTokenAddress
    }
}

export default useToken;