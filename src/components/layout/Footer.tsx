import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-primary/10 bg-surface/30">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted text-sm">
        <p>© {new Date().getFullYear()} Juan Martínez — Hecho con 🎸 y ☕</p>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-primary transition-colors"><FaGithub /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
          <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};