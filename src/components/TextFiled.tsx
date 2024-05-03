import { ReactNode, type FC, useId } from "react"


//halet modren tarife type dakhale react
interface TextFiledProps extends React.InputHTMLAttributes<HTMLInputElement>{
    lable?: ReactNode; 
    helperText?: ReactNode | string;
    icon?: ReactNode;
    validation?: any;
}


const TextFiled: FC<TextFiledProps> = ({ lable, icon, helperText, validation, ...restProps }) => {
  //hook useId => id unike be shoma mide 
  const id = useId();
                                                                                             
  return (
    <div className="w-full pb-3">
    {(<label htmlFor={id}>{lable}</label>)}
    <div className="bg-slate-100 flex border-2 border-transparent  rounded-md items-center focus-within:border-orange-400 focus-within:border-2 px-1">
      <span className="fill-slate-500"> {icon} </span>
      <input 
      className="w-full h-full py-3 px-2 bg-transparent outline-none border-none"
      {...restProps}
      id={id}
      {...validation}
     />
    </div>
   {helperText &&  <p className="text-slate-600 pt-0.5 text-sm px-2">{helperText}</p>}
  </div>
  )
}

export default TextFiled