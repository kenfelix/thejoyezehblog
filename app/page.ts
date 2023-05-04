"use client"
import { useRouter } from 'next/navigation';


 
const Home= () => {
  return (
      useRouter().push("/home")
   );
}
 
export default Home;
