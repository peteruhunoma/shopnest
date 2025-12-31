import React from 'react'

function AddReview() {
  return (
<div class="bg-background-light font-display min-h-screen flex flex-col text-text-main"> 
<main class="flex-1 flex justify-center py-10 px-4 md:px-8">
<div class="layout-content-container flex flex-col max-w-[1024px] w-full gap-8">
<div class="flex flex-col gap-2">
<h1 class="text-text-main tracking-tight text-[32px] font-bold leading-tight">Write a Review</h1>
<p class="text-text-secondary text-sm font-normal">Share your experience to help others make better choices.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div class="lg:col-span-4 flex flex-col gap-6 sticky top-24">
<div class="bg-surface-light rounded-xl p-4 shadow-sm border border-border-light">
<div class="w-full aspect-[4/3] bg-center bg-cover rounded-lg mb-4 relative overflow-hidden group" data-alt="Red Nike running shoe on a generic background" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDeYBuyrubw4Vus3k1jxGGzAYZcb6nk9AEmUtu_ZVOnvGmsDQ2racNtf7WuYxAAcmtUlOktYYYpEY2iRDsYCXX86sPCcvbW4FzlByTn2CUAo8PxfOcUzAB9gksV78C3vZ7nMfAPW1Rrq6h64CU65KEiy6LguV2VvX5xBpZLL1pHEsrJyY-DaXebX8SD8dyRaUrEbyg99Vyfr6ye8kA-5FZbk0SE8S4Y1eLCjPsvOJmSFes794jw76euuRgu2-R4-cSRKHMxdOAWYM");'>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div class="flex flex-col gap-1">
<h3 class="text-text-main text-lg font-bold leading-tight">Nike Air Zoom Pegasus 39</h3>
<p class="text-text-secondary text-sm">Men's Road Running Shoes</p>
<p class="text-text-main font-medium mt-2">$129.99</p>
<div class="text-xs text-text-secondary mt-1 flex gap-3">
<span>Size: <span class="text-text-main">10</span></span>
<span>Color: <span class="text-text-main">Red/White</span></span>
</div>
</div>
</div>
<div class="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
<div class="p-2 bg-blue-100 rounded-full text-primary shrink-0">
<span class="material-symbols-outlined">loyalty</span>
</div>
<div>
<p class="text-blue-900 text-sm font-bold">Earn 50 Points</p>
<p class="text-blue-700 text-xs mt-1">Get rewarded for helping others! Points are added to your account upon approval.</p>
</div>
</div>
</div>
<div class="lg:col-span-8 bg-surface-light rounded-xl p-6 md:p-8 shadow-sm border border-border-light">
<form class="flex flex-col gap-8" onsubmit="event.preventDefault();">
<div class="flex flex-col gap-3">
<label class="text-text-main text-sm font-bold">Overall Rating <span class="text-red-500">*</span></label>
<div class="flex flex-row-reverse justify-end gap-1 star-rating w-fit">
<input class="peer/5 opacity-0 absolute w-0 h-0" id="star5" name="rating" type="radio" value="5"/>
<label class="cursor-pointer text-slate-300 peer-checked/5:text-yellow-400 peer-hover/5:text-yellow-400 hover:text-yellow-400 transition-colors" for="star5">
<span class="material-symbols-outlined text-[40px] filled-star" style="font-variation-settings: 'FILL' 1;">star</span>
</label>
<input class="peer/4 opacity-0 absolute w-0 h-0" id="star4" name="rating" type="radio" value="4"/>
<label class="cursor-pointer text-slate-300 peer-checked/4:text-yellow-400 peer-checked/5:text-yellow-400 peer-hover/4:text-yellow-400 hover:text-yellow-400 transition-colors" for="star4">
<span class="material-symbols-outlined text-[40px] filled-star" style="font-variation-settings: 'FILL' 1;">star</span>
</label>
<input class="peer/3 opacity-0 absolute w-0 h-0" id="star3" name="rating" type="radio" value="3"/>
<label class="cursor-pointer text-slate-300 peer-checked/3:text-yellow-400 peer-checked/4:text-yellow-400 peer-checked/5:text-yellow-400 peer-hover/3:text-yellow-400 hover:text-yellow-400 transition-colors" for="star3">
<span class="material-symbols-outlined text-[40px] filled-star" style="font-variation-settings: 'FILL' 1;">star</span>
</label>
<input class="peer/2 opacity-0 absolute w-0 h-0" id="star2" name="rating" type="radio" value="2"/>
<label class="cursor-pointer text-slate-300 peer-checked/2:text-yellow-400 peer-checked/3:text-yellow-400 peer-checked/4:text-yellow-400 peer-checked/5:text-yellow-400 peer-hover/2:text-yellow-400 hover:text-yellow-400 transition-colors" for="star2">
<span class="material-symbols-outlined text-[40px] filled-star" style="font-variation-settings: 'FILL' 1;">star</span>
</label>
<input class="peer/1 opacity-0 absolute w-0 h-0" id="star1" name="rating" type="radio" value="1"/>
<label class="cursor-pointer text-slate-300 peer-checked/1:text-yellow-400 peer-checked/2:text-yellow-400 peer-checked/3:text-yellow-400 peer-checked/4:text-yellow-400 peer-checked/5:text-yellow-400 peer-hover/1:text-yellow-400 hover:text-yellow-400 transition-colors" for="star1">
<span class="material-symbols-outlined text-[40px] filled-star" style="font-variation-settings: 'FILL' 1;">star</span>
</label>
</div>
</div>
<div class="flex flex-col gap-6">
<div class="flex flex-col gap-2">
<label class="text-text-main text-sm font-bold" for="headline">Review Title</label>
<input class="w-full bg-white text-text-main border border-border-light focus:border-primary focus:ring-0 rounded-lg h-12 px-4 placeholder:text-slate-400" id="headline" placeholder="Summarize your thoughts (e.g. Best running shoes ever!)" type="text"/>
</div>
<div class="flex flex-col gap-2">
<label class="text-text-main text-sm font-bold" for="review">Your Review</label>
<textarea class="w-full bg-white text-text-main border border-border-light focus:border-primary focus:ring-0 rounded-lg p-4 placeholder:text-slate-400 resize-y" id="review" placeholder="What did you like or dislike? How was the comfort and durability?" rows="5"></textarea>
<p class="text-xs text-text-secondary text-right">Minimum 20 characters</p>
</div>
</div>
<hr class="border-border-light"/>
<div class="flex flex-col-reverse sm:flex-row justify-end gap-4 items-center">
<a class="text-text-secondary text-sm font-medium hover:text-text-main transition-colors" href="#">Cancel</a>
<button class="w-full sm:w-auto h-12 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg px-8 transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
<span>Submit Review</span>
</button>
</div>
</form>
</div>
</div>
</div>
</main>
<footer class="border-t border-border-light bg-white py-8 mt-auto">
<div class="flex justify-center text-text-secondary text-sm">
            © 2023 SoleMates. All rights reserved.
        </div>
</footer>

</div>
  )
}

export default AddReview;