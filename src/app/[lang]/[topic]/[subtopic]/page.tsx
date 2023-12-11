import PodcastEmptyPlaceholder from "@/components/podcast-empty-placeholder";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}
export default function SubTopicPage () {
	return ( 
		<div
			className="h-full flex-col border-none p-0 data-[state=active]:flex">
			<div className="flex items-center justify-between">
				<div className="space-y-1">
					<h2 className="text-2xl font-semibold tracking-tight">
						New Episodes
					</h2>
					<p className="text-sm text-muted-foreground">
						Your favorite podcasts. Updated daily.
					</p>
				</div>
			</div>
			<Separator className="my-4" />
			<PodcastEmptyPlaceholder />
		</div>
	);
}
 