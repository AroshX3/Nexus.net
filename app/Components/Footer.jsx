import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 px-4 sm:px-6 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-500">
            Nexus-Net
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Just a place where I build, experiment, and share what I'm learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-purple-500">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projectGrid">My Projects</Link>
          </div>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-green-500">
            Connect With Me
          </h3>

          <div className="flex justify-center md:justify-start gap-4 text-sm">
            <a
              href="https://github.com/AroshX3"
              target="_blank"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100074368103630"
              target="_blank"
              className="hover:text-blue-500"
            >
              FaceBook
            </a>
            <a
              href="https://www.instagram.com/guccibanana_aroshx3/"
              target="_blank"
              className="hover:text-blue-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Built by Arosh ⚡
      </div>
    </footer>
  );
}
