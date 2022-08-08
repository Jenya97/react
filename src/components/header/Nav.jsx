import data from "./menu.json";
import styles from './Header.module.css'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.menu}>
        {data.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </nav>
  );
}
