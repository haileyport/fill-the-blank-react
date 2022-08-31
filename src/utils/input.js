export const inputTag = (name, place, text, textHandler, newCss) => {
  return (
    <input
      id={name}
      type="text"
      placeholder={place}
      value={text[name] || ""}
      onChange={textHandler}
      className={newCss[name]}
    />
  );
};
