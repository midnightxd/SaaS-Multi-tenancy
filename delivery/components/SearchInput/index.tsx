import { type } from "os";
import { useState } from "react";
import styles from "./styles.module.css";

type Props = {
  mainColor: string;
  onSearch: (searchValue: string) => void;
}

export const SearchInput = ({ mainColor, onSearch} : Props) => {
  const [focused, setFoucused] = useState(false);
  const [searchValue, searchSetValue] = useState('');

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onSearch(searchValue);
    }
  }

  return (
    <div>
      <div 
      className={styles.container}
      style={{borderColor: focused ? mainColor : '#ffffff'}}>
        <div 
        className={styles.button}
        onClick={() => onSearch(searchValue)}
        >
          <input
            type="text"
            className={styles.input}
            placeholder="Digite o nome do produto"
            onFocus={() => setFoucused(true)}
            onBlur={() => setFoucused(false)}
            onKeyUp={handleKeyUp}
            value={searchValue}
            onChange={(e) => searchSetValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
