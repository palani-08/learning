
  
    
      window.onload = function() {
       
            const check = word => {
              if (word.length > 8) {
                return '<span class="hightlight">' + word + '</span>'
              } else {
                return word
              }
            }
            const sample = document.querySelector("#sample")
            sample.innerHTML = sample
              .innerText
              .split(' ')
              .map(check)
              .join(' ')
      }