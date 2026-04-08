import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ede1cc] dark:bg-[#181310] text-[#2d241d] dark:text-[#f3e7d3] border-t border-[#c8b79d] dark:border-[#4d3e34]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Nexus.net</h3>
            <p className="text-sm leading-6 opacity-80">
              A personal site for my projects, random ideas, and stuff I make
              while learning.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/"
                className="hover:underline hover:underline-offset-4"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:underline hover:underline-offset-4"
              >
                About
              </Link>
              <Link
                href="/projectGrid"
                className="hover:underline hover:underline-offset-4"
              >
                My Projects
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-3">
              Connect With Me
            </h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://github.com/AroshX3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-[22px]" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100074368103630"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <FaFacebook className="text-[22px]" />
              </a>

              <a
                href="https://www.instagram.com/guccibanana_aroshx3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-[22px]" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                rel="noopener noreferrer"
                className="flex flex-row-reverse gap-3 font-semibold items-center hover:opacity-80 transition"
                aria-label="Gmail"
              >
                {" "}
                aroshx3@gmail.com
                <SiGmail className="text-[22px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#c8b79d] dark:border-[#4d3e34] text-center text-xs opacity-70">
          © {new Date().getFullYear()} Built by Arosh ⚡
        </div>
      </div>
    </footer>
  );
}
