import React from 'react';

const App = () => (
   
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">doorep.de</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Action</button>
                                <button className="dropdown-item" type="button">Another action</button>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-outline-secondary my-2 my-sm-0 loginBtn" type="button">Login</button>

                    </li>
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Action</button>
                                <button className="dropdown-item" type="button">Another action</button>
                                <button className="dropdown-item" type="button">Something else here</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <header className="intro">
            <p className="header-caption">Find your house without any difficulties.</p>
            <p className="header-caption-intro">Get apartments directly from landlords - Exactly
                <br/> matching your profile.</p>
            <button className="btn btn-primary my-2 my-sm-0 create-btn" type="button">Create a search profile</button>
            <p className="create-btn-caption">Let also you find of
                <a href="">landlords</a>
            </p>
            <div className="bonus">
                <span>100% Free & non-binding</span>
                <span>24h Hotline: 98404 90843</span>
                <span>Proffessional Guides</span>
            </div>
        </header>
        <main>
            <section>
                <h4 className="feature-header">FEATURE</h4>
                <hr className="line"/>
                <p className="feature-header-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore
                    <br/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                    <br/> commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                <div className="featureCard">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Create Search Profile</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Receive Offers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Feed In</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                </div>
                <div className="create-search-profile"><button className="btn btn-primary my-2 my-sm-0 create-btn" type="button">Create a search profile</button></div>
            </section>
            <section className="titleWrapper">
                <div className="img-wrapper">
                    <img className="card-img-left" src="./image/workspace-macbook-pro.jpg" alt="Card image cap"/>
                    <p className="img-wrapper-text">doorep.de</p>
                </div>
                <div className="text">
                    <h4>TITLE GOES HERE</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. 
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate.
                    </p>
                    <button className="btn btn-primary my-2 my-sm-0" type="button">Explore</button>
                </div>
            </section>
            <section className="works">
                <h4 className="feature-header">HOW IT WORKS</h4>
                <hr className="line"/>
                <div className="howItWorksInstruction">
                    <span>Your Search Profile</span>
                    <span>Your Accomodation</span>
                    <span>Your Match</span>
                </div>
                <hr className="section-divider"/>
                <div className="titleWrapper spacer">
                    <p className="img-wrapper">Icon goes here!!!</p>
                    <div className="text">
                        <h4 className="text-title">Title Goes Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem
                            ipsum dolor sit amet.
                        </p>
                        <div className="furtherInfoBtn">
                            <i className="fas fa-angle-left arrow"></i>
                            <i className="fas fa-angle-right arrow"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h4 className="feature-header">MORE BENEFITS</h4>
                <hr className="line"/>
                <div className="benefitIcon">
                    <span>Exclusive</span>
                    <span>Comfortable</span>
                    <span>100% Free</span>
                </div>
                <div className="benefitIcon">
                    <span>1-Click Application</span>
                    <span>Ordering Principle</span>
                    <span>Privacy</span>
                </div>
            </section>
            <section>
                <h4 className="feature-header">FEATURED ON</h4>
                <hr className="line"/>
                <div className="companies-logo">
                    <span>startup</span>
                    <span>Google</span>
                    <span>Hulu</span>
                </div>
                <div className="companies-logo">
                    <span>Fisher</span>
                    <span>Piper</span>
                    <span>Mcdavies</span>
                </div>
            </section>
            <section>
                <h4 className="feature-header">FAQ</h4>
                <hr className="line"/>
                <div className="titleWrapper spacer">
                    <span className="img-wrapper">THis is where the icon comes</span>
                    <div className="text">
                        <p>You still have questions?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo</p>
                        <button className="btn btn-primary my-2 my-sm-0" type="button">Check FAQ</button>
                        <p className="doubt-call">Still in doubt?
                            <b><a>Call: 1800 513 1678</a></b>
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div className="row footer-top">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 search" type="search" placeholder="Email address" aria-label="Email"/>
                    <button className="btn btn-outline-success my-2 my-sm-0 subscribe" type="submit">SUBSCRIBE</button>
                </form>
                <div>
                    <span>twitter</span>
                    <span>instagram</span>
                    <span>facebook</span>
                </div>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        English
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">Action</button>
                        <button className="dropdown-item" type="button">Another action</button>
                        <button className="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
            <div className="row footer-body">
                <div className="housy">
                    <h6>HOUSY</h6>
                    <p>About us</p>
                    <p>Career</p>
                    <p>Press</p>
                    <p>Contact</p>
                </div>
                <div className="discovery">
                    <h6>DISCOVERY</h6>
                    <p>Trust & Security</p>
                    <p>Owner Portal</p>
                    <p>FAQ</p>
                </div>
                <div className="general">
                    <h6>GENERAL</h6>
                    <p>Conditions</p>
                    <p>Data protections</p>
                    <p>Imprint</p>
                </div>
                <div className="accounts">
                    <h6>ACCOUNTS</h6>
                    <p>Log In</p>
                    <p>Create Account</p>
                </div>
                <div className="doorep">
                    <p>doorep.de</p>
                </div>
            </div>
            <div className="row footer-bottom">
                <p>@2017.doorep.de</p>
            </div>
        </footer>

    </div>

)

export default App;