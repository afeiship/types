type CellProps = {
  text: string;
  record: any;
  [key: string]: any;
};

type CellFnItem = {
  [key: string]: (text: string, record: any) => any;
};
