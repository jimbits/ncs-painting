import {Button} from '@/components/button'

export default function Preview() {
	return (
		<section className="grid grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 py-6 text-center md:gap-x-28 md:py-16 lg:grid-cols-2 lg:text-start max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
			<div className="flex w-full max-w-2xl items-center justify-center justify-self-center rounded-2xl bg-slate-50 py-20 md:py-32 lg:justify-self-end">
				<img
					src="https://www.tailframes.com/images/illustration.webp"
					alt=""
					width={183}
					height={345}
					className="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
				/>
			</div>
			<div className="flex flex-col gap-6 justify-self-center md:gap-12 lg:justify-self-start">
				<div className="flex max-w-lg flex-col gap-6">
					<p className="text-sm font-semibold uppercase text-slate-500">Tailframes</p>
					<h3 className="text-4xl font-semibold text-slate-950 md:text-5xl">
						Copy & Paste.
						<br />
						It's that simple.
					</h3>
					<p className="text-lg font-normal tracking-tight text-slate-500">
						We've done it carefully and simply. The elements work well together to create stunning
						landings.
					</p>
				</div>
				<div>
					<Button size="large">Get a Template</Button>
				</div>
			</div>
		</section>
	)
}
