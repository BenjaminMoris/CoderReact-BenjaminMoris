import { useState } from 'react'

const ItemCounter = () => {
const [count, setCount] = useState(0)
const sumar = () => {
    setCount(count + 1)
}
const restar = () => {
    setCount(count - 1)

    if (count <= 0) {
        setCount(0)
    }
}
return (
        
        <div>
            
            <button onClick={sumar}> + </button>
            <span> {count}  </span>
            <button onClick={restar}> - </button>

        </div>
        )
}

export default ItemCounter
