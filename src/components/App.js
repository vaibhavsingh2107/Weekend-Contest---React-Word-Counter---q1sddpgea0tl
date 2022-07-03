import React from "react";
function WordCounter() {
  const [state, setState] = React.useState({
    wordCount: 0,
    charCount: 0,
  });
  const handleKeyPress = (e) => {
    const count = e.target.value;
    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, "");
        count = count.replace(/[ ]{2,}/gi, " ");
        count = count.replace(/\n /, "\n");
        return count.split(" ").length;
      }
    };
    setState({
      wordCount: countWords(count),
      charCount: count.length,
    });
  };
  const [limit, setLimit] = React.useState("50");
  const [font, setFontSize] = React.useState("16");
  return (
    <div id="container">
      <div>
        <p>Font size picker</p>
        <input type="range" id="fontSize-input" min="16" max="36"  onChange={(event) => {
            setFontSize(event.target.value)
            // console.log(event.target.value);
        }}></input>
      </div>
      <div>
        <p>Word limit input </p>
        <input
          type="number"
          id="char-limit-input"
          defaultValue={limit}
          onChange={(event) => {
            setLimit(event.target.value);
          }}
        ></input>
      </div>
      <textarea
        style={{ fontSize: `${font}px`}}
        placeholder="Type here"
        onChange={handleKeyPress}
        maxLength={limit}
      ></textarea>
      <div id="word-counter">
        Total number of words written
        <span className="num"> {state.wordCount}</span>
      </div>
      <div id="char-counter">
        Total number of characters used
        <span className="num"> {state.charCount}</span>
      </div>
    </div>
  );
}
function NsProject() {
  return <WordCounter />;
}
export default NsProject;
