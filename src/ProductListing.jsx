import React from 'react';
import Header from './Header';
import Footer from './Footer';

function ProductListing() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtering Sidebar */}
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="sticky top-28 space-y-6">
              {/* Filters Header for Mobile */}
              <div className="flex justify-between items-center lg:hidden">
                <h3 className="text-lg font-bold text-heading-light dark:text-heading-dark">Filters</h3>
                <button className="p-2">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              {/* Category Filter */}
              <div className="border-b border-border-light dark:border-border-dark pb-6">
                <h4 className="font-bold mb-3 text-heading-light dark:text-heading-dark">Category</h4>
                <ul className="space-y-2 text-sm">
                  <li><a className="hover:text-accent transition-colors" href="#">All Jackets</a></li>
                  <li><a className="hover:text-accent transition-colors" href="#">Bomber Jackets</a></li>
                  <li><a className="text-accent font-semibold" href="#">Denim Jackets</a></li>
                  <li><a className="hover:text-accent transition-colors" href="#">Leather Jackets</a></li>
                  <li><a className="hover:text-accent transition-colors" href="#">Windbreakers</a></li>
                </ul>
              </div>
              
              {/* Price Filter */}
              <div className="border-b border-border-light dark:border-border-dark pb-6">
                <h4 className="font-bold mb-4 text-heading-light dark:text-heading-dark">Price Range</h4>
                <div className="relative h-1 bg-gray-300 dark:bg-gray-700 rounded-full">
                  <div className="absolute h-1 bg-accent rounded-full" style={{left: '10%', width: '60%'}}></div>
                  <div className="absolute w-4 h-4 -mt-1.5 bg-white border-2 border-accent rounded-full cursor-pointer" style={{left: '10%'}}></div>
                  <div className="absolute w-4 h-4 -mt-1.5 bg-white border-2 border-accent rounded-full cursor-pointer" style={{left: '70%'}}></div>
                </div>
                <div className="flex justify-between text-sm mt-3">
                  <span>$50</span>
                  <span>$500</span>
                </div>
              </div>
              
              {/* Brand Filter */}
              <div className="border-b border-border-light dark:border-border-dark pb-6">
                <h4 className="font-bold mb-3 text-heading-light dark:text-heading-dark">Brand</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <input className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mr-2" id="brand1" type="checkbox" />
                    <label htmlFor="brand1">Apex Gear</label>
                  </li>
                  <li className="flex items-center">
                    <input defaultChecked className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mr-2" id="brand2" type="checkbox" />
                    <label htmlFor="brand2">Urban Threads</label>
                  </li>
                  <li className="flex items-center">
                    <input className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent mr-2" id="brand3" type="checkbox" />
                    <label htmlFor="brand3">Nomad Supply</label>
                  </li>
                </ul>
              </div>
              
              {/* Color Filter */}
              <div>
                <h4 className="font-bold mb-3 text-heading-light dark:text-heading-dark">Color</h4>
                <div className="flex flex-wrap gap-3">
                  <button className="w-7 h-7 rounded-full bg-black border-2 border-accent"></button>
                  <button className="w-7 h-7 rounded-full bg-blue-800"></button>
                  <button className="w-7 h-7 rounded-full bg-white border border-gray-300"></button>
                  <button className="w-7 h-7 rounded-full bg-gray-500"></button>
                  <button className="w-7 h-7 rounded-full bg-green-700"></button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-4">
                <button className="w-full text-white bg-accent hover:bg-accent/90 focus:ring-4 focus:outline-none focus:ring-accent/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Apply Filters
                </button>
                <button className="w-full text-text-light dark:text-text-dark bg-gray-200/60 dark:bg-gray-800/60 hover:bg-gray-300/60 dark:hover:bg-gray-700/60 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Clear All
                </button>
              </div>
            </div>
          </aside>
          
          {/* Main Content Area */}
          <div className="w-full lg:w-3/4 xl:w-4/5">
            {/* Breadcrumbs & Heading */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 text-sm mb-2">
                <a className="hover:text-accent transition-colors" href="#">Home</a>
                <span className="text-gray-400">/</span>
                <a className="hover:text-accent transition-colors" href="#">Shop</a>
                <span className="text-gray-400">/</span>
                <span className="text-heading-light dark:text-heading-dark font-medium">Men's Jackets</span>
              </div>
              <h1 className="text-4xl font-black text-heading-light dark:text-heading-dark tracking-tight">
                Men's Jackets
              </h1>
            </div>
            
            {/* Sort & View Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6 p-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Showing 24 of 128 results</p>
              <div className="flex items-center gap-3">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-200/60 dark:bg-gray-800/60 px-4 hover:bg-gray-300/60 dark:hover:bg-gray-700/60 transition-colors">
                  <p className="text-sm font-medium">Sort by: Price High-Low</p>
                  <span className="material-symbols-outlined text-base">expand_more</span>
                </button>
                <div className="hidden sm:flex items-center gap-1 p-1 rounded-lg bg-gray-200/60 dark:bg-gray-800/60">
                  <button className="p-2 rounded-md bg-white dark:bg-gray-700 text-accent">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button className="p-2 rounded-md text-gray-500 hover:bg-white dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined">view_list</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="Tan trench coat on a hanger"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBfIE3OWZVBBEvUDZl2aNS9MwMD7CJ1nKszfB5iEA2BTVPHIO0nE7-KfCNXRtpGxAVzEM7aj5oo01FcRYtgSjmg-HjJky2-4dik-fW2bQxQw-n5Sp8aA4rSdcH07uboGKSYSK-2zzrJORSEFANdVUIAiDlAXScsD0SGEHPfW7texCR7o5d-kXkuomCVGUE0jgvVhXXuiruVfSXxoG93x1OIOxNJnimMwT1LvH1cUH23kJV_xND3fsREZBbdaK-T9ziktZNYw4Rs2tL"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">Classic Trench Coat</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Apex Gear</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$180.00</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-gray-400 text-base">star_half</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="Man wearing a blue denim jacket"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_s1gP4xjGFFXRgTM75wutTcAPNP8j9Hvva0EeV-3wcofIP1OnVn24p6J4TDzaqsy3IjaDQBOobyzWwrzAkmkUeH73e5AKZymapGT-efXzpssrn79OE0OhGdSXgv09ig5eWROmclNXQYEZj3bggyHFkLJjiEe6blil1TSvjtBFX1S-B9_XhprwmuFEsWGDI39vKlrJSxJNTWA4JLUPsQZKbJyrG11zPhz8OWJ-y__yT2fgKvs1ssZzDUAILhLOWU_8uAGlSdqUCGMH"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">Urban Denim Jacket</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Urban Threads</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$89.99</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="Black leather jacket on a mannequin"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ZJx-5_-g1u7b0kFN_mX3swxRNrxHinJ58rg16UHjlkdo2f4jw882pCO4XW8ET9TJ7Rm7ZHyWK2cJE98VWK1CYGn5QQC-SUUXeAXpmnxWRppAUQW0RDYeSuZiGr5njPAxl05kRonW0BfQD41A2bR9i5Gl-wdKVb0rZwmhOUZB9ug3-7XcSzMjBtYV3_coZy3Sk2O3yqCeHaPvRcIPm_kqpPTbKd9qRDNQXtmGtnmj7b3kpGkbpEUBSwBbwr1kghQz_NtKmOIs3Jy8"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">Nomad Biker Jacket</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nomad Supply</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$250.00</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-gray-400 text-base">star</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="A person wearing a black windbreaker jacket"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzGBcqW0tDvhSLY4CdEBeNNNw_fdSBbR9OKvGLWRyIPBvRIDRlbRsZfvTcTcPFwBfaWHoFvbsZZvpJFeaBJ_4jQGtQo3zcqy-ifYVKneborWARvKJAPasjU6CIb577WIf0jd8-n3FYEraMEsV-qHWuPO1B9rJo-u82sutVZZdaWHNmz-uuXOIHzEXsAoQxIPtmYGv-UuBhqU_3Bn3MoM4ZmqlQNotxIbgTZZ9zRYi-uy3dznViLLewu6FPxu73sI9wF5LU0k5e34CP"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">Stealth Windbreaker</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Apex Gear</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$120.00</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-gray-400 text-base">star_half</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="A green bomber jacket with orange lining"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKB5hcwkzaz88LVmlezC7ZPtCPwu1Xs6GG_4ExbC0SB6t4r66vxOqOaaH_TOUceTMYmS07yBe7mOj3ym4ZLfRqDAxoO7WZPW1sSFnXhTv8Rul7nFP_OsXSfkRVQIp8b_6Wr_yWbDIUKfKGYwSi8UI5wYw2fOwTMvVAGff4eiFFa7arxaRuQLZmukGS5uFGHw27lgCiF1Sw4kBjKz8-BoeLKTzoeXx4tmkHmfr4i8nKAilGNeBglrhG3NyjlLjSP77qnTnO_QHhlGc2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">MA-1 Bomber Jacket</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Urban Threads</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$155.00</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="group relative bg-white dark:bg-gray-900/50 rounded-lg overflow-hidden border border-border-light dark:border-border-dark transition-shadow hover:shadow-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                  <img
                    alt="Person wearing a rugged brown field jacket"
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoZWqkalLnPQR2rL2cnwWAfAFu_tw9c5LYlNPtDwuUs6PtPzujiNcGSUjBgfRfQP_TxDz1BgvFLz-q3rDWzkB237JFLeimDzPyBnXjIPIk_RH1zbgbh_nge96Wwnme-jnx70tJ0U5wM5a4HBpj0SzXC9ZXOEDpGJm1bCQDchi73BVIbGH4jAvS7xb6yVtGUT1uao-GX8rXxGcwVZ-87PIEn5BaljyGYVL57ylcg-cJB1Fgg-Q4Sx2XkGEWrohbx2yKWsMPYiyxmHPt"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-light dark:text-heading-dark">Field Utility Jacket</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nomad Supply</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-heading-light dark:text-heading-dark">$195.00</p>
                    <div className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-yellow-500 text-base">star</span>
                      <span className="material-symbols-outlined text-gray-400 text-base">star</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
                  <button className="flex-1 text-primary dark:text-white bg-primary/20 dark:bg-white/20 hover:bg-primary/30 dark:hover:bg-white/30 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Quick View</button>
                  <button className="flex-1 text-white bg-accent hover:bg-accent/90 font-bold rounded-lg text-sm px-4 py-2.5 text-center transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
            
            {/* Pagination */}
            <nav aria-label="Pagination" className="flex items-center justify-center pt-10 mt-10 border-t border-border-light dark:border-border-dark">
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors" href="#">
                <span className="material-symbols-outlined">chevron_left</span>
              </a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors font-medium" href="#">1</a>
              <a aria-current="page" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white font-medium" href="#">2</a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors font-medium" href="#">3</a>
              <span className="inline-flex items-center justify-center w-10 h-10">...</span>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors font-medium" href="#">8</a>
              <a className="inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors" href="#">
                <span className="material-symbols-outlined">chevron_right</span>
              </a>
            </nav>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ProductListing;