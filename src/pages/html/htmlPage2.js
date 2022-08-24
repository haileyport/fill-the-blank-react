const Page2 = ({ inputContents }) => {
  return (
    <>
      <span className="text-xl font-bold">자주 사용되는 태그들</span>
      <br />
      <span>{`<div> : Divition`}</span>
      <span>{inputContents("span", "<s???>")} : Span</span>
      <span>{inputContents("img", "<i??>")} : Img</span>
      <span>{inputContents("link", "<l???>")} : Link</span>
      <span>{inputContents("a", "<?>")} : a</span>
      <span>{inputContents("ul", "<u?>")} : Unordered List</span>
      <span>{inputContents("ol", "<o?>")} : Ordered List</span>
      <span>{inputContents("li", "<l?>")} : List Item</span>
      <span>
        {inputContents("input", "<i????>")} : Input(Text, Radio, Checkbox)
      </span>
      <span>
        {inputContents("textarea", "<t???????>")} : Multi-line Text Input
      </span>
      <span>{inputContents("button", "<b?????>")} : Button</span>
    </>
  );
};

export default Page2;
