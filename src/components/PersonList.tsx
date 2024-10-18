import { name } from "./Person.types"

type PerosonListProp={
    names:name[]
}
export const PersonList = (props:PerosonListProp) =>{
    return (
        <div>
            {props.names.map((name)=>(
                <h2 key={name.first}>{name.first} {name.last}</h2>
            ))}
        </div>
    )
}