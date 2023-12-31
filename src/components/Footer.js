import './css/style.css';
import './css/style.min.css';
function Footer() {
  return (
    <div>
    <div className="container-fluid footer bg-light py-5" style={{'marginTop': '90px'}}>
        <div className="container text-center py-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <a href="index.html" className="navbar-brand m-0">
                        <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                    </a>
                </div>
                <div className="col-12 mb-4">
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram"></i></a>
                </div>
                <div className="col-12 mt-2 mb-4">
                    <div className="row">
                        <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                            <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                            <p className="mb-2">Five Gardens, Matunga East, Mumbai</p>
                            <p className="mb-0">022 287 67890</p>
                        </div>
                        <div className="col-sm-6 text-center text-sm-left">
                            <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                            <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                            <p className="mb-0">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <p className="m-0">&copy; <a href="#">Domain</a>. All Rights Reserved. Designed by AMA Groups
                    </p>
                </div>
            </div>
        </div>
    </div>
   </div>
  );
}

export default Footer;