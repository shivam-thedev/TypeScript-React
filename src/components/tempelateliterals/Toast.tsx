//we are craeting a position like toastify

type HorizonalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'
type ToastPosition = {
    position:Exclude<`${HorizonalPosition}-${VerticalPosition}`,'center-center'>|'center'
}
export const  Toast = ({position}:ToastPosition) => {
    return <div>Toast Notification Position - {position}</div>
}