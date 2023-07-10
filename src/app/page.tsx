import SearchBar from "@/components/Home/SearchBar";
import JobCard from "@/components/Home/JobCard";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <div className="horizontal-padding mt-20 grid grid-cols-3 gap-8 ">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </main>
  );
}
