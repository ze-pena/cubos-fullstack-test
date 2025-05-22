type Props = {
  label: string;
  name: string;
  type: "text" | "password";
  placeholder?: string;
}

export default function CommonInput({ label, name, type, placeholder }: Props) {
  return (
    <div>
      <label htmlFor={name}>
        { label }
      </label>

      <input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  )
}