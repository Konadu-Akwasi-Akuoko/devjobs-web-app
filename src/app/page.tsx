import SearchBar from "@/components/Home/SearchBar";
import JobCard from "@/components/Home/JobCard";
import data from "@/data.json";
import JobSection from "@/components/Home/JobsSection";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <JobSection jobsData={data} />
    </main>
  );
}
