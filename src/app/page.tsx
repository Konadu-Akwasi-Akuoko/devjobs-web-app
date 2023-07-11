import SearchBar from "@/components/Home/SearchBar";
import data from "@/data.json";
import JobSection from "@/components/Home/JobsSection";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <JobSection />
    </main>
  );
}
