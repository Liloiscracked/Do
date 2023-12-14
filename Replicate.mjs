import Replicate from "replicate";

const replicate = new Replicate({
  auth: 'r8_9aIxBkekaKiURmeENeDJSxaKo7u0Zuz2qsJo7',
});

const model = "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
const input = { prompt: "What is 2+2" };

const runReplicate = async () => {
  try {
    const output = await replicate.run(model, { input });
    console.log(output);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the async function
runReplicate();
