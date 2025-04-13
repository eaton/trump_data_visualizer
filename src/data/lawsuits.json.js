import { load } from 'js-yaml';

const url = "https://raw.githubusercontent.com/harrisj/trump_data/refs/heads/main/exec_order_lawsuits/exec_order_lawsuits.json";
const response = await fetch(url);

if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
const collection = await response.json();

process.stdout.write(JSON.stringify(collection));
