import React, { useEffect ,useState} from 'react'

function Xyz() {
    const [count, setCount] = useState(1);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here
  return (
    
     <div>Hello {count}</div> 
    
  )
}

export default Xyz
