import SearchBar from "@/components/Home/SearchBar";
import JobCard from "@/components/Home/JobCard";
import data from "@/data.json";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <div className="horizontal-padding mt-20 grid grid-cols-3 gap-8 ">
        {data.map((job) => {
          return (
            <JobCard
              key={job.id}
              id={job.id}
              company={job.company}
              logo={job.logo}
              logoBackground={job.logoBackground}
              position={job.position}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
            />
          );
        })}
      </div>
    </main>
  );
}
