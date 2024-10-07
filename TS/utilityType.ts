type ReadOnlyProps<T> = {
  readonly [P in keyof T]: T[P];
};

interface Props {
  name: string;
  age: number;
}

function Test(props: ReadOnlyProps<Props>) {}

type ID = number | string;

function isNumber(value: number | string) {
  return value === 'number';
}

function Test2(id: ID) {
  if (isNumber(id)) {
    id + 'as';
  }
}

type Nullable<T> = { [P in keyof T]: T[P] };
