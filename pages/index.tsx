import { Geist, Geist_Mono } from "next/font/google";
import Calcimc from "./calcimc/Calcimc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className='flex w-full h-screen justify-start items-start'>
      <Calcimc/>
    </div>
  );
}
