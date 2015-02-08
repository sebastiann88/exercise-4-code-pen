// vars
var filter_link = $('#filter'),
    gallery_item = $('.tumb'),
    gallery_img = $('.tumb > img');


filter_link.on('change',function(){
  // find same class of menu
  var filterVal = $(this).val();
  
  console.log (filterVal);
  
  if(filterVal == 'all') {
    // Each all and filter values
    gallery_item.each(function() {
        var self = $(this);
        self.removeClass('hidden-me-full');
        var wait  = setTimeout(function(){
           self.removeClass('hidden-me');
          clearTimeout(wait);
       },500);
    });
  }else{
    // Each all and filter values
    gallery_item.each(function() {
       var self = $(this);
      // Hide 
      if(!self.hasClass(filterVal)) {
        self.addClass('hidden-me');
        var wait  = setTimeout(function(){
          console.log('and now');
           self.addClass('hidden-me-full');
          clearTimeout(wait);
        },500);
      }else{
        self.removeClass('hidden-me-full');
        var wait  = setTimeout(function(){
           self.removeClass('hidden-me');
          clearTimeout(wait);
       },500);
      }
    });
  }
  return false;
});



// simply preloader
gallery_img.each(function() {
  $(this).css({opacity: 0}).load(function() {
    $(this).animate({opacity: 1}, 1000);
  }).attr('src', $(this).data('src'))
  // wait and remove data-src
  .delay(100)
  .attr('data-src','');
});


// simply preloader
gallery_item.each(function() {
  
  $(this).on('click',function(e){
    e.preventDefault();
    $('.thumbnails-preview').addClass('show-thumbnail');
    $('body').css('overflow','hidden');
    $('.thumbnail-title').append(
      $(this).find('img').attr('alt')
    );
    $('.thumbnail-content').append(
      '<img src="'+$(this).find('img').attr('src')+'">'
      );
  })
  
  
  $('.thumbnail-close').on('click',function(e){
    e.preventDefault();
    $('body').css('overflow','');
    $('.thumbnails-preview').removeClass('show-thumbnail');
    $('.thumbnail-title').html('');
    $('.thumbnail-content').html('');
  });
});



 



