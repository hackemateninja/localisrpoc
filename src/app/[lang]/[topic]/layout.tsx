import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
	Tabs,
	TabsList,
	TabsTrigger
} from "@/components/ui/tabs"
import { ReactNode } from "react"

const Layout = ({children}:{children: ReactNode}) => {
  return (
		<div className="col-span-3 lg:col-span-4 lg:border-l">
			<div className="h-full px-4 py-6 lg:px-8">
				<Tabs defaultValue="music" className="h-full space-y-6">
					<div className="space-between flex items-center">
						<TabsList>
							<TabsTrigger value="music" className="relative">
								Music
							</TabsTrigger>
							<TabsTrigger value="podcasts">Podcasts</TabsTrigger>
							<TabsTrigger value="live" disabled>
								Live
							</TabsTrigger>
						</TabsList>
						<div className="ml-auto mr-4">
							<Button>
								<PlusCircledIcon className="mr-2 h-4 w-4" />
								Add music
							</Button>
						</div>
					</div>
					{children}
				</Tabs>
			</div>
		</div>
	)
}
export default Layout