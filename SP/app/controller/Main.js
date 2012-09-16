Ext.define('SP.controller.Main', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainPanel: '#mainPanel',
      drawButton: '#drawButton',
      carousel: '#carousel'
    },
    control: {
      drawButton: {
        tap: 'toggleDrawMode'
      }
    }
  },
  //called when the Application is launched, remove if not needed
  launch: function(app) {
  },
  toggleDrawMode: function(button, e, opts) {
    var mp = this.getMainPanel();
    var button = this.getDrawButton();
    var carousel = this.getCarousel();

    console.debug('toggleDrawMode', mp.getDrawable());

    if (mp.getDrawable()) {
      mp.setDrawable(false);
      button.setUi('normal');
      carousel.setLock(false);
    } else {
      mp.setDrawable(true);
      button.setUi('confirm');
      carousel.setLock(true);
    }
  }
  
});