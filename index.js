function receivesAFunction(cb, spy) {
    return cb(spy)
}
receivesAFunction(function(cb){ return "Hi"}, spy)

function returnsANamedFunction() {
    function namedFunction() {
    return `Hello, I am a named function`
}
   return namedFunction
}
function returnsAnAnonymousFunction() {
     return function() {
        return `Hello, I am an anonymous Function`
    }
} returnsAnAnonymousFunction()