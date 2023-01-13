let nav=document.querySelector("nav")
// console.log(nav)
window.addEventListener("scroll", function(){
  nav.classList.toggle("sticky", window.scrollY > 0)
})




  let button = document.querySelector("button");
  button.addEventListener("mousedown", (event) => {
  
      console.log(event.button )

  })
let day='monday'
  if(day=='monday'){
    console.log('plan course structure'&&'go to coding')
  }else if(day == 'tuesday'){
    console.log('prepare theory videos')
  }else if(day == 'wensday' && 'thursday'){
    console.log('write code example')
  }else if()