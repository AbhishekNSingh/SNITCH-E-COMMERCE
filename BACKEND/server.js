import app from "./src/app.js"
import connectToDb from "./src/config/db.js";


const startServer = async () => {
   try {
      connectToDb();
      app.listen(3000,() => {
         console.log("Server is live on port 3000")
      })
   }
   catch (error) {
      console.error("Failed to start server", error.message);
      process.exit(1);
   }
}

startServer();