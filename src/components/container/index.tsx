import { FC, ReactNode } from "react";

import { cn } from "@techsiro/utils/style.utils";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: FC<Props> = (props) => {
  return (
    <div className={cn("px-8 py-4", props.className)}>{props.children}</div>
  );
};

export default Container;
