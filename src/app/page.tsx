
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function Page() {
  return (
		<div className="p-4 border flex justify-center">
			<h1>This is a title</h1>
		</div>
	)
}
