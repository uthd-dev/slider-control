// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    await fetch("http://localhost:3001/api/movement/unlock")
      .then(response => response.json())
      .then(data => res.status(200).json({ ...data }))
      .catch(err => { console.log("Error unlocking slider motors!") });
  };
  