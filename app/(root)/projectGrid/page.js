import Link from "next/link";

const projects = [
  {
    name: "Exclusive",
    desc: "My first ever eCommerce project.",
    status: "Active",
    link: "https://exclusive-liard-five.vercel.app",
    external: true,
  },
  {
    name: "Cc-vter",
    desc: "A simple currency converter tool.",
    status: "Active",
    link: "https://cc-vter.vercel.app",
    external: true,
  },
  {
    name: "CutPro",
    desc: "A sheet cutting layout tool for placing pieces more efficiently.",
    status: "Active",
    link: "https://cut-pro.vercel.app",
    external: true,
  },
  {
    name: "Cyber",
    desc: "A fake eCommerce site that actually works.",
    status: "Active",
    link: "https://cyber-lime-nine.vercel.app",
    external: true,
  },
  {
    name: "Furniture",
    desc: "A simple website with a cleaner layout.",
    status: "Active",
    link: "https://furniture-jade.vercel.app",
    external: true,
  },
  {
    name: "Node",
    desc: "Restricted access point.",
    status: "Restricted",
    link: "/node-5",
    external: false,
  },
];

export default function ProjectGrid() {
  return (
    <div className="px-4 sm:px-6 py-10 max-w-5xl mx-auto text-[#2d241d] dark:text-[#f3e7d3]">
      <h2 className="text-2xl text-[#000000b7] sm:text-3xl font-serif font-bold mb-3">
        My Projects
      </h2>

      <p className="text-sm text-[#000000b7] sm:text-base opacity-80 mb-8 max-w-2xl leading-6">
        A small list of things I made while learning, messing around, and trying
        not to break everything.
      </p>

      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const card = (
            <div className="h-full flex flex-col justify-between rounded-sm border border-[#c8b79d] dark:border-[#4d3e34] bg-[#f8f0e2] dark:bg-[#201914] p-5 sm:p-6 transition hover:-translate-y-1 hover:shadow-md">
              <div>
                <h3 className="text-lg font-serif font-bold">{project.name}</h3>
                <p className="text-sm opacity-80 mt-2 leading-6">
                  {project.desc}
                </p>
              </div>

              <div className="mt-6 text-xs flex items-center justify-between gap-3">
                <span
                  className={
                    project.status === "Restricted"
                      ? "text-red-600 dark:text-red-400"
                      : "opacity-70"
                  }
                >
                  Status: {project.status}
                </span>

                <span className="opacity-60">
                  {project.external ? "Visit →" : "Open →"}
                </span>
              </div>
            </div>
          );

          return project.external ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card}
            </a>
          ) : (
            <Link key={index} href={project.link}>
              {card}
            </Link>
          );
        })}
      </div>

      <div className="my-16 text-center bg-[#d9c3a1] dark:bg-[#3a2a22] rounded-sm border border-[#b89f78] dark:border-[#5a463a] p-6 sm:p-10">
        <h2 className="text-[#2d241d] dark:text-[#f3e7d3] font-serif font-bold text-xl sm:text-3xl mb-3">
          Next you can visit
        </h2>

        <Link
          className="text-[#2d241d] dark:text-[#f3e7d3] text-lg sm:text-2xl hover:underline underline-offset-4"
          href="/about"
        >
          About this site
        </Link>
      </div>
    </div>
  );
}
