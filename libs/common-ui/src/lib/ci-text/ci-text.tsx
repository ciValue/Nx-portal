import styles from './ci-text.module.css';

/* eslint-disable-next-line */
export interface CiTextProps {
  text:string;
}

export function CiText(props: CiTextProps) {
  return (
    <div className={styles['container']}>
      <h1>{`Welcome to CiText! ${props.text}`}</h1>
    </div>
  );
}


