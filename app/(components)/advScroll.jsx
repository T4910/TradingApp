'use client'
import {useRef, useEffect} from 'react'
import Whys from '../(components)/circleDisplay'

export default function advScroll() {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 1
        let time = 20

        const startAutoScroll = () => {
            let startX, startY, scrollDir
            
            const handleScroll = () => {
                // Reach endpoint while scrolling to right
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    // Clone, delete and add cloned first item to the end
                    const content = container.firstElementChild.cloneNode(true);
                    container.removeChild(container.firstElementChild)
                    container.appendChild(content);
                    
                    // Reset the scroll position to maintain the illusion of infinite scrolling 
                    container.scrollLeft = container.scrollLeft - container.firstElementChild.clientWidth;
                }
    
                // React endpoint while scrolling to left
                if (container.scrollLeft  <= 0) {
                    // Clone, delete and add cloned last item to the start
                    const lastChild = container.lastElementChild.cloneNode(true);
                    container.removeChild(container.lastElementChild);
                    container.insertBefore(lastChild, container.firstElementChild);
                
                    // Reset the scroll position to maintain the illusion of infinite scrolling
                    container.scrollLeft = lastChild.clientWidth;
    
                }
            }; 
    
            const recordTouchLocation = (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
    
                scrollAmount = 0 // stop auto scroll
            }
    
            const checkHorziontalDir = (e) => {
                // to check if user did a horizontal scroll
                const deltaX = e.touches[0].clientX - startX;
                const deltaY = e.touches[0].clientY - startY;
    
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    (deltaX > 0) ? scrollDir = -1 : scrollDir = 1;
                }
            }
    
            const resumeScrollVelocity = () => {scrollAmount = scrollDir}
    
            container.addEventListener('scroll', handleScroll);            
            container.addEventListener('touchstart', recordTouchLocation);             
            container.addEventListener('touchmove', checkHorziontalDir);
            container.addEventListener('touchend', resumeScrollVelocity);

            setInterval(() => container.scrollLeft += scrollAmount, time); // Adjust speed
        };
        
        // Start the auto-scrolling when the component mounts
        startAutoScroll();
  
        // Clean up the interval event listener when the component unmounts    
        return () => {
            container.removeEventListener('scroll', handleScroll);
            container.removeEventListener('touchstart', recordTouchLocation);             
            container.removeEventListener('touchmove', checkHorziontalDir);
            container.removeEventListener('touchend', resumeScrollVelocity);
            clearInterval(startAutoScroll);
        };
    }, [])

    return (
            <div className='flex overflow-x-auto' ref={containerRef}>
                <Whys colour='bg-pink-200' src='/images/real-time-dataedited-removebg-preview.png'>Real-time Data</Whys>
                <Whys colour='bg-green-200' src='/images/gain-exp-org.png'>Gain Experience</Whys>
                <Whys colour='bg-blue-200' src='/images/ruler-icon-18.png'>Advanced tooling</Whys>
                <Whys colour='bg-orange-200' src='/images/learn-removebg-preview.png'>Wholesome learning</Whys>
            </div>
    )
}
