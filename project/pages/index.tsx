import {GetServerSideProps} from "next";

export default function IndexPage() {
	return (
		<div>Home</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: "/Pum",
			permanent: true
		}
	}
}