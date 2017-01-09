import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set("addNewAnnouncement", true);
    },
    saveAnnouncement() {
      var params = {
        priority: this.get('priority'),
        title: this.get('title'),
        text: this.get('text'),
        type: this.get('type')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
