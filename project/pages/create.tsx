import {useRef} from "react";
import ProfilePage from "../components/Profile";

export default function Create() {
	const handleSubmit = async (event: any) => {
		event.preventDefault()

		const data = {
			name: event.target.name.value,
			job: event.target.job.value,
			country: event.target.country.value,
			focus: event.target.focus.value,
			hobbies: event.target.hobbies.value,
			avatar: event.target.avatar.value
		}

		const JSONdata = JSON.stringify(data)

		const endpoint = '/api/profile'

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSONdata,
		}
		const response = await fetch(endpoint, options)

		if (response.status === 200) {
			alert("Successfully created your website")
		} else {
			alert("Error creating your website. Please try a different name.")
		}
	}

	const nameRef = useRef<HTMLInputElement>(null)
	const pictureRef = useRef<HTMLInputElement>(null)
	const focusRef = useRef<HTMLInputElement>(null)
	const hobbyRef = useRef<HTMLInputElement>(null)
	const countryRef = useRef<HTMLInputElement>(null)
	const jobRef = useRef<HTMLInputElement>(null)

	return (
		<main className="flex flex-col md:flex-row items-center justify-center h-screen gap-5">
			<section>
				<form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
					<h1 className="text-2xl">Create your page</h1>

					<label htmlFor="name" className="text-lg">Name</label>
					<input type="text" id="name" name="name" required placeholder="Pum" className="text-nord2 rounded-full p-2"
					       ref={nameRef}/>

					<label htmlFor="avatar" className="text-lg">A picture of you</label>
					<input type="url" id="avatar" name="avatar" required placeholder="https://example.com/image.png"
					       pattern="https://.*.png" title="The picture has to be a valid url ending with .png"
					       className="text-nord2 rounded-full p-2" ref={pictureRef}/>

					<label htmlFor="job" className="text-lg">Your current job</label>
					<input type="text" id="job" name="job" required placeholder="Developer"
					       className="text-nord2 rounded-full p-2" ref={jobRef}/>

					<label htmlFor="focus" className="text-lg">Your current focus</label>
					<input type="text" id="focus" name="focus" required placeholder="creating awesome stuff..."
					       className="text-nord2 rounded-full p-2" ref={focusRef}/>

					<label htmlFor="hobbies" className="text-lg">Your hobbies</label>
					<input type="text" id="hobbies" name="hobbies" required placeholder="exploring the world"
					       className="text-nord2 rounded-full p-2" ref={hobbyRef}/>

					<label htmlFor="country" className="text-lg">Your country</label>
					<input type="text" id="country" name="country" required placeholder="America"
					       className="text-nord2 rounded-full p-2" ref={countryRef}/>

					<button type="submit" className="rounded-full bg-nord9 hover:shadow-xl p-2 text-nord5 mt-2">Submit</button>
				</form>
			</section>
			<section>
				<h1 className="text-2xl">Preview:</h1>
				<ProfilePage name={nameRef.current ? nameRef.current.value : "<Name>"}
				             job={jobRef.current ? jobRef.current.value : "<Job>"}
				             country={countryRef.current ? countryRef.current.value : "<Country>"}
				             focus={focusRef.current ? focusRef.current.value : "<Focus>"}
				             hobbies={hobbyRef.current ? hobbyRef.current.value : "<hobbies>"} avatar={pictureRef.current ? pictureRef.current.value : "<Avatar>"}/>
			</section>
		</main>
	)
}