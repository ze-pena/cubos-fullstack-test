import { Link } from "react-router-dom"

type Props = {
  label: string;
  path: string;
}

export default function CommonLink({ label, path }: Props) {
  return (
    <Link to={path}>{label}</Link>
  )
} 