import { Link } from "react-router-dom";
import RouterHeader from "./RouterHeader";
export default function Header() {
    return (
        <header className="primary">
        <div className="firstbar">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="brand">
                <Link to="/">
                <img src="assets/images/logo.png" alt="Magz Logo" />
              </Link>
                </div>						
              </div>
              <div className="col-md-6 col-sm-12">
                <form className="search" autoComplete="off">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" name="q" className="form-control" placeholder="Nơi bạn tìm được mọi thứ..." />									
                      <div className="input-group-btn">
                        <button className="btn btn-primary"><i className="ion-search" /></button>
                      </div>
                    </div>
                  </div>
                  
                </form>								
              </div>
              <div className="col-md-3 col-sm-12 text-right">
                <ul className="nav-icons">
                  <li><Link to="/register"><i className="ion-person-add" /><div>Đăng ký</div></Link></li>
                  <li><Link to="/login"><i className="ion-person" /><div>Đăng nhập</div></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Start nav */}
        <nav className="menu">
          <div className="container">
            <div className="brand">
              <Link to="/">
                <img src="assets/images/logo.png" alt="Magz Logo" />
              </Link>
            </div>
            <div className="mobile-toggle">
              <a href="#" data-toggle="menu" data-target="#menu-list"><i className="ion-navicon-round" /></a>
            </div>
            <div className="mobile-toggle">
              <a href="#" data-toggle="sidebar" data-target="#sidebar"><i className="ion-ios-arrow-left" /></a>
            </div>
            <div id="menu-list">
              <ul className="nav-list">
              <li><Link to="/">Trang chủ</Link></li>
                <li className="dropdown magz-dropdown">
                  <a href="category.html">Góc nhìn <i className="ion-ios-arrow-right" /></a>
                  <ul className="dropdown-menu">
                    
                    {/* <li className="dropdown magz-dropdown">
                      <a href="#">Tin tức trong ngày <i className="ion-ios-arrow-right" /></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/login">Chuyển động trong nước</Link></li>
                        <li><Link to="/register">Bóng đá thế giới</Link></li>
                        <li><a href="forgot.html">Forgot Password</a></li>
                        <li><a href="reset.html">Reset Password</a></li>
                      </ul>
                    </li> */}
                    <li><a href="category.html">Nhiều bình luận</a></li>
                    <li><a href="single.html">Covid 19</a></li>
                    <li><a href="page.html">Môi trường</a></li>
                    
                  </ul>
                </li>
                <li className="dropdown magz-dropdown"><a href="#">Kinh doanh <i className="ion-ios-arrow-right" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="category.html">Chứng khoán</a></li>
                   
                    <li><a href="category.html">Bất động sản</a></li>
                    <li><a href="category.html">Bảo hiểm</a></li>
                    <li><a href="category.html">E Commerce 40</a></li>
                    
                  </ul>
                </li>
                <li className="dropdown magz-dropdown"><a href="#">Thể thao<i className="ion-ios-arrow-right" /></a>
                  <ul className="dropdown-menu">
                   <li className="dropdown magz-dropdown">
                      <a href="#">Bóng đá <i className="ion-ios-arrow-right" /></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/login">Trong nước</Link></li>
                        <li><Link to="/register">Ngoại Hạng Anh</Link></li>
                        <li><a href="forgot.html">Ligue 1</a></li>
                        <li><a href="reset.html">Ý</a></li>
                      </ul>
                    </li> 
                   
                    <li><a href="category.html">Bất động sản</a></li>
                    <li><a href="category.html">Bảo hiểm</a></li>
                    <li><a href="category.html">E Commerce 40</a></li>
                    
                  </ul>
                </li>
                <li className="dropdown magz-dropdown magz-dropdown-megamenu"><a href="#">Mega Menu <i className="ion-ios-arrow-right" /> <div className="badge">Hot</div></a>
                  <div className="dropdown-menu megamenu">
                    <div className="megamenu-inner">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="megamenu-title">Trending</h2>
                            </div>
                          </div>
                          <ul className="vertical-menu">
                            <li><a href="#"><i className="ion-ios-circle-outline" /> Mega menu is a new feature</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline" /> This is an example</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline" /> For a submenu item</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline" /> You can add</a></li>
                            <li><a href="#"><i className="ion-ios-circle-outline" /> Your own items</a></li>
                          </ul>
                        </div>
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="megamenu-title">Featured Posts</h2>
                            </div>
                          </div>
                          <div className="row">
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="assets/images/news/img10.jpg" alt="Sample Article" />
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 10, 2016</div>
                                    <div className="category"><a href="category.html">Healthy</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="assets/images/news/img11.jpg" alt="Sample Article" />
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 13, 2016</div>
                                    <div className="category"><a href="category.html">Lifestyle</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                            <article className="article col-md-4 mini">
                              <div className="inner">
                                <figure>
                                  <a href="single.html">
                                    <img src="assets/images/news/img14.jpg" alt="Sample Article" />
                                  </a>
                                </figure>
                                <div className="padding">
                                  <div className="detail">
                                    <div className="time">December 14, 2016</div>
                                    <div className="category"><a href="category.html">Travel</a></div>
                                  </div>
                                  <h2><a href="single.html">Duis aute irure dolor in reprehenderit in voluptate</a></h2>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>								
                    </div>
                  </div>
                </li>
                <li className="dropdown magz-dropdown magz-dropdown-megamenu"><a href="#">Column <i className="ion-ios-arrow-right" /></a>
                  <div className="dropdown-menu megamenu">
                    <div className="megamenu-inner">
                      <div className="row">
                        <div className="col-md-3">
                          <h2 className="megamenu-title">Column 1</h2>
                          <ul className="vertical-menu">
                            <li><a href="#">Example 1</a></li>
                            <li><a href="#">Example 2</a></li>
                            <li><a href="#">Example 3</a></li>
                            <li><a href="#">Example 4</a></li>
                            <li><a href="#">Example 5</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h2 className="megamenu-title">Column 2</h2>
                          <ul className="vertical-menu">
                            <li><a href="#">Example 6</a></li>
                            <li><a href="#">Example 7</a></li>
                            <li><a href="#">Example 8</a></li>
                            <li><a href="#">Example 9</a></li>
                            <li><a href="#">Example 10</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h2 className="megamenu-title">Column 3</h2>
                          <ul className="vertical-menu">
                            <li><a href="#">Example 11</a></li>
                            <li><a href="#">Example 12</a></li>
                            <li><a href="#">Example 13</a></li>
                            <li><a href="#">Example 14</a></li>
                            <li><a href="#">Example 15</a></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <h2 className="megamenu-title">Column 4</h2>
                          <ul className="vertical-menu">
                            <li><a href="#">Example 16</a></li>
                            <li><a href="#">Example 17</a></li>
                            <li><a href="#">Example 18</a></li>
                            <li><a href="#">Example 19</a></li>
                            <li><a href="#">Example 20</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown magz-dropdown"><a href="#">Dropdown Icons <i className="ion-ios-arrow-right" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#"><i className="icon ion-person" /> My Account</a></li>
                    <li><a href="#"><i className="icon ion-heart" /> Favorite</a></li>
                    <li><a href="#"><i className="icon ion-chatbox" /> Comments</a></li>
                    <li><a href="#"><i className="icon ion-key" /> Change Password</a></li>
                    <li><a href="#"><i className="icon ion-settings" /> Settings</a></li>
                    <li className="divider" />
                    <li><a href="#"><i className="icon ion-log-out" /> Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End nav */}
        
      </header>
      
    );
}