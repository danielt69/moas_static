(function() {
  Spree.disableSaveOnClick = function() {
    return ($('form.edit_order')).submit(function() {
      return ($(this)).find(':submit, :image').attr('disabled', true).removeClass('primary').addClass('disabled');
    });
  };

  Spree.ready(function($) {
    return Spree.Checkout = {};
  });

}).call(this);
