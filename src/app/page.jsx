import Foot from "./components/foot";
import LoginForm from "./components/loginForm";

export default function Home() {
  return (
   <section className="w-full h-screen">
    <div className="absolute w-full h-screen">
      <img className="w-full h-screen object-cover" src="/background.JPG" alt="" />
    </div>
   <div className="relative w-full h-screen flex justify-center items-center bg-black-100 bg-opacity-180">
   <LoginForm />
   </div>
   {/* <div className="relative pt-25 bottom-0 w-full   flex justify-center items-center ">
   <Foot />
   </div> */}
   </section>
  );
}
