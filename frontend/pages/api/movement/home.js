// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
    await fetch("http://localhost:3001/api/movement/home")
      .then(response => response.json())
      .then(data => res.status(200).json({ ...data }))
      .catch(err => {
        console.log("Error moving slider to home position!");
        res.status(500).end("Internal Server Error");
      });
  };
  