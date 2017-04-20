import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calculate-bedtimes', 'Integration | Component | calculate bedtimes', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{calculate-bedtimes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#calculate-bedtimes}}
      template block text
    {{/calculate-bedtimes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
