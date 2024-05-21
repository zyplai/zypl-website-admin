declare namespace input {
  type type = "string" | "integer" | "float" | "select" | "date" | "password" | "number";
  interface props {
    value: number | string | Date;
    type: type;
    id?: string;
    title?: string;
    placeholder?: string;
    options?: string[];
    min?: number;
    max?: number;
    error?: string;
    warning?: string;
    step?: number;
    unit?: string;
    hasFilterText?: boolean;
    onInput?: (value: string) => void;
    onSelect?: (option: string) => void;
    onSetDate?: React.Dispatch<React.SetStateAction<Date>>;
  }
}

export default input;
