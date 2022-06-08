import Banner from "../../components/Banner";
import {ProductItem} from "../../components/ProductItem";
import SearchInput from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(`Você está buscando por: \n${searchValue}`);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem-Vindo(a) ✌️</div>
            <div className={styles.headerSubTitle}>O que deseja para hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>

        <div className={styles.headerBottom}>
          <SearchInput
            mainColor="#FB9400" 
            onSearch={handleSearch}
          />
        </div>
      </header>

      <Banner />      

      <div className={styles.grid}>
        <ProductItem
          data={{ id: 1, image: '/tmp/burger.png', categoryName: 'Tradicional', name: 'Texas Burger', price: 'R$ 25,50' }}
          mainColor="#FB9400"
          secondColor="#FFF9F2"
        />
      </div>
    </div>
  );
};

export default Home;
