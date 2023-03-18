function Header(props) {
  const navData = props.navData;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <ul className="navbar-nav">
          {navData.map((x) => (
            <li key={x.id} className="nav-item">
              <a className="nav-link" href={`#${x.id}`}>
                {x.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
