import React from 'react';
import Slider from '../../component/slider/Slider';
import Banner from '../../component/banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div>
        <Slider></Slider>
        <Banner></Banner>

        {/* Product Section Begin */}
        <section className={`${style.product} product spad`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className={`${style['filter__controls']} filter__controls`}>
                  <li className={`active`} data-filter="*">
                    Best Sellers
                  </li>
                  <li data-filter=".new-arrivals">New Arrivals</li>
                  <li data-filter=".hot-sales">Hot Sales</li>
                </ul>
              </div>
            </div>
            <div className="row product__filter">
              <div className={`col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals ${style.product__item}`}>
                <div className={`${style['product__item']} product__item`}>
                  <div className={`${style['product__item__pic']} set-bg`} data-setbg="img/product/product-1.jpg">
                    <span className={`${style.label} label`}>New</span>
                    <ul className={`${style['product__hover']} product__hover`}>
                      <li><a href="#"><img src="img/icon/heart.png" alt="" /></a></li>
                      <li><a href="#"><img src="img/icon/compare.png" alt="" /> <span>Compare</span></a></li>
                      <li><a href="#"><img src="img/icon/search.png" alt="" /></a></li>
                    </ul>
                  </div>
                  <div className={`${style['product__item__text']} product__item__text`}>
                    <h6>Piqué Biker Jacket</h6>
                    <a href="#" className={`${style.add_cart} add-cart`}>+ Add To Cart</a>
                    <div className={`${style.rating} rating`}>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </div>
                    <h5>$67.24</h5>
                    <div className={`${style['product__color__select']} product__color__select`}>
                      <label htmlFor="pc-1">
                        <input type="radio" id="pc-1" />
                      </label>
                      <label className={`active black`} htmlFor="pc-2">
                        <input type="radio" id="pc-2" />
                      </label>
                      <label className={`grey`} htmlFor="pc-3">
                        <input type="radio" id="pc-3" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Continue with other product items similarly */}
            </div>
          </div>
        </section>
        {/* Product Section End */}

        {/* Categories Section Begin */}
        <section className={`${style.categories} categories spad`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className={`${style['categories__text']} categories__text`}>
                  <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${style['categories__hot__deal']} categories__hot__deal`}>
                  <img src="img/product-sale.png" alt="" />
                  <div className={`${style['hot__deal__sticker']} hot__deal__sticker`}>
                    <span>Sale Of</span>
                    <h5>$29.99</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className={`${style['categories__deal__countdown']} categories__deal__countdown`}>
                  <span>Deal Of The Week</span>
                  <h2>Multi-pocket Chest Bag Black</h2>
                  <div className={`${style['categories__deal__countdown__timer']} categories__deal__countdown__timer`} id="countdown">
                    <div className={`${style.cd_item} cd-item`}>
                      <span>3</span>
                      <p>Days</p>
                    </div>
                    <div className={`${style.cd_item} cd-item`}>
                      <span>1</span>
                      <p>Hours</p>
                    </div>
                    <div className={`${style.cd_item} cd-item`}>
                      <span>50</span>
                      <p>Minutes</p>
                    </div>
                    <div className={`${style.cd_item} cd-item`}>
                      <span>18</span>
                      <p>Seconds</p>
                    </div>
                  </div>
                  <a href="#" className={`${style.primary_btn} primary-btn`}>Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}

        {/*   Instagram Section Begin  */}
        <section className={style.instagram + " instagram spad"}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="instagram__pic">
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-1.jpg"></div>
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-2.jpg"></div>
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-3.jpg"></div>
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-4.jpg"></div>
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-5.jpg"></div>
                  <div className="instagram__pic__item set-bg" data-setbg="img/instagram/instagram-6.jpg"></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={style.instagram__text + " instagram__text"}>
                  <h2>Instagram</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                  <h3>#Male_Fashion</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*   Instagram Section End  */}

        {/*   Latest Blog Section Begin  */}
        <section className={style.latest + " latest spad"}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <span>Latest News</span>
                  <h2>Fashion New Trends</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-1.jpg"></div>
                  <div className="blog__item__text">
                    <span><img src="img/icon/calendar.png" alt="" /> 16 February 2020</span>
                    <h5>What Curling Irons Are The Best Ones</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-2.jpg"></div>
                  <div className="blog__item__text">
                    <span><img src="img/icon/calendar.png" alt="" /> 21 February 2020</span>
                    <h5>Eternity Bands Do Last Forever</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-3.jpg"></div>
                  <div className="blog__item__text">
                    <span><img src="img/icon/calendar.png" alt="" /> 28 February 2020</span>
                    <h5>The Health Benefits Of Sunglasses</h5>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*   Latest Blog Section End  */}

        {/*   Footer Section Begin  */}
        <footer className={style.footer + " footer"}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="#"><img src="img/footer-logo.png" alt="" /></a>
                  </div>
                  <p>The customer is at the heart of our unique business model, which includes design.</p>
                  <a href="#"><img src="img/payment.png" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Shopping</h6>
                  <ul>
                    <li><a href="#">Clothing Store</a></li>
                    <li><a href="#">Trending Shoes</a></li>
                    <li><a href="#">Accessories</a></li>
                    <li><a href="#">Sale</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Shopping</h6>
                  <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Payment Methods</a></li>
                    <li><a href="#">Delivary</a></li>
                    <li><a href="#">Return & Exchanges</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h6>NewLetter</h6>
                  <div className="footer__newslatter">
                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                    <form action="#">
                      <input type="text" placeholder="Your email" />
                      <button type="submit"><span className="icon_mail_alt"></span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer__copyright__text">
                  {/*   Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                  <p>Copyright ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>2020
                    All rights reserved | This template is made with <i className="fa fa-heart-o"
                      aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  </p>
                  {/*   Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*   Footer Section End  */}

        {/*   Search Begin  */}
        <div className={style["search-model"] + " search-model"}>
          <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
              <input type="text" id="search-input" placeholder="Search here....." />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
