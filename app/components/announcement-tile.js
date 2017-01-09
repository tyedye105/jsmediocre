import Ember from 'ember';

export default Ember.Component.extend({
  isTextvisible: false,
  actions: {
    showText: function() {
      this.set('isTextvisible', true);
    },
    hideText: function() {
      this.set('isTextvisible', false);
    },
    delete(announcement) {
      if (confirm('Did you even read the announcement?')){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
