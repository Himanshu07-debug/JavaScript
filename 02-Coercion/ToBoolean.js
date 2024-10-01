console.log(!0);
// 0 -> false
// ToBoolean(0) -> false
// !0 -> True

console.log(!(-4));
// ToBoolean(-4) -> true
// !(-4) -> False

console.log(!{});
// ToBoolean of {} -> truthy
// !{} -> false

console.log(!console.log(0));
// Print 0 and return undefined
// undefined -> false
// Output -> true