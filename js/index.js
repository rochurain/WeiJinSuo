$(function () {


    function responsive() {
        $(window).on('resize', function () {
            var windowWidth = $(window).width()
            var picBox = $('.item')

            if (windowWidth > 768) {
                picBox.each(function (index, ele) {
                    ele.innerHTML =
                        '<div  class="pcImg hidden-xs" style="background-image:url(./image/slide_0' + (index + 1) + '_2000x410.jpg)"></div>' +
                        '<div class="carousel-caption">' +
                        '</div>'
                })
            } else {
                picBox.each(function (index, ele) {
                    ele.innerHTML = '<img width=100%  class="hidden-sm hidden-md hidden-lg" src="./image/slide_0' + (index + 1) + '_640x340.jpg" alt="">' +
                        '<div class="carousel-caption">' +
                        '</div>'
                })
            }
            // 自动触发事件
        }).trigger('resize')
    }

    responsive()

      // 初始化工具提示
  $('[data-toggle="tooltip"]').tooltip();

  $('.btn-link').click(function () { 
      console.log(1);
      
      $('.modal-open').css('overflow',"hidden")
   })
})