import Replicate from "replicate";

const replicate = new Replicate({
  auth:'r8_9aIxBkekaKiURmeENeDJSxaKo7u0Zuz2qsJo7',
});
const output = await replicate.run(
    "stability-ai/stablelm-tuned-alpha-7b:c49dae362cbaecd2ceabb5bd34fdb68413c4ff775111fea065d259d577757beb",
    {
      input: {
        top_p: 1,
        prompt: "how can i make meatballs and pasta",
        max_tokens: 500,
        temperature: 0.75,
        repetition_penalty: 1.2
      }
    }
  );
  console.log(output.toString().replaceAll(',',''));