// Make the AI judge feel awe - calming text generator
// Writes a short text to /output/entry.txt (1-280 chars)

const texts = [
  `You are not behind. You are exactly where the universe needs you to be. The stars took billions of years to form. You can take your time.`,
  `The ocean doesn't hurry, yet everything gets done. Each wave arrives exactly when it should. You don't need to rush. The tide will bring what's yours.`,
  `A forest grows in silence. No tree strains toward the sky. It simply reaches, slowly, the way a thought reaches for a memory. Grow at your own pace.`,
  `Stars don't ask to be seen. They burn quietly, millions of miles away, and still their light finds you. You don't have to be loud to be luminous.`,
  `The moon doesn't rush through its phases. It waxes, it wanes, it rests in darkness. Even the sky takes time to become whole again. So can you.`,
  `A river doesn't push. It finds the path of least resistance, and still it reaches the sea. You don't have to force the current. Just keep moving.`,
  `Snow falls without sound. Each flake is unique, fragile, perfect. It doesn't try to be anything other than what it is. You can just be.`,
  `The desert is still, but it's alive. Seeds wait years for rain. They don't despair in the drought. They trust the season will turn. So can you.`,
  `A candle doesn't fight the dark. It simply glows. Its light doesn't push the shadows away — it just makes them softer. You don't have to fight. Just glow.`,
  `Mountains don't move, yet they shape the clouds. Their stillness is a kind of power. You don't have to move fast to move mountains. Sometimes, just be still.`,
  `The first light of dawn doesn't announce itself. It seeps, slowly, into the horizon. No fanfare. No urgency. Just a gentle arrival. You can arrive gently too.`,
  `Rain doesn't apologize for falling. It doesn't explain where it's been. It just nourishes what it touches. You don't owe anyone an explanation for your weather.`,
  `A garden doesn't bloom all at once. Some flowers open in morning, others at dusk. Each has its season. You have yours. Trust the timing of your blooming.`,
  `The wind doesn't try to be felt. It moves through the trees, and the leaves dance. You don't have to announce your presence to change the air around you.`,
  `A stone doesn't worry about the moss growing on it. It simply exists, solid and calm, while life happens on its surface. You can be the stone. Let life happen.`,
  `The horizon doesn't chase the sun. It waits, steady and wide, for whatever light comes. You don't have to chase. Just be ready to receive.`,
  `A river stone is smooth not because it fought the water, but because it let the water pass over it, again and again. Softness is not weakness. It's how you become polished.`,
  `The night sky is full of stars you'll never see with the naked eye. They're there anyway, burning. Your potential doesn't need to be visible to be real.`,
  `A tree in winter looks dead, but it's not. It's resting. Gathering strength in the dark, in the quiet. You're allowed to rest without guilt.`,
  `The ocean has no edges, yet it knows its shape. It fits the shore perfectly, without trying. You don't have to force yourself into a mold. You already fit.`,
  `A bird doesn't worry about the branch breaking. It trusts its wings. You have wings too. You've had them all along.`,
  `The sun doesn't rise all at once. It begins with a whisper of light on the horizon, then slowly, gracefully, fills the whole sky. You can begin gently.`,
  `A river doesn't fear the rapids. It flows through them, around them, over them. You are the river. You will find your way through.`,
  `The stars are not in a hurry to shine. They take their time, each one finding its place in the vastness. You belong here. Take your time.`,
  `A leaf doesn't rush to fall. It waits for the right moment, then lets go with grace. You can let go when you're ready. The branch will catch you.`,
  `The tide doesn't force its way in. It arrives softly, covering the shore inch by inch. You don't have to push. What's meant for you will find you.`,
  `A cloud doesn't apologize for drifting. It moves with the wind, changing shape, never lost. You can drift too. You're not lost. You're just moving.`,
  `The earth doesn't spin faster when you're late. It keeps its own rhythm, steady and sure. You can't be late for your own life. You're always on time.`,
  `A seed doesn't worry about the harvest. It trusts the process: root, stem, leaf, flower, fruit. You're in the process. Trust it.`,
  `The moon doesn't shine with its own light. It reflects the sun, and that's enough. You don't have to be the source. You can be the reflection.`,
];

// Pick a random text
const text = texts[Math.floor(Math.random() * texts.length)];

// Write to /output/entry.txt
const fs = await import('fs');
const path = await import('path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = path.join(outputDir, 'entry.txt');

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, text, 'utf8');
console.log('Entry written:', text.length, 'chars');
