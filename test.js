// common.ts
var Foo = /* @__PURE__ */ (function (Foo2) {
    (Foo2[(Foo2.A = 1)] = "A"),
      (Foo2[(Foo2.B = 2)] = "B"),
      (Foo2[(Foo2.C = 3)] = "C"),
      (Foo2.D = "stringsWorkToo");
    return Foo2;
  })(Foo || (Foo = {})),
  usage = bar(1, 2, 3, "stringsWorkToo");

// entry.ts
export { usage, Foo };
