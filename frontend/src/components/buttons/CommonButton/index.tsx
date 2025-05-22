type Props = {
  label: string;
  type: "submit" | "reset" | "button";
};

export default function CommonButton({ label, type }: Props) {
  return (
  	<button type={type}>
      <span>{label}</span>
    </button>
  )
}