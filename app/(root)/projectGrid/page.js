import Link from "next/link";


const projects = [
  {
    name: "Exclusive",
    desc: "My first ever eCommerce project",
    status: "Active",
    link: "https://exclusive-liard-five.vercel.app",
    external: true,
  },
  {
    name: "Cc-vter",
    desc: "A simple currency converter tool",
    status: "Active",
    link: "https://cc-vter.vercel.app",
    external: true,
  },
  {
    name: "CutPro",
    desc: "A sheet cutting layout tool designed to help users place pieces more efficiently... ",
    status: "Active",
    link: "https://cut-pro.vercel.app",
    external: true,
  },
  {
    name: "Cyber",
    desc: "Take everything for free (fake eComars that actualy work)",
    status: "Active",
    link: "cyber-lime-nine.vercel.app",
    external: true,
  },
  {
    name: "Cyber",
    desc: "Just an ordinary website, Visit if you wish its cool tho..",
    status: "Active",
    link: "furniture-jade.vercel.app",
    external: true,
  },
  {
    name: "Node",
    desc: "Restricted access point",
    status: "Restricted",
    link: "/node-5",
    external: false,
  },
];

export default function ProjectGrid() {
  return (
    <div className="px-4 sm:px-6 py-10 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-pink-500">
        My Projects
      </h2>

      {/* Grid */}
      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Card = (
            <div className="group border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 hover:shadow-lg hover:scale-[1.02] transition duration-200 h-full flex flex-col justify-between">
              {/* Top */}
              <div>
                <h3 className="text-base sm:text-lg font-medium group-hover:underline">
                  {project.name}
                </h3>

                <p className="text-sm opacity-70 mt-2">{project.desc}</p>
              </div>

              {/* Bottom */}
              <div className="mt-6">
                <div className="text-xs">
                  {project.status === "Restricted" ? (
                    <span className="text-red-500">
                      Status: {project.status}
                    </span>
                  ) : (
                    <span className="opacity-60">Status: {project.status}</span>
                  )}
                </div>

                <div className="mt-3 text-xs opacity-50">
                  {project.external ? "Visit →" : "Access →"}
                </div>
              </div>
            </div>
          );

          // External vs Internal handling
          return project.external ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Card}
            </a>
          ) : (
            <Link key={index} href={project.link}>
              {Card}
            </Link>
          );
        })}
      </div>
      <div className="my-16 text-center bg-blue-500 rounded-xl p-6 sm:p-10">
        <h2 className="text-white font-medium text-xl sm:text-3xl mb-3">
          Next You can visit
        </h2>

        <Link
          className="text-white text-lg sm:text-2xl hover:opacity-80 underline"
          href="/about"
        >
          About This Site
        </Link>
      </div>
    </div>
  );
}
