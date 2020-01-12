const windowGlobal = typeof window !== 'undefined' && window

const optimizedResize = (function () {
  const callbacks = []

  let running = false

  let cachedWidth = windowGlobal.innerWidth
  const delay = 66

  // run the actual callbacks
  const runCallbacks = () => {

    callbacks.forEach((callback) => {
      callback()
    })

    running = false
  }

  // fired on resize event
  const resize = () => {

    if (!running) {
      running = true

      if (windowGlobal.requestAnimationFrame) {
        windowGlobal.requestAnimationFrame(runCallbacks)
      } else {
        setTimeout(runCallbacks, delay)
      }
    }
  }

  const resizeHorizontal = () => {
    const newWidth = windowGlobal.innerWidth

    if (cachedWidth !== newWidth) {
      cachedWidth = newWidth

      if (!running) {
        running = true

        if (windowGlobal.requestAnimationFrame) {
          windowGlobal.requestAnimationFrame(runCallbacks)
        } else {
          setTimeout(runCallbacks, delay)
        }
      }
    }
  }

  // adds callback to loop
  const addCallback = (callback) => {

    if (callback) {
      callbacks.push(callback)
    }
  }

  return {
    // public method to add additional callback
    add(callback) {
      if (!callbacks.length) {
        windowGlobal.addEventListener('resize', resize)
      }
      addCallback(callback)
    },
    addHorizontal(callback) {
      if (!callbacks.length) {
        windowGlobal.addEventListener('resize', resizeHorizontal)
      }
      addCallback(callback)
    },
    clearAll() {
      windowGlobal.removeEventListener('resize', resize)
      windowGlobal.removeEventListener('resize', resizeHorizontal)
    }
  }
})()

export default optimizedResize
