import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}
 
export default function Page(){
	return ( 
		<>
			<div className="block w-[1000px] h-32 bg-green-300">This is a lang layout</div>
		</>
	 );
}
 