import { Link } from 'react-router-dom';

const DashHeader = () => {
  const content = (
    <header className="dash-header">
      <div className="dash-header__container">
        <Link to="/dash/notes">
          <h1 className="dashe-header__title">Tech notes</h1>
        </Link>
        <nav className="dash-header__nav">{/* add nav buttons */}</nav>
      </div>
    </header>
  );

  return content;
};

export default DashHeader;
