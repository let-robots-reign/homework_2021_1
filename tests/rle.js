'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle не меняет строку без подряд идущих букв', function (assert) {
		assert.strictEqual(rle('ABCDA'), 'ABCDA');
		assert.strictEqual(rle('12345'), '12345');
	});

	QUnit.test('передается пустая строка', function (assert) {
		assert.strictEqual(rle(''), '');
	});

	QUnit.test('передаются невалидные параметры', function (assert) {
		assert.strictEqual(rle(10), undefined);
		assert.strictEqual(rle([1, 2, 3]), undefined);
		assert.strictEqual(rle(undefined), undefined);
		assert.strictEqual(rle(NaN), undefined);
	})
});
