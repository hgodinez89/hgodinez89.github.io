// detects if user is using Internet Explorer
function IEdetection () {
  let ua = window.navigator.userAgent

  let msie = ua.indexOf('MSIE ')
  let trident = ua.indexOf('Trident/')

  if (msie > 0 || trident > 0) {
    alert('Sorry! This website does not work with any version of Internet Explorer browser.');
    return false;
  }
  
  return true;
}

export default IEdetection;