import { load } from 'js-yaml';

const url = "https://raw.githubusercontent.com/harrisj/trump_data/refs/heads/main/it_modernization/raw_data/onboard_docs.yaml";
const response = await fetch(url);

if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
const raw = await response.text();
const collection = load(raw);

process.stdout.write(JSON.stringify(collection));
