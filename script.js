/*nav bar*/
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }


/*carousel*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:true,
    dotsEach:true,
    autoWidth:true,
    autoHeight:true,
    center:true,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }    
    }
  })