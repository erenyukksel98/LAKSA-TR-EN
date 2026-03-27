import fs from 'fs';

const contentPath = 'src/data/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

// Extract the categories array from services
const trServicesMatch = content.match(/services: \{\s*title: "Devam eden karşılaştırmalar",[\s\S]*?categories: (\[[\s\S]*?\])\n\s*\},/);
const enServicesMatch = content.match(/services: \{\s*title: "Active comparisons",[\s\S]*?categories: (\[[\s\S]*?\])\n\s*\},/);

if (trServicesMatch && enServicesMatch) {
  let trCategories = trServicesMatch[1];
  let enCategories = enServicesMatch[1];

  // Replace 'active' with 'planned' and append '-planned' to ids
  trCategories = trCategories.replace(/status: "active"/g, 'status: "planned"').replace(/id: "([a-z-]+-[0-9]+)"/g, 'id: "$1-planned"');
  enCategories = enCategories.replace(/status: "active"/g, 'status: "planned"').replace(/id: "([a-z-]+-[0-9]+)"/g, 'id: "$1-planned"');

  // Replace the existing plannedComparisons block
  content = content.replace(/plannedComparisons: \{\s*title: "Planlanan karşılaştırmalar",\s*categories: \[\s*\{\s*id: "kuvvet"[\s\S]*?\]\s*\}\s*\]\s*\}/, `plannedComparisons: {\n      title: "Planlanan karşılaştırmalar",\n      categories: ${trCategories}\n    }`);
  content = content.replace(/plannedComparisons: \{\s*title: "Planned comparisons",\s*categories: \[\s*\{\s*id: "kuvvet"[\s\S]*?\]\s*\}\s*\]\s*\}/, `plannedComparisons: {\n      title: "Planned comparisons",\n      categories: ${enCategories}\n    }`);

  fs.writeFileSync(contentPath, content);
  console.log("Successfully updated content.ts");
} else {
  console.log("Could not find services categories");
}
