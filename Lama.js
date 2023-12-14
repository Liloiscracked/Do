const Replicate = require('replicate');

const replicate = new Replicate({
  auth: 'LL-YSdlzLaBN52xqDZIpKeCbZS7yGgBEpdq4koIqdP62pHZFzsrjkGvpmcKzEfnHbwM',
});

const input = {
  prompt: "What is 2+2",
};

// Use async/await to handle the stream
(async () => {
  try {
    // Iterate over the stream and log each event
    for await (const event of replicate.stream("meta/llama-2-70b-chat", { input })) {
      console.log(event);
    }

    // Create a prediction
    const prediction = await replicate.predictions.create({
      model: "meta/llama-2-70b-chat",
      input: {
        prompt: "..."
      },
      webhook: "https://example.com/your-webhook",
      webhook_events_filter: ["completed"]
    });

    console.log('Prediction:', prediction);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
