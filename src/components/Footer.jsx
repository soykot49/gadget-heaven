const Footer = () => {
  return (
    <footer className="space-y-4 md:footer-center bg-base-200 text-base-content rounded p-10 ">
      <h1 className="font-bold text-3xl">Gadget Heaven</h1>
      <p className="pb-10">Leading the way in cutting-edge technology and innovation.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-44">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      
     
    </footer>
  );
};

export default Footer;
