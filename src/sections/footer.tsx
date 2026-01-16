'use client'

const LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nsundara/',
  },
  {
    name: 'Email',
    url: 'mailto:nrs710@gmail.com',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ricopella',
  },
];

const STYLES = {
  aside: `text-accent text-xs`,
  footer: `footer-center p-10 pb-2 bg-base-200`,
  link: `link link-primary no-underline`,
  nav: `mb-4`,
  row: `grid grid-flow-col gap-4`,
};

export default function Footer() {
  return (
    <footer className={STYLES.footer}>
      <nav className={STYLES.nav}>
        <div className={STYLES.row}>
          {LINKS.map((link) => (
            <a key={link.name} href={link.url} className={STYLES.link}>
              + {link.name} +
            </a>
          ))}
        </div>
      </nav>

      <aside className={STYLES.aside}>
        &copy; {new Date().getFullYear()},{' '}
        <span>Narin Rico Sundarabhaya c/o Polyhedron Projects LLC.</span>
      </aside>
    </footer>
  );
}
