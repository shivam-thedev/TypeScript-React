import { PersonProp } from "./Person.types"
export const Person = (props:PersonProp) =>{
    return <div>{props.name.first} {props.name.last}</div>
}