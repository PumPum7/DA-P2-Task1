import Link from "next/link";
import ProfilePage from "../components/Profile";
import {GetServerSideProps} from "next";
import ProfileData from "../types/ProfileData";

export default function Home(props: ProfileData) {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<ProfilePage country={props.country} hobbies={props.hobbies} name={props.name} job={props.job}
			             focus={props.focus}/>
			<section>
				<Link href="/create">
					<a className="rounded-full bg-nord9 hover:shadow-xl p-2 text-white">Create your own page</a>
				</Link>
			</section>
		</main>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {

	const host = context.req.headers.host


	const res = await fetch(process.env.NODE_ENV === "production" ? "https://" : "http://" + host + "/api/profile")

	const data = await res.json()

	return {
		props: data
	}
}