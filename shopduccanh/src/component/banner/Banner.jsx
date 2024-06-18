import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Banner.module.css';

const Banner = () => {
  return (
    <div>
     
        {/* Banner Section Begin */}
        <section className={`${style.banner} banner spad`}>
          <div className="container">
            <div className="row">
              <div className={`col-lg-7 offset-lg-4 ${style.banner__col}`}>
                <div className={`${style.banner__item} banner__item`}>
                  <div className={`${style.banner__item__pic} banner__item__pic`}>
                    <img src="img/banner/banner-1.jpg" alt="" />
                  </div>
                  <div className={`${style.banner__item__text} banner__item__text`}>
                    <h2>Clothing Collections 2030</h2>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className={`col-lg-5 ${style.banner__col}`}>
                <div className={`${style.banner__item} ${style['banner__item--middle']} banner__item banner__item--middle`}>
                  <div className={`${style.banner__item__pic} banner__item__pic`}>
                    <img src="img/banner/banner-2.jpg" alt="" />
                  </div>
                  <div className={`${style.banner__item__text} banner__item__text`}>
                    <h2>Accessories</h2>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
              <div className={`col-lg-7 ${style.banner__col}`}>
                <div className={`${style.banner__item} ${style['banner__item--last']} banner__item banner__item--last`}>
                  <div className={`${style.banner__item__pic} banner__item__pic`}>
                    <img src="img/banner/banner-3.jpg" alt="" />
                  </div>
                  <div className={`${style.banner__item__text} banner__item__text`}>
                    <h2>Shoes Spring 2030</h2>
                    <a href="#">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner Section End */}
    </div>
  )
}

export default Banner
