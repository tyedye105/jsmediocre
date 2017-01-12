import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions: {
      delete(rental) {
        if (confirm('Are you sure youw ant to delete this rental????')){
          this.sendAction('destroyRental', rental);
        }
      },
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental){
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
