import { ReactNode, type FC } from 'react'

//type tarife kardan jadide react
interface  ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "outline" | "text";
    children?:ReactNode;
}
  
const buttonStyles = {
    contained: " hover:bg-white active:bg-black  bg-orange-500 text-slate-50",
    outline: "border-green-600  bg-transparent border hover:border-green-700 active:border-green-800  text-blue-800 ",
    text: "bg-slate-50",
}


const Button: FC<ButtonProps> = ({children, variant, ...restProps}) => {

  return (
    <button
      {...restProps} 
       className={` ${buttonStyles[variant ?? "text"]} ${restProps.className} py-2.5 px-5 rounded-md  outline-none w-full`}>
      {children}
    </button>   
  )
}

export default Button

