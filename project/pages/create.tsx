import {useRef} from "react";

export default function Create() {
	const handleSubmit = async (event: any) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault()

		// Get data from the form.
		const data = {
			first: event.target.first.value,
			last: event.target.last.value,
		}

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data)

		// API endpoint where we send form data.
		const endpoint = '/api/profile'

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		}

		// Send the form data to our forms API on Vercel and get a response.
		const response = await fetch(endpoint, options)

		// Get the response data from server as JSON.
		// If server returns the name submitted, that means the form works.
		const result = await response.json()
		alert(`Is this your full name: ${result.data}`)
	}

	const nameRef = useRef<HTMLInputElement>(null)
	const pictureRef = useRef<HTMLInputElement>(null)
	const focusRef = useRef<HTMLInputElement>(null)
	const hobbyRef = useRef<HTMLInputElement>(null)
	const countryRef = useRef<HTMLInputElement>(null)

	return (
		<main className="flex flex-col md:flex-row items-center justify-center h-screen gap-5">
			<section>
				<form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
					<h1 className="text-2xl">Create your page</h1>

					<label htmlFor="name" className="text-lg">Name</label>
					<input type="text" id="name" name="name" required placeholder="Pum" className="text-nord2 rounded-full p-2"
					       ref={nameRef}/>

					<label htmlFor="picture" className="text-lg">A picture of you</label>
					<input type="url" id="picture" name="picture" required placeholder="https://example.com/image.png"
					       pattern="https://.*.png" title="The picture has to be a valid url ending with .png"
					       className="text-nord2 rounded-full p-2" ref={pictureRef}/>

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
			</section>
		</main>
	)
}