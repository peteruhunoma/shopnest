import React from 'react'

function CustomerReview() {
  return (
<div className="font-display">
<div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
<div className="layout-container flex h-full grow flex-col">
<div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
<div className="layout-content-container flex flex-col max-w-4xl flex-1">
<div className="flex flex-wrap justify-center gap-3 p-4 text-center">
<div className="flex w-full flex-col gap-3">
<p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">What Our Customers Say</p>
<p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Here's what our valued customers have to say about their Aperture experience.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-8 p-4 border-b border-slate-200 dark:border-slate-700 pb-8 mb-8">
<div className="flex flex-col gap-2 items-center text-center">
<p className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">4.8</p>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-blue" style={{fontSize: "18px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "18px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "18px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "18px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "18px"}}>star_half</span>
</div>
<p className="text-slate-900 dark:text-white text-base font-normal leading-normal">1,245 reviews</p>
</div>
<div className="grid min-w-[240px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-x-3 gap-y-3">
<p className="text-slate-900 dark:text-white text-sm font-normal leading-normal">5</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="rounded-full bg-blue" style={{width: "85"}}></div></div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-right">85%</p>
<p className="text-slate-900 dark:text-white text-sm font-normal leading-normal">4</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="rounded-full bg-blue" style={{width: "9%"}}></div></div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-right">9%</p>
<p className="text-slate-900 dark:text-white text-sm font-normal leading-normal">3</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="rounded-full bg-blue" style={{width: "3%"}}></div></div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-right">3%</p>
<p className="text-slate-900 dark:text-white text-sm font-normal leading-normal">2</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="rounded-full bg-blue" style={{width: "2%"}}></div></div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-right">2%</p>
<p className="text-slate-900 dark:text-white text-sm font-normal leading-normal">1</p>
<div className="flex h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="rounded-full bg-blue" style={{width: "1%"}}></div></div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal text-right">1%</p>
</div>
<div className="flex flex-col items-center justify-center sm:pl-8">
<button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-blue text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue/90 transition-colors w-full sm:w-auto">
<span className="material-symbols-outlined" style={{fontSize: "20px"}}>edit</span>
<span className="truncate">Add Review</span>
</button>
</div>
</div>
<div className="flex gap-3 p-3 flex-wrap pr-4 justify-center">
<div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-blue/20 pl-4 pr-4">
<p className="text-blue dark:text-white text-sm font-medium leading-normal">Most Recent</p>
</div>
<div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-700 pl-4 pr-4">
<p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">Highest Rating</p>
</div>
<div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-slate-200 dark:bg-slate-700 pl-4 pr-4">
<p className="text-slate-900 dark:text-slate-300 text-sm font-medium leading-normal">Lowest Rating</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-6">
<div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="avatar of Elena Rodriguez" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQhC-np34j2Gwt7w70djiaYikNuOF1aejwvwKOIeQwabszrc0DmLL_SNInvnRvK_QhNQ_MhoK199j7iR8bW9_Lz-FklHI1r3nKcn4UXcKsRl1JEkKbwtHa4wQqja2CNbDozt0RCyIucsPNaBRqdjhCL4XPDQeK2iMtbD2IvMfEewVffG2LUxlehzZ5CXMu-LqiQMdYLQCG0aSfpbnWI_z7q7DeWrghRDHDRrQexiy0EdtQf9r1VwU6U55SWHwmcU7PzToesq2dnd8Y")`}}></div>
<div className="flex-1">
<p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Elena Rodriguez</p>
<p className="text-green-500 text-sm font-normal leading-normal">Verified Purchase</p>
</div>
</div>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
</div>
<p className="text-slate-900 dark:text-white font-bold text-lg">Absolutely stunning quality!</p>
<p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">The camera I purchased exceeded all my expectations. The customer service was top-notch, guiding me through the selection process. I'm a customer for life!</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">2 days ago</p>
</div>
<div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="avatar of Mark Chen" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPKP9O-MvxFAahSU1IwapNthpkicg-ar2y4Ms7LaBjGoaTksmOX9fPORYis2_iPdbGJ2slUgniTG0ge3jHkW2QRr9hcB6abb9JPYuOTiKV2gaJhaQF6yD1aDgwaKQq5wvN4lm1-5fKKaejlsYSuq1fL8CmzQmU4kbJlAS9Cr_GlLJF1VscvqsoA88AFUmt0VRvYIi7tokU3Exbe1hm-y95cDlZgsy6L0eI64CY0QZplYXjxESXLPyXwQCPtsVYE7Dn1DNLI_0eXp0C")`}}></div>
<div className="flex-1">
<p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Mark Chen</p>
<p className="text-green-500 text-sm font-normal leading-normal">Verified Purchase</p>
</div>
</div>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-slate-300 dark:text-slate-600" style={{fontSize: "20px", fontVariationSettings: "'FILL' 0"}}>star</span>
</div>
<p className="text-slate-900 dark:text-white font-bold text-lg">Great product and fast shipping.</p>
<p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">The website was easy to navigate. The only reason for 4 stars is that I wish there were more accessories included, but overall a very positive experience.</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">1 week ago</p>
</div>
<div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="avatar of Sarah Jenkins" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7JPr4TKSPT0usKTF2PCSBXQEgWX-Knylgkd3ouOTgn4LHp7aO0sbRHKyOhUobviTY2k5IKVHUEaV05TkXyXTp_qYI4kRlBW7dwOxa1A1Y0sm5a7izZE13-YMXORnw0WjYb2LYbxXYiw5qs2ySHx4-QhCfWXFCe1vhuqrdmUa5CLCtl2MwpOs5VBBn00ZUYDmMAI89oscp-1EB_rTOc22K1n1cjAsv4wGOx4XLsbU6rRd5jRqfAEiv5eA6OXx7JDy5UdjT97r5HFgJ")`}}></div>
<div className="flex-1">
<p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Sarah Jenkins</p>
<p className="text-green-500 text-sm font-normal leading-normal">Verified Purchase</p>
</div>
</div>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
</div>
<p className="text-slate-900 dark:text-white font-bold text-lg">Aperture is the best!</p>
<p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">From the moment I placed my order to the unboxing, everything was perfect. The product is a work of art, and it's clear they care about their customers. Highly recommended!</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">3 weeks ago</p>
</div>
<div className="flex flex-col gap-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="avatar of David Lee" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsXm8eGgCxVUQVpomzWAPiyAVy0LIP1PzfcHMvi8F6YTi2ByRZ7T7MrQZ3Dt7Zd4j9jnqiJ0o7BUMq1xIQo0Ed29fR5V3u2pExZqhb8Ka_PQw7uolBjI_Vo2vLzSESa1mW4uXdGipaj4r4KcqUM5dtnu3_JYLYOejUsFljY2gxP0kx30qX8uzdQzBNy2JF5Lnf1ItePKudfGoJi4S1zt2ik4B1G91f3Sol_G6ZcztRhOCGBpC64j4gmCaUwodxk3ptEyu5vXE2lmFa")`}}></div>
<div className="flex-1">
<p className="text-slate-900 dark:text-white text-base font-medium leading-normal">David Lee</p>
<p className="text-green-500 text-sm font-normal leading-normal">Verified Purchase</p>
</div>
</div>
<div className="flex gap-0.5">
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
<span className="material-symbols-outlined text-blue" style={{fontSize: "20px"}}>star</span>
</div>
<p className="text-slate-900 dark:text-white font-bold text-lg">Incredible piece of tech.</p>
<p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">I was hesitant at first due to the price, but it's worth every penny. The build quality is solid and the performance is unmatched. Aperture has earned my trust.</p>
<p className="text-slate-500 dark:text-slate-400 text-sm">1 month ago</p>
</div>
</div>
<div className="flex px-4 py-10 justify-center">
<button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-blue text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue/90 transition-colors">
<span className="truncate">Continue Shopping</span>
</button>
</div>
</div>
</div>
</div>
</div>

</div>
  );
}

export default CustomerReview;