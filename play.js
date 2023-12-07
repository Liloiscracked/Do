var mongoose = require("mongoose")
mongoose.connect('mongodb+srv://lilo:123@cluster0.bonii93.mongodb.net/Do', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in Connecting to Database"));
db.once('open', () => console.log("Connected to Database"))


async function doesDocumentExist() {  
    try {
      // Specify the criteria for checking existence (replace with your own criteria)
      const query = { username: 'bnb' }; // Example: Check if a document with key 'value' exists
  
      // Use findOne to check if a document matches the criteria
      const document = await db.collection('users').findOne(query);
  
      if (document) {
        console.log('Document exists:', document);
      } else {
        console.log('Document does not exist');
      }
    } finally {
      // Close the connection when done
      await db.close();
      console.log('Connection closed');
    }
  }
doesDocumentExist();

