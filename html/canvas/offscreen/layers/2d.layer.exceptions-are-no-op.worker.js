// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.exceptions-are-no-op
// Description:Checks that the context state is left unchanged if beginLayer throws.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Checks that the context state is left unchanged if beginLayer throws.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  // Get `beginLayer` to throw while parsing the filter.
  assert_throws_js(TypeError,
                   () => ctx.beginLayer({filter: {name: 'colorMatrix',
                                                  values: 'foo'}}));
  // `beginLayer` shouldn't have opened the layer, so `endLayer` should throw.
  assert_throws_dom("InvalidStateError", () => ctx.endLayer());
  t.done();
});
done();