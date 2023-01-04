for(const link of document.getElementsByClassName("nav__link")) {
    link.onmousemove = e => {
      const decimal = e.clientX / link.offsetWidth;
      
      const basePercent = 50,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;
      
      const lightBluePercent = basePercent + adjustablePercent;
      
      link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
    }
  }