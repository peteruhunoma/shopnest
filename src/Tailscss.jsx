import React from "react";
import image from "./assets/image.jpeg";
import favicon from "./assets/favicon.ico";

function Tailscss(){
    return(
        <div className="main-content bg-background-light">
            <div className="header bg-background-light">
                <div className="row">
                    <h1 className="">shoeStore</h1>
                    <ul>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Sales</a></li>
                    </ul>
                </div>
                <div className="row">
                     <div className="search-box">
                        <img src={favicon} alt="" />
                        <input type="text" placeholder="search products" />
                     </div>
                     <img src={favicon} alt="" />
                     <img src={favicon} alt="" />
                     

                </div>
            </div>
            <div className="content-page ">
                <div className="directory">
                    <a href="#">Home / </a>
                    <a href="#">Men / </a>
                    <a href="#"> Shoes</a>
                </div>
                <div className="category-name">
                    <h1>Men's Shoes</h1>
                    <p>showing 1-12 of 86 results</p>
                </div>
                <div className="category-layout">
                    <div className="category-box ">
                        <h4>Filters</h4>
                        <p>Category</p>
                        <div className="category">
                            <input type="checkbox" name="sneaker" id="sneaker" />
                            <p>sneakers</p>
                        </div>
                        <div className="category">
                            <input type="checkbox" name="Boots" id="sneaker" />
                            <p>Boots</p>
                        </div>
                        <div className="category">
                            <input type="checkbox" name="Loafers" id="sneaker" />
                            <p>Loafers</p>
                        </div>
                        <div className="category margin">
                            <input type="checkbox" name="Sandals" id="sneaker" />
                            <p>Sandals</p>
                        </div>
                        <div className="range">
                            <p>Price Range</p>
                            <input type="range" name="range" id="" />
                            <div className="pricing-range">
                                <p>$0</p>
                                <p>$500+</p>                                
                            </div>
                            
                        </div>
                        <div className="brand">
                            <p>Brand</p>
                            <div className="brand-list">
                                <input type="checkbox" name="Athie-chic" id="athic-chic" />
                                <p>Athic-Chic</p>

                            </div>
                            <div className="brand-list">
                                <input type="checkbox" name="UrbanTrend" id="UrbanTrend" />
                                <p>UrbanTrend</p>
                                
                            </div>
                            <div className="brand-list">
                                <input type="checkbox" name="StrideRite" id="StrideRite" />
                                <p>StrideRite</p>
                            </div>
                        </div>
                        <button type="submit" className="apply text- white bg-blue">Apply Filters</button>
                        <button className="text-gray clear">Clear All</button>                
                    </div>
                    <div className="product-grid">
                        <option value="">
                            <select name="relevance" id="">sort by Relevance</select>
                            <select name="relevance" id="">sort by date</select>
                            <select name="relevance" id="">sort by popular</select>
                        </option>
                        <div className="box-grid">
                            <div className="product">
                                <img src={image} alt="" />
                                <p>Classic Runner Sneker</p>
                                <p>$120.00</p>
                            </div>
                            <div className="product">
                                <img src={image} alt="" />
                                <p>Classic Runner Sneker</p>
                                <p>$120.00</p>
                            </div>
                            <div className="product">
                                <img src={image} alt="" />
                                <p>Classic Runner Sneker</p>
                                <p>$120.00</p>
                            </div>
                            <div className="product">
                                <img src={image} alt="" />
                                <p>Classic Runner Sneker</p>
                                <p>$120.00</p>
                            </div>
                            <div className="product">
                                <img src={image} alt="" />
                                <p>Classic Runner Sneker</p>
                                <p>$120.00</p>
                            </div>
                            
                        </div>
                    <div className="next-page">
                                <p>{"<"}</p>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                                <p>8</p>
                                <p>{">"}</p>
                    </div>    
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Tailscss;