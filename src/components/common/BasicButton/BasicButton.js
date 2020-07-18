import React from "react";
import { Button } from "reactstrap";
import classNames from "classnames";

import "./BasicButton.sass";

const BasicButton = ({ outline = false, color, className, text, block }) => {
  return (
    <>
      <Button
        outline={outline}
        color={color}
        block={block}
        className={classNames([
          "BasicButton",
          {
            BasicButton__outline: outline,
            BasicButton__fill: !outline,
          },
          className,
        ])}
      >
        {text}
      </Button>
    </>
  );
};

export default BasicButton;
