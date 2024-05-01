import React from 'react';

interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
condition: any;
  children: string | JSX.Element | JSX.Element[] | null | undefined;
}

const If: React.FC<Props> = ({ condition, children }) => {
  // biome-ignore lint/complexity/noUselessFragments: <explanation>
return  condition && <>{children}</>;
};

export default If