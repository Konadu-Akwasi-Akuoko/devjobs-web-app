import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default interface FormInputType {
  name: string;
  icon: string | StaticImport;
  width: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
