import Image from "next/image";

export default function Home() {
	return (
		<main className="flex justify-center h-screen">
			<section className="flex md:flex-row md:gap-5 items-center">
				<div>
					<h1 className="text-2xl">Hey, I'm Pum</h1>
					<p>I am a developer from Austria.<br/> I currently focus on websites and the backend logic for them.<br/> In my free
						time I like to cook, ski and travel.</p>
				</div>
				<Image src={"/avatar.png"} width={200} height={200} className="rounded-full"/>
			</section>
		</main>
	)
}