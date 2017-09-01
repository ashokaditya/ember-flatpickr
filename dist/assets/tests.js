'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('dummy/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/ember-flatpickr-test', ['ember-native-dom-helpers', 'ember-qunit'], function (_emberNativeDomHelpers, _emberQunit) {
  'use strict';

  var run = Ember.run;


  (0, _emberQunit.moduleForComponent)('ember-flatpickr', 'Integration | Component | ember flatpickr', {
    integration: true
  });

  function clickDay(index) {
    (0, _emberNativeDomHelpers.triggerEvent)((0, _emberNativeDomHelpers.findAll)('.flatpickr-days .flatpickr-day')[index], 'mousedown');
  }

  function closeFlatpickr() {
    (0, _emberNativeDomHelpers.triggerEvent)(document, 'mousedown');
  }

  (0, _emberQunit.test)('disabled is updated when altInput=true', function (assert) {
    var _this = this;

    assert.expect(4);

    var originalDate = '2080-12-05T20:00:00.000Z';
    this.set('dateValue', [new Date(originalDate)]);
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "9v9ztCGj",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"altInput\",\"date\",\"disabled\",\"onChange\",\"placeholder\"],[true,[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[19,0,[\"disabled\"]],null,\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="hidden"]').disabled, false, 'hidden input not disabled');
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="text"]').disabled, true, 'text input is disabled');

      _this.set('disabled', false);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="hidden"]').disabled, false, 'hidden input not disabled');
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="text"]').disabled, false, 'text input not disabled');
    });
  });

  (0, _emberQunit.test)('disabled is updated when altInput=false', function (assert) {
    var _this2 = this;

    assert.expect(3);

    var originalDate = '2080-12-05T20:00:00.000Z';
    this.set('dateValue', [new Date(originalDate)]);
    this.set('disabled', true);

    this.render(Ember.HTMLBars.template({
      "id": "J0tjbv2P",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"altInput\",\"date\",\"disabled\",\"onChange\",\"placeholder\"],[false,[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[19,0,[\"disabled\"]],null,\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.notOk((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="hidden"]'), 'hidden input does not exist');
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="text"]').disabled, true, 'text input is disabled');

      _this2.set('disabled', false);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-input[type="text"]').disabled, false, 'text input not disabled');
    });
  });

  (0, _emberQunit.test)('value updates when set externally via flatpickrRef', function (assert) {
    assert.expect(2);

    this.on('onChange', function () {});

    this.set('dateValue', '2080-12-01T16:16:22.585Z');
    this.set('maxDate', '2080-12-31T16:16:22.585Z');
    this.set('minDate', '2080-12-01T16:16:22.585Z');

    this.render(Ember.HTMLBars.template({
      "id": "zE4YhQ8r",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"flatpickrRef\",\"maxDate\",\"minDate\",\"onChange\",\"placeholder\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[19,0,[\"flatpickrRef\"]],[19,0,[\"maxDate\"]],[19,0,[\"minDate\"]],\"onChange\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, '1', 'initial selected date text');

    this.get('flatpickrRef').setDate('2080-12-04T16:16:22.585Z');

    assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, '4', 'selected changes with dateValue');
  });

  (0, _emberQunit.test)('onChange action fired', function (assert) {
    assert.expect(1);

    this.set('dateValue', null);

    var done = assert.async();

    this.on('onChange', function (selectedDates) {
      setTimeout(function () {
        assert.equal(selectedDates[0].toISOString().substring(0, 10), '2080-12-06', 'onChange action was executed');
        done();
      }, 100);
    });

    this.set('maxDate', '2080-12-31T16:16:22.585Z');
    this.set('minDate', '2080-12-01T16:16:22.585Z');

    this.render(Ember.HTMLBars.template({
      "id": "yfREeOmY",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"appendDataInput\",\"date\",\"enableTime\",\"maxDate\",\"minDate\",\"onChange\",\"placeholder\"],[true,[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],true,[19,0,[\"maxDate\"]],[19,0,[\"minDate\"]],\"onChange\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      clickDay(5);
    });
  });

  (0, _emberQunit.test)('onClose action fired', function (assert) {
    assert.expect(1);

    this.set('dateValue', null);

    this.on('onClose', function () {
      assert.ok(true, 'onClose action was executed');
    });

    this.set('maxDate', '2080-12-31T16:16:22.585Z');
    this.set('minDate', '2080-12-01T16:16:22.585Z');

    this.render(Ember.HTMLBars.template({
      "id": "mEE1qE5B",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"appendDataInput\",\"date\",\"enableTime\",\"maxDate\",\"minDate\",\"onChange\",\"onClose\",\"placeholder\"],[true,[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],true,[19,0,[\"maxDate\"]],[19,0,[\"minDate\"]],null,\"onClose\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      closeFlatpickr();
    });
  });

  (0, _emberQunit.test)('maxDateUpdated and minDateUpdated fired', function (assert) {
    var _this3 = this;

    assert.expect(3);

    this.set('dateValue', null);

    this.render(Ember.HTMLBars.template({
      "id": "mEE1qE5B",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"appendDataInput\",\"date\",\"enableTime\",\"maxDate\",\"minDate\",\"onChange\",\"onClose\",\"placeholder\"],[true,[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],true,[19,0,[\"maxDate\"]],[19,0,[\"minDate\"]],null,\"onClose\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    this.set('maxDate', '2080-12-25T16:16:22.585Z');
    this.set('minDate', '2080-12-24T16:16:22.585Z');

    run(function () {
      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      run.scheduleOnce('afterRender', _this3, function () {
        var enabledDays = (0, _emberNativeDomHelpers.findAll)('.flatpickr-days .flatpickr-day:not(.disabled)');
        assert.equal(enabledDays.length, 2);
        assert.equal(enabledDays[0].textContent, '24');
        assert.equal(enabledDays[1].textContent, '25');
      });
    });
  });

  (0, _emberQunit.test)('locale works correctly', function (assert) {
    assert.expect(1);

    this.on('onChange', function () {});

    this.set('dateValue', '2080-12-01T16:16:22.585Z');
    this.set('maxDate', '2080-12-31T16:16:22.585Z');
    this.set('minDate', '2080-12-01T16:16:22.585Z');

    this.render(Ember.HTMLBars.template({
      "id": "tEgfGkAx",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"locale\",\"maxDate\",\"minDate\",\"onChange\",\"placeholder\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],\"fr\",[19,0,[\"maxDate\"]],[19,0,[\"minDate\"]],\"onChange\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-current-month .cur-month').textContent.trim(), 'Décembre', 'French locale applied successfully');
  });

  (0, _emberQunit.test)('onChange triggers value change only once', function (assert) {
    var _this4 = this;

    assert.expect(3);

    var originalPosition = '1';
    var originalDate = '2080-12-01T20:00:00.000Z';
    var newPosition = '5';

    this.on('onChange', function (selectedDates) {
      assert.ok(selectedDates[0].toISOString(), 'onChange action was executed');

      _this4.set('dateValue', selectedDates[0]);
    });

    this.set('dateValue', originalDate);

    this.render(Ember.HTMLBars.template({
      "id": "e5Kd30Hi",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],\"onChange\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, originalPosition, 'initial selected date text');

      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      clickDay(newPosition - 1);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, newPosition, 'selected changes with dateValue');
    });
  });

  (0, _emberQunit.test)('onChange gets called with the correct parameters', function (assert) {
    var originalPosition = '1';
    var originalDate = '2080-12-01T20:00:00.000Z';
    var newPosition = '5';
    var dateFormat = 'Y-m-d';
    var newFormattedDate = '2080-12-05';

    this.on('onChange', function (selectedDates, dateStr, instance) {
      assert.ok(selectedDates instanceof Array, 'selectedDates is an array');
      assert.equal(selectedDates.length, 1, 'selectedDates contains a single entry');

      assert.ok(selectedDates[0] instanceof Date, 'selectedDates contains DateObjects');

      assert.equal(selectedDates[0].toDateString(), 'Thu Dec 05 2080', 'selectedDates contains the correct Date');

      assert.equal(dateStr, newFormattedDate, 'dateStr is formatted correctly');

      assert.ok(instance instanceof FlatpickrInstance, 'instance is a FlatpickrInstance object');
    });

    this.set('dateValue', originalDate);
    this.set('dateFormat', dateFormat);

    this.render(Ember.HTMLBars.template({
      "id": "tDZBjo+j",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"dateFormat\",\"date\",\"onChange\",\"placeholder\"],[[19,0,[\"dateFormat\"]],[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],\"onChange\",\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, originalPosition, 'initial selected date text');

      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      clickDay(newPosition - 1);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, newPosition, 'selected changes with dateValue');

      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      clickDay(newPosition - 1);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, newPosition, 'selected changes with dateValue');
    });
  });

  (0, _emberQunit.test)('onChange action mut helper returns date Array', function (assert) {
    var _this5 = this;

    assert.expect(5);

    var originalPosition = '1';
    var originalDate = '2080-12-01T20:00:00.000Z';
    var newPosition = '5';

    this.set('dateValue', originalDate);

    this.render(Ember.HTMLBars.template({
      "id": "H29M1nvR",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"dateValue\"]]],null]],null],\"Pick date\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, originalPosition, 'initial selected date text');

      (0, _emberNativeDomHelpers.find)('.flatpickr-input').dispatchEvent(new Event('focus'));
      clickDay(newPosition - 1);

      assert.equal((0, _emberNativeDomHelpers.find)('.flatpickr-days .flatpickr-day.selected').textContent, newPosition, 'selected changes with dateValue');

      assert.ok(_this5.get('dateValue') instanceof Array, 'dateValue is instanceof Array');
      assert.ok(_this5.get('dateValue').length, 1, 'dateValue has 1 item');
      assert.ok(_this5.get('dateValue')[0] instanceof Date, 'dateValue is an array of DateObjects');
    });
  });

  (0, _emberQunit.test)('value accepts string', function (assert) {
    var _this6 = this;

    assert.expect(2);

    var originalDate = '2080-12-05T20:00:00.000Z';

    this.set('dateValue', originalDate);

    this.render(Ember.HTMLBars.template({
      "id": "KWdKCPBc",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\",\"flatpickrRef\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"dateValue\"]]],null]],null],\"Pick date\",[19,0,[\"flatpickrRef\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal(_this6.get('flatpickrRef').selectedDates.length, 1, '1 date is selected');
      assert.equal(_this6.get('flatpickrRef').selectedDates[0].valueOf(), new Date(originalDate).valueOf(), 'selected date is correct');
    });
  });

  (0, _emberQunit.test)('value accepts date object', function (assert) {
    var _this7 = this;

    assert.expect(2);

    var originalDate = '2080-12-05T20:00:00.000Z';

    this.set('dateValue', new Date(originalDate));

    this.render(Ember.HTMLBars.template({
      "id": "KWdKCPBc",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\",\"flatpickrRef\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"dateValue\"]]],null]],null],\"Pick date\",[19,0,[\"flatpickrRef\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal(_this7.get('flatpickrRef').selectedDates.length, 1, '1 date is selected');
      assert.equal(_this7.get('flatpickrRef').selectedDates[0].valueOf(), new Date(originalDate).valueOf(), 'selected date is correct');
    });
  });

  (0, _emberQunit.test)('value accepts array of string', function (assert) {
    var _this8 = this;

    assert.expect(2);

    var originalDate = '2080-12-05T20:00:00.000Z';

    this.set('dateValue', [originalDate]);

    this.render(Ember.HTMLBars.template({
      "id": "KWdKCPBc",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\",\"flatpickrRef\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"dateValue\"]]],null]],null],\"Pick date\",[19,0,[\"flatpickrRef\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal(_this8.get('flatpickrRef').selectedDates.length, 1, '1 date is selected');
      assert.equal(_this8.get('flatpickrRef').selectedDates[0].valueOf(), new Date(originalDate).valueOf(), 'selected date is correct');
    });
  });

  (0, _emberQunit.test)('value accepts array of date objects', function (assert) {
    var _this9 = this;

    assert.expect(2);

    var originalDate = '2080-12-05T20:00:00.000Z';
    this.set('dateValue', [new Date(originalDate)]);

    this.render(Ember.HTMLBars.template({
      "id": "KWdKCPBc",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"ember-flatpickr\",null,[[\"date\",\"onChange\",\"placeholder\",\"flatpickrRef\"],[[25,\"readonly\",[[19,0,[\"dateValue\"]]],null],[25,\"action\",[[19,0,[]],[25,\"mut\",[[19,0,[\"dateValue\"]]],null]],null],\"Pick date\",[19,0,[\"flatpickrRef\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    run(function () {
      assert.equal(_this9.get('flatpickrRef').selectedDates.length, 1, '1 date is selected');
      assert.equal(_this9.get('flatpickrRef').selectedDates[0].valueOf(), new Date(originalDate).valueOf(), 'selected date is correct');
    });
  });
});
define('dummy/tests/test-helper', ['dummy/config/environment', 'dummy/tests/helpers/resolver', 'ember-qunit', 'ember-native-dom-helpers', 'ember-cli-qunit'], function (_environment, _resolver, _emberQunit, _emberNativeDomHelpers, _emberCliQunit) {
  'use strict';

  var rootElement = _environment.default.APP.rootElement;

  _emberNativeDomHelpers.settings.rootElement = rootElement || _emberNativeDomHelpers.settings.rootElement;

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/ember-flatpickr-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/ember-flatpickr-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
