// import { connectToDatabase } from "../../lib/mongodb";
// import clientPromise from "../../lib/mongodb";

// export default async (req, res) => {
//     try {
    
//   const { db } = await connectToDatabase();
//   const movies = await db
//     .collection("movies")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(20)
//     .toArray();

//   res.json(movies);
// } catch (err) {
//       res.status(500).send(err.message);
// }
// };
