import Menu from "@/components/header/"
import Sidebar from "@/components/sidebar"

import { playlists } from "@/lib/data"
import Image from "next/image"
import { ReactNode } from "react"


function Layout({children}:{children: ReactNode}) {
	return (
		<>
			<div className="md:hidden">
				<Image
					src="/music-light.png"
					width={1280}
					height={1114}
					alt="Music"
					className="block dark:hidden"
				/>
				<Image
					src="/music-dark.png"
					width={1280}
					height={1114}
					alt="Music"
					className="hidden dark:block"
				/>
			</div>
			<div className="hidden md:block">
				<Menu />
				<div className="border-t">
					<div className="bg-background">
						<div className="grid lg:grid-cols-5">
							<Sidebar playlists={playlists} className="hidden lg:block" />
							{children}
							<div className='w-32 bg-yellow-300 h-32'>
								hello lang layout
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}

export default Layout