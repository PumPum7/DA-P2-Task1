import type { NextApiRequest, NextApiResponse } from 'next'
import ProfileData from "../../types/ProfileData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileData>
) {
  if (req.method === 'GET') {
    const { name } = req.query
    if (!name) {
      return res.status(200).json({
        name: "Pum",
        job: "Fullstack Developer",
        country: "Austria",
        focus: "building websites.",
        hobbies: "go skiing, cook and travel."
      })
    }
  }
  if (req.method === 'POST') {
    const body = req.body
  }
}
