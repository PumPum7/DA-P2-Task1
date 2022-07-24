import type {NextApiRequest, NextApiResponse} from 'next'
import ProfileData from "../../types/ProfileData";

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const MONGODB_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xors0br.mongodb.net/?retryWrites=true&w=majority`;
const dbName = "profileWebsite"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ProfileData | {message: string}>
) {
	if (req.method === 'GET') {
		const {name} = req.query
		if (!name) {
			res.status(200).json({
				name: "Pum",
				job: "Fullstack Developer",
				country: "Austria",
				focus: "building websites.",
				hobbies: "go skiing, cook and travel.",
				avatar: "https://cdn.discordapp.com/attachments/363344471166943252/1000840915528720514/690bcd19-1b91-4c90-b191-15da55f2edf4.png"
			})
			return
		}

		// find profile or return 404
		const client = new MongoClient(MONGODB_URL);

		client.connect(async function (err: any, client: { db: (arg0: string) => any; }) {
			assert.equal(null, err)

			const db = client.db(dbName)

			const cursor = db.collection('profiles').find({name: name});
			const count = await cursor.count();

			if (count < 1) {
				res.status(404).json({
					message: "No profiles found."
				})
				return
			}
			const data = await cursor.toArray()
			res.status(200).json({
				country: data[0].country, focus: data[0].focus, hobbies: data[0].hobbies, job: data[0].job, name: data[0].name, avatar: data[0].avatar

			})
		})
	}
	if (req.method === 'POST') {
		const body = req.body

		const client = new MongoClient(MONGODB_URL);

		client.connect(async function (err: any, client: { db: (arg0: string) => any; }) {
			assert.equal(null, err)

			const db = client.db(dbName)

			const result = await db.collection("profiles").insertOne(body)

			if (result.insertedId) res.status(200).json({
				message: "Successfully inserted profile"
			})
			else res.status(400).json({
				message: "Error inserting profile"
			})
		})
	}
}
