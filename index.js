(function () {
  "use strict";

  const toggleCursor = (function () {
    "use strict";

    let display = false;

    return (element) => () => {
      console.log(element);
      display = !display;
      const color = display ? "#546de5" : "#000000";
      const textShadow = display ? "4px 0 #63cdda" : "4px 0 #000000";
      element.style.color = color;
      element.style.textShadow = textShadow;
      setTimeout(toggleCursor(cursorElement), 500);
    };
  })();

  const cursorElement = document.getElementById("cursor");
  toggleCursor(cursorElement)();
})();
