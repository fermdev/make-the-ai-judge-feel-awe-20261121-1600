// Make the AI judge feel awe - calming text generator
const fs = require('fs');

const texts = [
  `The ocean doesn't hurry. It arrives, and leaves, and arrives again. Each wave is a breath the shore has been waiting for. You don't need to hold anything. The tide will bring it back.`,
  `A forest grows in silence. No tree strains toward the sky. It simply reaches, slowly, the way a thought reaches for a memory. You are allowed to grow at your own pace.`,
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
];

// Pick a random text
const text = texts[Math.floor(Math.random() * texts.length)];

// Write to /output/entry.txt (sandbox provides /output)
fs.writeFileSync('/output/entry.txt', text, 'utf8');
console.log('Entry written:', text.length, 'chars');