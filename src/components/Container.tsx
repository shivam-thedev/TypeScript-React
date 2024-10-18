type ContainerProp ={
    style:React.CSSProperties
}
export const Container = (props:ContainerProp) =>{
    return (
        <div style={props.style} >
            text content goes here
        </div>
    )
}