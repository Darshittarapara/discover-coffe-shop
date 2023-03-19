export interface BannerProps {
    buttonText : string
    handlerOnClick : () => void
}

export interface InputProps {
    type?:string
    placeHolder:string
    name:string
    value:string
    onChangeHandler:(value:any) => void 
}