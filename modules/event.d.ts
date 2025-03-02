export interface StdEvent {
  target: { value: any };
}

export interface StdCustomEvent {
  detail: { value: any };
}

export interface Destroyable {
  destroy(): void;
}

export interface FormWidet {
  onChange: (value: any) => void;
  value: any;
}
