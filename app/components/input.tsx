import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputComponent({
  placeholder = "",
  label = "",
  handleChange,
  height = "",
}: {
  placeholder: string;
  label: string;
  handleChange: (value: string) => void;
  height: string;
}) {
  return (
    <div className="grid w-full items-center gap-1.5 ">
      <Label htmlFor="email">{label}</Label>
      <Input
        className={`h-full w-full ${height ? height : ""}`}
        type="email"
        id="email"
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}
