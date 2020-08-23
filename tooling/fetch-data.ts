import Airtable from "airtable";
import { cosmicSync, config } from "@anandchowdhary/cosmic";
import { join } from "path";
import { promises } from "fs";
cosmicSync("data");

const tables = [
  "TeXT",
  "Experiences",
  "Awards",
  "Speaking",
  "Press",
  "Volunteer",
  "Investments",
  "Education",
  "Books",
  "Podcasts",
  "News",
];

const airtable = new Airtable({
  endpointUrl: "https://api.airtable.com",
  apiKey: config("airtableApiKey"),
});

const base = airtable.base(config("airtableBaseId"));

const fetchData = async () => {
  const data: { [index: string]: Array<any> } = {};
  for await (const table of tables) {
    console.log("Fetching data for", table);
    await base(table)
      .select()
      .eachPage((record, fetchNextPage) => {
        data[table] = data[table] ?? [];
        data[table].push(record);
        fetchNextPage();
      });
  }
  await promises.writeFile(join("."), JSON.stringify(data));
};

fetchData();
