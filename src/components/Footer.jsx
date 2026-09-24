import { BookOpen } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand"><BookOpen size={18} /> MiniBook</div>
        <p>© 2026 Mini Book Store. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
