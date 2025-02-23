import {useFetch} from "../hooks/index.js";
import {memo} from "react";

export const Small = memo(({value}) => {
  console.log('Me volvi a generar')
  
  const {data} = useFetch(`https://pokeapi.co/api/v2/pokemon/1`)
  console.log(data)
  
  return (
    <small>{value}</small>
  )
})