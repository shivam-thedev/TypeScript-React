type RandomNumberType={
    value:number
}

type Positive = RandomNumberType & {
    isPositive:boolean,
    isNegative?:never,
    isZero?:never
}
type Negative = RandomNumberType & {
    isNegative:boolean,
    isPositive?:never,
    isZero?:never
}
type Zero = RandomNumberType & {
    isZero:boolean,
    isNegative?:never,
    isPositive?:never,
}

type RandomNumberProps= Positive|Negative|Zero

// type RandomNumberProps={
//     value:number,
//     isPositive:boolean,
//     isNegative:boolean,
//     isZero:boolean
// }

export const RandomNumber = ({value,isPositive,isNegative,isZero}:RandomNumberProps)=>{
    return (
        <div>
            {value} {isPositive && 'positve'} {isNegative && 'nagative'} {isZero && 'zero'}
        </div>
    )
}