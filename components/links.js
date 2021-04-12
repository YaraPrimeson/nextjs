import Link from "next/link";
import style from "../styles/links.module.css";

const Links = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className={style.link}>{text}</a>
    </Link>
  );
};

export default Links;
