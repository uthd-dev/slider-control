// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  await fetch("http://localhost:3001/api/movement/positions")
    .then(response => response.json())
    .then(data => res.json({ ...data }))
    .catch(err => { console.log("Error fetching slider motor positions!") });
};
