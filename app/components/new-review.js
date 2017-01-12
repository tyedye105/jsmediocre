import Ember from 'ember';

export default Ember.Component.extend({
  newReview: false,
  actions: {
    reviewFormShow () {
      this.set('newReview', true);
    },
    saveReview() {
      var params = {
        rating: this.get('rating'),
        content: this.get('content'),
        author: this.get('author')
      };
      this.set('newReview', false);
      this.sendAction('saveReview', params);
    }
  }
});
