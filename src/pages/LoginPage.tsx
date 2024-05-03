import { useState, type FC, useCallback, useMemo } from "react";
import TextFiled from "../components/TextFiled";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Cookies from "js-cookie"

type loginSchema = {
   email: string,
   password: string,
}

const  loginSchema = yup.object({
  email:yup.string().required().email("Email is wronge!"),
  password:yup.string().required().min(3)
})

//hare chie use shore bashe hook miadkm
const LoginPage: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //hook useform
  //object gonde mide  ke azine object mitonie andta kalido destrochachsre konie va azashe estafde konie  
    const {
      register,  
      handleSubmit, 
      formState: {errors} 
      //formState =  object error dare
      } = useForm({
         resolver: yupResolver(loginSchema)
      });
 
    
  //kilade token dare hader set kone  bafraset barye backend
    const headers = {
      ContentType: "application.json",
      Accept:  "application.json",
      Token:Cookies.get("token")
    }

    //barya mamiaze kardane yake done function  hook dariem tathate anvane usecallback
    //use callback = function cach bamone va dige rinder nashe barya barhaie bad 
    //useEffect hachie return namishe usecallback avaline fuction return mishie 
    //function use callback ye bar tarife mishie va tamome mishie mire  state dashte bashiem diga ajra namishe
      const handleLoginUser = useCallback(async (data: loginSchema): Promise<void>=>{
        try{ setIsLoading(true);
          //axios 
          const res = await axios.post("https://reqres.in/api/login" , data)
             console.log(res.data.tokon);
              Cookies.set("token" , res.data.token , {
                expires: 7
              })
              setIsLoading(false);
              }catch(err){
              console.log(err);
              setIsLoading(false)
              }
            }, []);

           //useMemo chizie ka az function return shode bahte mide 
           //masel usecallbacke va useEffect cache mishuie faghte barye bar aval ajra mishie 
           //vaghtie  fuction mikhaim use callbacke 
           //vaghtie expration mikhaiem useMema 
            const dataTest = useMemo (() =>{
              //heavy process
              return handleLoginUser;
            }, [])
            
            console.log(dataTest)

        //register =  bia be ine react hook form moarfie kone filed haie ke mikhaie  valdation chake bashe 
        //call back function = () => {}
        return <div className="h-screen bg-slate-300 flex">
        <img className="flex-1 w-5 object-cover " src="/picture.3.png" alt="" />
        <form 
         onSubmit={handleSubmit( handleLoginUser )}
         className="flex-1 px-4 flex items-center flex-col justify-center w-full" action="">
         <h3 className="w-full justify-center mb-6 ">welcome to your sweet Website!</h3>
         <TextFiled 
         lable="Enter your Email!"
         type="email" 
         placeholder="Exapmle:email@gmail.com"
         helperText={<>{errors.email?.message??""}</>}
         //valid update mikone
         validation={register("email")}
         />
        <TextFiled 
         lable="Enter your Password"
         helperText={<>{errors.password?.message??""}</>}
         placeholder="at least 8 charach "
         type="password"
         //valid update mikone 
        validation={register("password")}
      />
      <Button variant="contained" >{isLoading ? "...": "Submit"}</Button>
    </form>
  </div>;
}



export default LoginPage

