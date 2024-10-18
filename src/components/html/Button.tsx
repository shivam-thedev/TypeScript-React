type ButtonProp={
    className:string,
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>

export const CustomButton = ({className,children,...props}:ButtonProp)=>{
    return <button className={`${className}`} {...props}>{children}</button>
}