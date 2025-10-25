import { Linkedin, Github, Mail, Smartphone, Phone } from "lucide-react";

export default function Footer({ contact }) {
  return (
    <footer
      id="contact"
      className="bg-gray-900 border-t border-cyan-700/50 py-8"
    >
      <div className="container mx-auto px-4 md:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center mb-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-gray-400 hover:text-cyan-400"
          >
            <Mail />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-gray-400 hover:text-cyan-400"
          >
            <Linkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="mx-2 text-gray-400 hover:text-cyan-400"
          >
            <Github />
          </a>
          {/* <p className="mx-2 text-gray-400 hover:text-cyan-400">
            <Phone />
          </p> */}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
