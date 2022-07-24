import {GetServerSideProps} from "next";

export default function IndexPage(props: {host: string, url: string}) {
	console.log(props)
	return (
		<div>Home</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	return {
		props: {
			host: context.req.headers.host,
			url: context.req.url
		}
	}
}