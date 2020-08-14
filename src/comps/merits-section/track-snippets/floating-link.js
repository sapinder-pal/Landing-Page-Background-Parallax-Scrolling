
const listenScroll = (callback)=> {
	let isScrolling = false;
	window.addEventListener("scroll",event=> {

		//throttle "scroll-listening rate" down to requestAnimationFrame()
		if(!isScrolling){
			requestAnimationFrame(()=> {
				callback();
				isScrolling = false;
			});
		}
		isScrolling = true;
	})
};

// check if element is visible
const isPartiallyVisible = (ele)=> {

	let eleBoundary = ele.getBoundingClientRect();

	let top = eleBoundary.top;
    let bottom = eleBoundary.bottom;
	let height = eleBoundary.height;

	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

// find the nearest link to visit on 'click'
const getNearestElement = (element1,element2,currentPos)=> {

	let element1Boundary = element1.getBoundingClientRect();
	let element2Boundary = element2.getBoundingClientRect();

	let nearestElement = (window.scrollY-element1Boundary.bottom) < (element2Boundary.top-window.scrollY) 
							? `#${element1.id}` : `#${element2.id}`;

	return nearestElement;
}


export {listenScroll,isPartiallyVisible,getNearestElement};
