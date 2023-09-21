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

export default function Footer() {
  return (
    <footer className='footer-center p-10 pb-2 bg-base-200'>
      <nav className='mb-4'>
        <div className='grid grid-flow-col gap-4'>
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className='link link-primary no-underline'
            >
              + {link.name} +
            </a>
          ))}
        </div>
      </nav>

      <aside className='text-accent text-xs'>
        &copy; {new Date().getFullYear()},{' '}
        <span>Narin Rico Sundarabhaya c/o Polyhedron Projects LLC.</span>
      </aside>
    </footer>
  );
}
