import ProfileData from "../types/ProfileData";


export default function ProfilePage(props: ProfileData) {
	return (
		<section className="flex flex-row md:gap-5 items-center">
			<div>
				<h1 className="text-2xl">Hey, I&apos;m {props.name}</h1>
				<p>I am a {props.job} from {props.country}.<br/>
					I currently focus on {props.focus}<br/>
					In my free time I like to {props.hobbies}</p>
			</div>
			<picture>
				<source srcSet={props.avatar} type="image/png" />
				<img src={props.avatar} width={200} height={200} className="rounded-full" alt={"Avatar Image"} />
			</picture>
		</section>
	)
}