import React, { FunctionComponent } from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello: FunctionComponent<HelloProps> = (props: HelloProps) => {
  return (
    <div>
      <h1>
        {props.compiler},
        <br />
        {props.framework}
      </h1>
    </div>
  );
};
