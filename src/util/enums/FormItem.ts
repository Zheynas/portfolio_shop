export default interface FormItem {
  label: string;
  value: string;
  setValue?: (value: string) => void;
  password?: boolean;
}
