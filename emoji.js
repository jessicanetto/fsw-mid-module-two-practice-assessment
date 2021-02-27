const emojis = ["😀", "😆", "😅", "🤣", "🙃", "😍", "😡", "🥶", "😱", "👻", "👾", "😻", "💋", "👅", "🧵", "👠", "🥾", "👑", "🎓", "🐔", "🐧", "🦄", "🦇", "🌲", "🎄", "🌊", "🍓", "🍍", "🥯", "🌭", "🍕", "🍣", "🥡", "🤸", "🎯", "🧨", "🔮", "💉", "🦠", "❤️", "🧡", "💛", "💚", "💙", "💜", "☢️", "🚫", "💯", "🔱", "🎊"];

let emojiButton = document.getElementById("generate-story-btn");
let storyElement = document.getElementById("story");
emojiButton.addEventListener("click", () => {
  //receive number input
  const storyLength = document.getElementById("story-length-input").value;
  //randomly selects (inputted number) of emojis
  const shuffled = emojis.sort(() => 0.5 - Math.random());
  let selectedEmojis = shuffled.slice(0, storyLength);
  //displays randomly selected emojis in story section
  let emojiStoryElement = document.createElement("p");
  //made an element, now we set its textcontent
  emojiStoryElement.textContent = selectedEmojis;
  storyElement.appendChild(emojiStoryElement);
});
