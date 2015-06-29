var inputs = process.argv.slice(2);

var result = inputs.map( str => str.charAt(0) )
            .reduce( (a, b) => a + b );

console.log(`[${inputs}] becomes "${result}"`);
