type StdEvent = {
  target: { value: any };
};

type StdCustomEvent = {
  detail: { value: any };
};

type Destroyable = {
  destroy(): void;
};

type FormWidget = {
  onChange: (value: any) => void;
  value: any;
};
