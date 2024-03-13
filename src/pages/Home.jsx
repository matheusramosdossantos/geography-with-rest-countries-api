// Home page

// Components
import Container from "../components/Container";
import CountriesList from "../components/CountriesList";

// Styles
import styles from "../components/Container/style.module.scss";

// Framer-motion
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container className={styles.homeContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
      >
        <CountriesList />
      </motion.div>
    </Container>
  );
}
