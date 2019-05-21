
import React,{Component} from 'react'
import '../assets/css/Sort.css'
class Sort extends Component{



    render(){
        return (
            <div className="Sort">
                <div className="header">
                    <div className="header-background"></div>
                    <div className="toolbar statusbar-padding">
                        <span className="bar-button back-button" className="iconfont icon-houtui"></span>
                        <div className="header-title">
                            <div className="title">分类</div>
                        </div>
                    </div>
                </div>

                <div className="con">

					<aside>
						<div className="menu-left scrollbar-none r-line" id="sidebar">
							<ul>
								<li className="active">女士配件</li>
								<li >当季热门</li>
								<li >韩舍上装</li>
								<li >韩舍下装</li>
								<li >韩舍裙装</li>
								<li >特色女装</li>
								<li >热门品牌</li>
							</ul>
						</div>
					</aside>
					<section className="menu-right padding-all j-content">
						<h5>女士配件</h5>
						<ul>
							<li className="w-3"><a href="page.html"></a> <img src="./images/img_2.jpg" /><span>围巾围脖</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>披肩</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>丝巾</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>春夏帽子</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>双肩背包</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>腰带腰链</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>耳环耳钉</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>限量奢品</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>当季热门</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>针织衫</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>牛仔裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>衬衫</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>短外套</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>连衣裙</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>卫衣</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>毛衣</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>韩舍上装</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>小西装</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>皮衣</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>夹克</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>卫衣</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>韩舍下装</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>牛仔裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>休闲裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>七分裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>九分裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>背带裤</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>热裤</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>韩舍裙装</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>婚纱</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>连衣裙</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>长裙</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>短裙</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>特色女装</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>短裙</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>衬衫</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>连衣裙</span></li>
						</ul>
					</section>
					<section className="menu-right padding-all j-content">
						<h5>热门品牌</h5>
						<ul>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>宝格丽</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>蔻驰</span></li>
							<li className="w-3"><a href="#"></a> <img src="./images/img_2.jpg" /><span>纪梵希</span></li>
						</ul>
					</section>
				</div>

        </div>
        )
	}



}

export default Sort;