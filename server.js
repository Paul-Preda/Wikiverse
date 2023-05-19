//This was coded by Natalia 

const { db } = require("./server/models");
const app = require("./server/app");

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};


// DELETE route for /wiki/:slug 

app.delete("/wiki/:slug", async (req, res) => {

  try {
    const { slug } = req.params;

    //perform deletion using sequelizzee
    const deletedPage = await Page.destroy({ where: { slug } });

    res.status(200).json({ message: "Page deleted successfully" })

  }
  catch (error) {
    console.log("Error occured while deleting page", error)
    res.status(500).json({ message: "Internal server error" })
  }
});


init();