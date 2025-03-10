type Model = {
  model?: Record<string, any>;
}

type Items = {
  items: any[];
}

type CategoryItem = {
  label: string;
  value: string;
  children?: CategoryItem[];
};
