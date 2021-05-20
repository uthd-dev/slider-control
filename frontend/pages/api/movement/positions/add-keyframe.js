import axios from "axios";

export default async (req, res) => {
  console.log(req.body);
  if (req.body) {
    axios
      .post("http://localhost:3001/api/movement/positions/keyframes", { ...req.body })
      .then(() => {
        console.log(`Added Keyframe: ${req.body.mot1}, ${req.body.mot2}`);
        res.status(200).end("OK 200");
      })
      .catch((err) => {
        console.log(
          "Error: Could not POST backend API: '/api/movement/positions'"
        );
        res.status(500).json({
          error: "INTERNAL_SERVER_ERROR"
        });
      });
  }else res.status(400).json({
    error: "MALFORMED_REQUEST"
  });
};
