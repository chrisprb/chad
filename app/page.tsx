import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end  p-8">
      <Link href={"/login"}>
        <Button>Acceder</Button>
      </Link>
    </main>
  );
}
