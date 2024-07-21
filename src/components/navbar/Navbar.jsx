import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">LOGO</div>
      <div className="navbarLinks">
        <p>Link1</p>
        <p>Link2</p>
        <p>Link3</p>
        <p>Link4</p>
      </div>
      <div className="navbarLoginSignup">
        <p>Log in</p>
        <p>sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
