import Button1 from "@/components/Button1";
import Button2 from "@/components/Button2";
import FormInput from "@/components/FormInput";
import searchIcon from "@/assets/desktop/icon-search.svg";
import CheckBox from "@/components/Checkbox";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen">
      <h1>Hello it's me</h1>
      <h2>Hello it's me</h2>
      <h3>Hello it's me</h3>
      <h4>Hello it's me</h4>
      <p>Hello it's me</p>

      <Button1>Button 1</Button1>

      <Button2>Button 2</Button2>

      <FormInput
        name="form-input"
        icon={searchIcon}
        placeholder="Search"
        width="w-[500px]"
      />

      <CheckBox name="like-checkbox" label="Do you like it?" value="yes" />

      <ThemeToggle />
    </main>
  );
}
