//nav-item active
$(function(){
  $(".mixit").on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');
  })
});