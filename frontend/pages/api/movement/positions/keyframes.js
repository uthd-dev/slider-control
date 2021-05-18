// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  await fetch("http://localhost:3001/api/movement/positions/keyframes")
    .then(response => response.json())
    .then(data => res.json({ ...data }))
    .catch(err => {
      console.log("Error fetching keyframe positions!");
      res.status(500).end("Internal Server Error");
    });
};
