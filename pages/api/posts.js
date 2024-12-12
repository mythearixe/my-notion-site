import { notion } from '../../lib/notion';

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(req, res) {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    res.status(200).json(response.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
