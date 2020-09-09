import { createRef, useEffect, useState } from "react"
import throttle from "lodash.throttle"

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export const useVisibility = (offset: number, throttleMilliseconds: number) => {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = createRef<any>()

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      return
    }
    const top = currentElement.current.getBoundingClientRect().top
    if (top + offset >= 0 && top - offset <= window.innerHeight) {
      setIsVisible(true)
    }
    // setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
  }, throttleMilliseconds)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  return {
    isVisible,
    currentElement,
  }
}
