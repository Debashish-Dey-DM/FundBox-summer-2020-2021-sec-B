import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../dummyLogo.png';
// import logos from '../public/assets/img/undraw_team_work_k80m.png';

const HomeDefault = () => {
    return (
        <div>
            <div>
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
            </div>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a href="#" className=""><span className="mr-2  icon-envelope-open-o"></span> <span className="d-none d-md-inline-block">info@fundbox.com</span></a>
                            <span className="mx-md-2 d-inline-block"></span>
                            <a href="#" className=""><span className="mr-2  icon-phone"></span> <span className="d-none d-md-inline-block">+880 1776 364781</span></a>


                            <div className="float-right">
                                <a href="#" className=""><span className="mr-2  icon-youtube"></span> <span className="d-none d-md-inline-block"></span></a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className=""><span className="mr-2  icon-facebook"></span> <span className="d-none d-md-inline-block"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">

                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="site-logo">
                            <img src={logo} alt="site logo" />
                        </div>

                        {/* <div className="col-12">
                            <nav className="site-navigation text-right ml-auto " role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                <li><a href="/" className="nav-link">Home</a></li>
                                <li className="has-children">
                                    <a href="#about-section" className="nav-link">Category</a>
                                    <ul className="dropdown arrow-top">
                                    
                                    </ul>
                                </li>
                                <li><a href="/Ourteam/Organization" className="nav-link">Organization</a></li>
                                <li><a href="/events" className="nav-link">Events</a></li>
                                <li><a href="/contact" className="nav-link">Contact</a></li>
                                <li><a href="/FAQ" className="nav-link">FAQ</a></li>

                                
                                <li><a href="/SignIn" className="nav-link">Sign in</a></li>
                                <li><a href="/events"><button type="button" className="btn btn-outline-success">Start Donation</button></a></li>
                            
                                </ul>
                            </nav>
                        </div> */}

                        <div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>

                    </div>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 style={{ "marginTop" :"90px"}}>Fundraising for the people and causes you care about</h1>
                        <h5>Get Start Today</h5>
                        <button type="button" className="btn btn-lg btn-primary" disabled>Start Donation</button>
                    </div>
                    <div className="col-6">
                        <img src={process.env.PUBLIC_URL + '/assets/img/undraw_team_work_k80m.png'} height="500"/>
                    </div>
                </div>
            </div>
            <div className="event" style={{ "background-color" :"#F2F4F4"}}>
                <div className="container">
                    <div className="row" style={{ "marginBottom" :"00px"}}>
                        <div className="col-12" >
                            <h2 className="text-center" style={{ "margin" :"30px 0px"}}>Feature Events</h2>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-12 dashboard-users-danger">
                                    <a href="{{ URL::to('/EventDetails/'.base64_encode($feaEvent->id)) }}" className="text-dark">
                                        <div className="col-4">
                                            <div className="card" style={{ "marginTop" :"10px","width": "20rem"}}>
                                                <img className="card-img-top" style={{ "height" :"13.4rem"}} src={process.env.PUBLIC_URL + '/assets/img/loading.gif'} alt="Card image cap" />
                                                <div className="card-body" style={{ "text-align" :"center"}}>
                                                    <h5 className="card-title" style={{ "overflow" :"hidden","text-overflow":"ellipsis"}}>this is name</h5>
                                                    <p className="card-text" style={{ "height" :"80px","width":"250px","overflow":"hidden","text-overflow":"ellipsis"}}>This is details</p>
                                                    
                                                    <h6 style={{ "marginTop" :"10px"}}>Need ৳ 100</h6>
                                                    
                                                    <a href="#" className="btn btn-primary loginAlert" aria-hidden="true" onclick="" style={{ "color" :"white"}}>Donate Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12 dashboard-users-danger">
                                    <a href="{{ URL::to('/EventDetails/'.base64_encode($feaEvent->id)) }}" className="text-dark">
                                        <div className="col-4">
                                            <div className="card" style={{ "marginTop" :"10px","width": "20rem"}}>
                                                <img className="card-img-top" style={{ "height" :"13.4rem"}} src={process.env.PUBLIC_URL + '/assets/img/loading.gif'} alt="Card image cap" />
                                                <div className="card-body" style={{ "text-align" :"center"}}>
                                                    <h5 className="card-title" style={{ "overflow" :"hidden","text-overflow":"ellipsis"}}>this is name</h5>
                                                    <p className="card-text" style={{ "height" :"80px","width":"250px","overflow":"hidden","text-overflow":"ellipsis"}}>This is details</p>
                                                    
                                                    <h6 style={{ "marginTop" :"10px"}}>Need ৳ 100</h6>
                                                    
                                                    <a href="#" className="btn btn-primary loginAlert" aria-hidden="true" onclick="" style={{ "color" :"white"}}>Donate Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-12 dashboard-users-danger">
                                    <a href="{{ URL::to('/EventDetails/'.base64_encode($feaEvent->id)) }}" className="text-dark">
                                        <div className="col-4">
                                            <div className="card" style={{ "marginTop" :"10px","width": "20rem"}}>
                                                <img className="card-img-top" style={{ "height" :"13.4rem"}} src={process.env.PUBLIC_URL + '/assets/img/loading.gif'} alt="Card image cap" />
                                                <div className="card-body" style={{ "text-align" :"center"}}>
                                                    <h5 className="card-title" style={{ "overflow" :"hidden","text-overflow":"ellipsis"}}>this is name</h5>
                                                    <p className="card-text" style={{ "height" :"80px","width":"250px","overflow":"hidden","text-overflow":"ellipsis"}}>This is details</p>
                                                    
                                                    <h6 style={{ "marginTop" :"10px"}}>Need ৳ 100</h6>
                                                    
                                                    <a href="#" className="btn btn-primary loginAlert" aria-hidden="true" onclick="" style={{ "color" :"white"}}>Donate Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="status" style={{ "background-color" :"#F2F4F4"}}>
                <div className="container" style={{ "paddingBottom" :"30px"}}>
                    <h2 className="text-center">We will save the world</h2>
                    <h6 className="text-center"  style={{ "padding-bottom" :"30px"}}>We have the strongest community</h6>
                    <div className="row">
                        <div className="col-4" style={{ "text-align" :"center"}}>
                            <h2><b>100</b></h2>
                            <h3>Volunteers</h3>
                        </div>
                        <div className="col-4" style={{ "text-align" :"center"}}>
                            <h2><b>500</b></h2>
                            <h3>Events</h3>
                        </div>
                        <div className="col-4" style={{ "text-align" :"center"}}>
                            <h2><b>154863.00 ৳</b></h2>
                            <h3>Total Donation</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="event" style={{ "background-color" :"#ffffff"}}>
                <div className="container" style={{ "paddingBottom" :"30px"}}>
                    <div className="recommend-sli pb-0 mb-0 slick-slider">
                            <div className="osahan-slider-item mx-2">
                                <img style={{ "width":"50%","background-color" :"#ffffff","object-fit":"contain"}} src={process.env.PUBLIC_URL + '/assets/img/loading.gif'} className="img-fluid mx-auto rounded promo-slider" alt="Responsive image" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="event" >
                <div className="container" style={{ "height" :"200px","text-align": "center", "marginTop":"100px"}}>
                    <h2 style={{ "marginTop":"20px"}}>Ready to Join us?</h2>
                    <a type="button" href="{{URL::to('/joinOrg')}}" class="btn btn-success">Join as Organization</a>
                    <a type="button" href="{{URL::to('/joinSponsor')}}" class="btn btn-success">Join as Sponsor</a>
                </div>
            </div>

            <footer className="footer-01">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Fundbox</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <ul className="ftco-footer-social p-0">
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="ion-logo-twitter"></span></a></li>
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="ion-logo-facebook"></span></a></li>
                        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="ion-logo-instagram"></span></a></li>
                        </ul>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                    <h2 className="footer-heading">Latest Events</h2>
                                    <div className="block-21 mb-4 d-flex">
                        <img className="img mr-4 rounded" src="" alt="Event Image"/>
                        <div className="text">
                            <h5 className="text"><a href="#">Even the all-powerful Pointing has no control about</a></h5>
                            <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                        </div>
                        <div className="block-21 mb-4 d-flex">
                        <img className="img mr-4 rounded" src="{{ asset('/Pages/Home/Footer/images/img1.jpg')}}" alt="Event Image" />
                        <div className="text">
                            <h5 className="text"><a href="#">Even the all-powerful Pointing has no control about</a></h5>
                            <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                            </div>
                        </div>
                        </div>
                        </div>
                            <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                                <h2 className="footer-heading">Quick Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="/" className="py-2 d-block">Home</a></li>
                                        <li><a href="/about" className="py-2 d-block">About</a></li>
                                        <li><a href="/events" className="py-2 d-block">Events</a></li>
                                        <li><a href="/Ourteam/Organization" className="py-2 d-block">Organization</a></li>
                                        <li><a href="/Ourteam/Volunteers" className="py-2 d-block">Our Volunteers</a></li>
                                        <li><a href="/contact" className="py-2 d-block">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                                    <h2 className="footer-heading">Have a Questions?</h2>
                                    <div className="block-23 mb-3">
                        <ul>
                            <li><span className="icon ion-ios-pin"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                            <li><a href="#"><span className="icon ion-ios-call"></span><span className="text">+2 392 3929 210</span></a></li>
                            <li><a href="#"><span className="icon ion-ios-send"></span><span className="text">info@yourdomain.com</span></a></li>
                        </ul>
                        </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <div className="col-md-12 text-center">
                                <p className="copyright">Copyright All rights reserved | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a target="_blank">APWT_B_GROUP_7 </a></p>
                            </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default HomeDefault;