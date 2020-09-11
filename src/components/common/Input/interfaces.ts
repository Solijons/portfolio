export interface ICustomInputProps {
  defaultValue?: any;
  defaultValueText?: string;
  element?: 'Select' | 'TextField';
  errorText: string;
  id: string;
  initialValid: boolean;
  initialValue: any;
  onInput: (id: string, value: any, isValid: boolean) => void;
  options?: any[];
  type?: "date" | "text" | "number";
  validators: any[];
}
