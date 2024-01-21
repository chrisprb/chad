import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SigninPage() {
   return (
      <div className="grid grid-cols-2 min-w-full min-h-screen p-12">
         <div className=" bg-black rounded-xl">
         </div>
         <div className="flex flex-col items-center pt-20">
            <p className=" font-semibold text-2xl">Iniciar sesion</p>
            <p className=" text-gray-500 text-sm mt-4">Ingresa tus credenciales para acceder a la plataforma</p>
            <div className=" w-8/12 space-y-4 mt-14">
               <Input placeholder="Usuario" />
               <Input type="password" placeholder="Contraseña" />
            </div>
            <Button className="mt-12">Acceder</Button>
            <div className="px-28 mt-8">
               <p className=" text-gray-400 text-sm text-center  ">
                  Al iniciar sesion te comprometes a seguir las guias de proteccion de datos.
               </p>
            </div>
         </div>
      </div>
   )
}