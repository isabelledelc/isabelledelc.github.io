import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-app-card border-t border-app-border px-6 py-12 md:px-10 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Top Section - Grid Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_2fr] items-start">
          
          {/* Brand Logo */}
          <div>
            <img
              src={logo}
              alt="TOUCH logo"
              className="w-52 max-w-full object-contain block dark:brightness-110"
            />
          </div>

          {/* Sitemap Column */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-app-heading">
              Sitemap
            </h4>
            <nav className="grid gap-3 text-xs md:text-sm">
              <a href="/features" className="text-app-muted hover:text-app-heading transition-colors">
                Features
              </a>
              <a href="/about" className="text-app-muted hover:text-app-heading transition-colors">
                About Us
              </a>
              <a href="/get-started" className="text-app-muted hover:text-app-heading transition-colors">
                Get Started
              </a>
              <a href="/login" className="text-app-muted hover:text-app-heading transition-colors">
                Log In
              </a>
              <a href="/signup" className="text-app-muted hover:text-app-heading transition-colors">
                Sign Up
              </a>
            </nav>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-app-heading">
              Socials
            </h4>
            <div className="grid gap-3 text-xs md:text-sm">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-app-muted hover:text-app-heading transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-app-muted hover:text-app-heading transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-app-muted hover:text-app-heading transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                className="text-app-muted hover:text-app-heading transition-colors"
              >
                X
              </a>
            </div>
          </div>

          {/* Head Office Column */}
          <div>
            <h4 className="mb-5 text-sm font-semibold text-app-heading">
              Head Office
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-app-muted">
              Opus Asset Management Sdn Bhd<br />
              199601042272 (414625-T)
            </p>

            <p className="mt-4 text-xs md:text-sm leading-relaxed text-app-muted">
              B-19-2 Northpoint Offices, 1, Medan Syed<br />
              Putra Utara, Mid Valley City, 59200 Kuala<br />
              Lumpur
            </p>

            <div className="mt-6">
              <h5 className="mb-3 text-xs md:text-sm font-semibold text-app-heading">
                Links
              </h5>
              <div className="grid gap-1.5 text-xs md:text-sm">
                <a
                  href="https://opusasset.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-app-muted hover:text-app-heading transition-colors"
                >
                  https://opusasset.com
                </a>
                <a
                  href="https://opusserv.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-app-muted hover:text-app-heading transition-colors"
                >
                  https://opusserv.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section - Contacts & Copyright */}
        <div className="mt-16 pt-8 border-t border-app-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="mailto:clientservices@opusasset.com"
              className="text-app-heading hover:text-app-primary border-b-2 border-app-primary pb-1 transition-colors"
            >
              clientservices@opusasset.com
            </a>

            <a
              href="tel:+60322888833"
              className="text-app-heading hover:text-app-primary border-b-2 border-app-primary pb-1 transition-colors"
            >
              (+603) 2288-8833
            </a>
          </div>

          <span className="text-xs text-app-muted text-center md:text-right">
            © 2005 - 2026 Opus Asset Management Sdn Bhd 199601042272 (414625-T). All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}