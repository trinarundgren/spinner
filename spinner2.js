const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const spinner2 = function() {
  let timer = 0;
  for (let i = 0; i <= spinner.length * 2; i++) {
    setTimeout(() => {
      process.stdout.write(spinner[i % 4]);
    }, timer);
    timer += 200;
  }
};

spinner2(spinner);