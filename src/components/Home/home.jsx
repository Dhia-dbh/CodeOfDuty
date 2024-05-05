import Navbar from "../navbar/navbar";
import SearchBar from "../searchbar/searchBar";
import AiSection from "../aiSection/aiSection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SearchBar />
      </main>
      <AiSection />
    </>
  );
}

export default Home;
