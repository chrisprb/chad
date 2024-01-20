'use client'
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function BasicThemeToogle(){
   const {setTheme} = useTheme()
   return(
      <Button onClick={()=>setTheme("light")}>Dark Mode</Button>
   )
}