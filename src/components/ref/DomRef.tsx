import { useEffect, useRef } from "react"

export const DomRef = () => {
    const inputRef= useRef<HTMLInputElement>(null!)//if u sure that ur ref is never null,we will add non -null assertion
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}