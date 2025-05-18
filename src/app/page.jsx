import Foot from "./components/foot";
import LoginForm from "./components/loginForm";

export default function Home() {
  return (
   <section className="w-full ">
    <div className="absolute w-full ">
      <img className="w-full  object-cover" src="/background.JPG" alt="" />
    </div>
   <div className="relative w-full h-screen flex justify-center items-center bg-black-100 bg-opacity-180">
   <LoginForm />
   </div>
   <div className="relative pt-38 bottom-0 w-full   flex justify-center items-center ">
   <Foot />
   </div>
   </section>
  );
}
