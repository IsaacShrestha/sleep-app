import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('play-alarm-sounds', 'Integration | Component | play alarm sounds', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{play-alarm-sounds}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#play-alarm-sounds}}
      template block text
    {{/play-alarm-sounds}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
