var argvLength = process.argv.length,
    total = 0;

for (var i = 2; i < argvLength; i++) {
  total += Number(process.argv[i]);
}

console.log(total);