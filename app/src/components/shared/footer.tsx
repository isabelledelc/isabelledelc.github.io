import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '60px 40px 40px',
        background: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top Section - Grid Columns */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 2fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        {/* Brand Logo */}
        <div>
          <img
            src={logo}
            alt="TOUCH logo"
            style={{
              width: 220,
              maxWidth: '100%',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Sitemap Column */}
        <div>
          <h4 style={{ marginBottom: 20, fontSize: 15, fontWeight: 600, color: '#2c3e50' }}>
            Sitemap
          </h4>
          <nav style={{ display: 'grid', gap: 12, fontSize: 13 }}>
            <a href="/features" style={{ color: '#666', textDecoration: 'none' }}>
              Features
            </a>
            <a href="/about" style={{ color: '#666', textDecoration: 'none' }}>
              About Us
            </a>
            <a href="/get-started" style={{ color: '#666', textDecoration: 'none' }}>
              Get Started
            </a>
            <a href="/login" style={{ color: '#666', textDecoration: 'none' }}>
              Log In
            </a>
            <a href="/signup" style={{ color: '#666', textDecoration: 'none' }}>
              Sign Up
            </a>
          </nav>
        </div>

        {/* Socials Column */}
        <div>
          <h4 style={{ marginBottom: 20, fontSize: 15, fontWeight: 600, color: '#2c3e50' }}>
            Socials
          </h4>
          <div style={{ display: 'grid', gap: 12, fontSize: 13 }}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#666', textDecoration: 'none' }}
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#666', textDecoration: 'none' }}
            >
              Linkedin
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#666', textDecoration: 'none' }}
            >
              Instagram
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#666', textDecoration: 'none' }}
            >
              X
            </a>
          </div>
        </div>

        {/* Head Office Column */}
        <div>
          <h4 style={{ marginBottom: 20, fontSize: 15, fontWeight: 600, color: '#2c3e50' }}>
            Head Office
          </h4>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.6,
              color: '#666',
            }}
          >
            Opus Asset Management Sdn Bhd<br />
            199601042272 (414625-T)
          </p>

          <p
            style={{
              margin: '16px 0 0',
              fontSize: 13,
              lineHeight: 1.6,
              color: '#666',
            }}
          >
            B-19-2 Northpoint Offices, 1, Medan Syed<br />
            Putra Utara, Mid Valley City, 59200 Kuala<br />
            Lumpur
          </p>

          <div style={{ marginTop: 24 }}>
            <h5 style={{ fontSize: 14, fontWeight: 600, color: '#2c3e50', marginBottom: 12 }}>
              Links
            </h5>
            <div style={{ display: 'grid', gap: 6, fontSize: 13 }}>
              <a
                href="https://opusasset.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#666', textDecoration: 'none' }}
              >
                https://opusasset.com
              </a>
              <a
                href="https://opusserv.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: '#666', textDecoration: 'none' }}
              >
                https://opusserv.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Contacts & Copyright */}
      <div
        style={{
          maxWidth: 1200,
          margin: '80px auto 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
          fontSize: 14,
        }}
      >
        <a
          href="mailto:clientservices@opusasset.com"
          style={{
            color: '#333333',
            textDecoration: 'none',
            borderBottom: '2px solid #528c68',
            paddingBottom: 4,
          }}
        >
          clientservices@opusasset.com
        </a>

        <a
          href="tel:+60322888833"
          style={{
            color: '#333333',
            textDecoration: 'none',
            borderBottom: '2px solid #528c68',
            paddingBottom: 4,
          }}
        >
          (+603) 2288-8833
        </a>

        <span style={{ color: '#888888', fontSize: 12 }}>
          © 2005 - 2026 Opus Asset Management Sdn Bhd 199601042272 (414625-T). All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}