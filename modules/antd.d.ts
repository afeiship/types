type CellProps = {
  text: string;
  record: any;
};

type CellFnItem = {
  [key: string]: (text: string, record: any) => any;
};
