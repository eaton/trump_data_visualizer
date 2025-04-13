import { parse } from 'path';
import { writeFileSync } from 'fs';

const baseUrl = 'https://raw.githubusercontent.com/harrisj/trump_data/refs/heads/main/';
const outputBase = './src/data/';

const files = [
  'it_modernization/raw_data/agencies.yaml',
  'it_modernization/raw_data/aliases.yaml',
  'it_modernization/raw_data/cases.yaml',
  'it_modernization/raw_data/details.yaml',
  'it_modernization/raw_data/events.yaml',
  'it_modernization/raw_data/onboard_docs.yaml',
  'it_modernization/raw_data/roundups.yaml',
  'it_modernization/raw_data/systems.yaml',
  'gitmo_camp/gitmo_camp.csv',
  'home_visits/home_visits.csv',
  'home_visits/golf_dates.csv',
  'exec_order_lawsuits/exec_order_lawsuits.json',
  'unemployment_claims/weekly_claims.csv',
];

for (const file of files) {
  const res = await fetch(baseUrl + file);
  if (!res.ok) throw new Error(`fetch failed: ${response.status} (${file})`);

  const path = outputBase + parse(file).base;
  writeFileSync(path, await res.text());
  console.log(`Fetched ${file}`);
}