import jump from 'jump.js'


export const dynamicHrefScrollJump = () => {
  const splitUrl = window.location.href.split('/')
  if (splitUrl.length > 4) {
    //href contains a url
    jump(`#id-${splitUrl[4]}`, {
      offset: -120,
      duration: 2000
    })
  }
}


