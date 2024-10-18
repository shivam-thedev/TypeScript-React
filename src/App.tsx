import { Greet } from "./components/Greet"
import './App.css'
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { Container } from "./components/Container"
import { LoggedIn } from "./components/state/LoggedIn"
import { User } from "./components/state/User"
import { Counter } from "./components/state/Counter"
import { Box } from "./components/context/Box"
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { UserContextProvider } from "./components/context/UserContext"
import { Userr } from "./components/context/Userr"
import { DomRef } from "./components/ref/DomRef"
import { MutableRef } from "./components/ref/MutableRef"
import { RandomNumber } from "./components/restriction/RandomNumber"
import { Toast } from "./components/tempelateliterals/Toast"
import { CustomButton } from "./components/html/Button"
import { CustomInput } from "./components/html/Input"
import { Generics } from "./components/generics/Generics"
function App() {
  const PersonName={
    first:"Shivam",
    last:"Chaurasiya"
  }

  const nameList =[
    {
      first:"Shivam",
      last:"Chaurasiya"
    },
    {
      first:"Naman",
      last:"Jain"
    },
    {
      first:"Tarun",
      last:"Sharma"
    }
  ]
  return (
    <div>
      <Greet name="Shivam" messageCount={5} isLoggedIn={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>I am heading</Heading>
      <Oscar>
        <Heading>Oscar goes to India</Heading>
      </Oscar>
      <Button handleClick={(event,id) => console.log("clicked",event,id)}/><br/><br/>
      <Input value="" handleChange={event=>console.log(event)} /><br/><br/>
      <Container style={{border:'1px solid white',padding:'1rem'}} /><br/>
      <LoggedIn/><br/>
      <User/><br/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <Userr/>
      </UserContextProvider>
      <DomRef/>
      <MutableRef/>
      <RandomNumber value={1} isPositive  />
      <Toast position='center' />
      <CustomButton className="text-2xl bg-slate-500" onClick={()=>console.log("me hoo don")}>Click kr bhai</CustomButton>
      <CustomInput onChange={()=>console.log("I am changed")} />
      //sometimes ts can not infer by own so we have tell the ts while using 
        <Generics <{id:number,name:string, age?:number}>
            data={[
                { id: 1, name: "Tinku", },
                { id: 2, name: "Pinku" },
            ]}
            getKey={person => person.id}
            getRow={person => <div>{person.name}</div>}
        />
    </div>
    
  )
}

export default App
