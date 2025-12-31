import React, {useEffect, useState, useContext} from 'react';
import Header from './Header';
import axios from "axios";
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { AuthContext } from './auth';

function ProductDetails() {

  const {currentuser} = useContext(AuthContext);
  console.log(currentuser)
  const [productDetails, setProductDetails] = useState([]);
  const params = useLocation();
  console.log(params);
  const [u, i, id] = useLocation().pathname.split("/");
  console.log(id, "id number");
  const [quantity, setQuantity] = useState(1);


  const decrement = () => {
    setQuantity(prev => Math.max(prev > 0 ? prev - 1 : 0));
  }

  const increment =  ()  =>  {
    setQuantity(prev => Math.max(prev  + 1));
  }

 

  const handleDetail = async ()=> {
    // if (currentuser) {
    //   const res = await axios.get("http://localhost:3000/products/:id",id, {
    //     withCredentials: true
    //   });

    // console.log(res, "LOGIN USER");
    // setProductDetails(res.data);
    // }
    // if (!currentuser) {
    const res = await axios.get(`http://localhost:3000/posts/${id}`, id,  {
      withCredentials: true
    });
    console.log(res, "guest");
    setProductDetails(res.data);
    console.log(res.data, "kioo");
    
    // }
    
    
  }
  const addToCart = async () => {
    const productId = id;
    try{
    const res = await axios.post("http://localhost:3000/posts/addtocart", { id, productId, quantity},
    {
      withCredentials:true
    });
    res;
    console.log(res, "add to cart");
    }catch(err){
      console.log(err, "error in cart");
    }
  }
  const cart = async () => {
     const res = await axios.get("http://localhost:3000/posts/carts", {
      withCredentials:true
     });
     res;
     console.log(res, "carts");

  } 

  useEffect(() => {
    handleDetail();
     cart();
  }, []);

 

  // const char = ',';
  // console.log()
  // const media = ;
  // if (char media) {
  //   media.split(",");
  //   console.log(media, "pull")
  // }
  // console.log(media, "media check");
  // console.log(media);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#212529] dark:text-gray-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          
          <main className="px-4 sm:px-10 lg:px-20 py-5">
            <div className="layout-content-container flex flex-col w-full max-w-7xl mx-auto">
              {/* Breadcrumbs */}
              <div className="flex flex-wrap gap-2 p-
              4">
                <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary" href="#">Home</a>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary capitalize" href="#">{productDetails.Category}</a>
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
                <span className="text-gray-900 dark:text-gray-100 text-sm font-medium leading-normal capitalize">{productDetails.ProductName}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-6">
                {/* Left Column: Image Gallery */}
                <div className="flex flex-col gap-4">
                  {/* Main Image */}
                  <div 
                    className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-xl aspect-square min-h-80" 
                    data-alt="Aperture Model Pro lens shown from the front"
                    style={{
                      backgroundImage: `url(../public/${currentuser.username}/${productDetails.ProductName}/${productDetails.media[0]})`
                    }}
                  ></div>
                  
                  {/* Thumbnails Carousel */}
                  <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-stretch p-1 gap-3">
                      <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-24">
                        <div 
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col border-2 border-primary" 
                          data-alt="Aperture Model Pro lens side view"
                          style={{
                            backgroundImage: `url(../public/${currentuser.username}/${productDetails.ProductName}/${productDetails.media[1]})`

                          }}
                        ></div>
                      </div>
                      <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-24">
                        <div 
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col" 
                          data-alt="Aperture Model Pro lens top view"
                          style={{
                            backgroundImage: `url(../public/${currentuser.username}/${productDetails.ProductName}/${productDetails.media[2]})`

                          }}
                        ></div>
                      </div>
                      <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-24">
                        <div 
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col" 
                          data-alt="Close up of Aperture Model Pro lens glass"
                          style={{
                            backgroundImage: `url(../public/${currentuser.username}/${productDetails.ProductName}/${productDetails.media[3]})`

                          }}
                        ></div>
                      </div>
                      <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-24">
                        <div 
                          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col" 
                          data-alt="Aperture Model Pro lens in use on a camera body"
                          style={{
                            backgroundImage: `url(../public/${currentuser.username}/${productDetails.ProductName}/${productDetails.media[4]})`

                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Product Info & Actions */}
                <div className="flex flex-col gap-6 py-4">
                  {/* Product Title */}
                  <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] capitalize">{productDetails.ProductName}</h1>
                  {console.log(productDetails, "productDeetails check")}
                  {/* Rating & Price */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-500">
                        <span className="material-symbols-outlined text-xl">star</span>
                        <span className="material-symbols-outlined text-xl">star</span>
                        <span className="material-symbols-outlined text-xl">star</span>
                        <span className="material-symbols-outlined text-xl">star</span>
                        <span className="material-symbols-outlined text-xl text-gray-300 dark:text-gray-600">star</span>
                      </div>
                      <a className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary" href="#">(121 reviews)</a>
                    </div>
                    <p className="text-gray-900 dark:text-white text-3xl font-bold">${productDetails.Price}</p>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{productDetails.ProductDescription}</p>
                  
                  <div className="h-px bg-gray-200 dark:bg-gray-800"></div>

                  {/* Customization Options */}
                  <div className="flex flex-col gap-6">
                    {/* Color Options */}
                    

                    {/* Size Options */}
                     
                  </div>

                  {/* Quantity & CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-700">
                      <button className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" onClick={decrement}>-</button>
                      <input className="w-12 text-center border-0 bg-transparent focus:ring-0 text-gray-900 dark:text-gray-200" type="text" value={quantity} onChange={(e) => { const int = parseInt(e.target.value, 10); setQuantity(Number.isNaN(int) ? 0 : Math.max(int, 0));  }}
/>
                      <button className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"  onClick={increment}>+</button>
                    </div>
                    <button className="flex-1 flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90" onClick={addToCart}>
                      Add to Cart
                    </button>
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Detailed Info Section */}
              <div className="mt-16">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                    <a className="border-primary text-primary whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Full Description</a>
                    <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Specifications</a>
                    <a className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-200 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" href="#">Customer Reviews</a>
                  </nav>
                </div>
                <div className="py-8 prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
                  <p>{productDetails.ProductDescription}</p>                   
                </div>
              </div>

              {/* Related Products */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">You Might Also Like</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Product Card 1 */}
                  <div className="flex flex-col gap-2 group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-800" 
                      data-alt="Aperture Camera Body"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbk4nQEYxXGwC1eKkl-ax3HYS2mIr62iDK3eEGJHhfcDje11HcPe0rFawwaEJxc_8Z9C8ENQPuaApsPaabGLFcecI7EsRTD1Jgoy9bYQkXT_sX-TTdXotPQ4aXL3xdBpBrguDYYQ-7vU4IyfPgJ7nxyTB2KeXi803M5gsjGxAI8V7U54MnbHHG2UHosdiJdmmpb55fsjnJtOIyrzeS_RGfaOSblHD13UjuHt3Ht6j0cE6w93Wq7yG8KsRzIGBtvoppB3WufcwuaZSk")`
                      }}
                    ></div>
                    <a className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary" href="#">Aperture Z-1 Body</a>
                    <p className="font-medium text-gray-600 dark:text-gray-400">$2,499.00</p>
                  </div>

                  {/* Product Card 2 */}
                  <div className="flex flex-col gap-2 group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-800" 
                      data-alt="Professional Camera Tripod"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpvxgxyWozRaZsnbLW4WpTpjycJdLNPkn4gKnuTEMGloMTqLtC98N-xcGg4x2H7LxOKJrmeUllHe__oEXsCo5ett_mOl51fv4MSKDYw2YClq-30PY9_KU-I2_FX6gxSPvIhRO6rbEL2BK_I3M6-FPsDsZDJNzJ0hXKsye46198XP3c3wINcmZ7Urya_XQCTFk8WqFjBghGV3gAwU4T6xt3fUbxtPD4X0wC_VB348NmQhDsmH34XOuOT8XY_QbOUhfwV1HN0YRxhYm3")`
                      }}
                    ></div>
                    <a className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary" href="#">Pro Carbon Tripod</a>
                    <p className="font-medium text-gray-600 dark:text-gray-400">$350.00</p>
                  </div>

                  {/* Product Card 3 */}
                  <div className="flex flex-col gap-2 group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-800" 
                      data-alt="Camera Lens Filter Kit"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDU9GIHraJjBRNXa5BjPFIVtFjUMr4C1lrKrSV9BiSiZkoMnX4AGtA1YWMoVpPSw06gUkjDnBekZmMs92TH_CxzywLAJ-paanG0SGZyLLf4aVGhlNz9bXTfaCzs-qC2A0ol-pm2CAA3p3M37w7u3cGqP-eB0vZCkD1n-KD8zl4LcSkq3MO88kd3Q4sIY4uTUz1sLxMpJnN0gy4Lzt0gh_ex8Py5ziedmXddoiAzxIWUtoWclMN-RV40rJEtxf55rfQynOIbdeksfHcR")`
                      }}
                    ></div>
                    <a className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary" href="#">ND Filter Kit</a>
                    <p className="font-medium text-gray-600 dark:text-gray-400">$120.00</p>
                  </div>

                  {/* Product Card 4 */}
                  <div className="flex flex-col gap-2 group">
                    <div 
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-800" 
                      data-alt="Leather Camera Bag"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSwXiomiWSMe9PAi0mqGOaA4qQ5csPz77H46Ln4QSwtS9TaYQrSAQYw4D8CZC3XHD78AkPjvxKz6-e8ATH3X0A5Hr1fbX89ncOZJHViHiz2reIwGNkL0L70x4uQ3_dXVsuB5MrMCctJS-FmCMiFag2mx6ZrpbdjXehgG0w_ZNNRRV4q5bhxBSpaqpAgRWdbiHATKsycD_xxWu_xQ6tXziGX1-tUvkaPOsFA0VNIuLROW6PZeZKp9CpDTmoDQKwPDGbg_mep8RbUS9N")`
                      }}
                    ></div>
                    <a className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary" href="#">Leather Shoulder Bag</a>
                    <p className="font-medium text-gray-600 dark:text-gray-400">$225.00</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;