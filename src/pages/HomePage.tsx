
import  { type FC } from "react"
import TextFiled from '../components/TextFiled'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


type ProductSchema = {
  image: string,
  title: string,
  descraption: string,
}

const ProductSchema = yup.object({
 image:yup.string().required("image is required!"),
 title:yup.string().required(),
 desciption:yup.string().required()
})



const HomePage: FC = () => {
  const { register } = useForm({
    resolver: yupResolver(ProductSchema)
  });
   return <>
    <h1>Add New Product!</h1>
    <div className="flex">
      <form className="flex-1" action="">
        <TextFiled  placeholder="image" />
        <TextFiled  placeholder="title" />
        <TextFiled  placeholder="descraption" />
        <Button>create</Button>
      </form>
    </div>
  </>
}

export default HomePage
