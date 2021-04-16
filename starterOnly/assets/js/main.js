// Take a function name and return a Promise that resolves
// with the coresponding function when it becomes available in global scope,
// but rejects after 1 second
function lookupFunction(functionName) {
  return new Promise((resolve, reject) => {
    const lookup = setInterval(() => {
      if (window[functionName] != null) {
        resolve(window[functionName]);
        clearInterval(lookup);
        clearTimeout(timeout);
      }
    });
    const timeout = setTimeout(() => {
      reject(new Error(`Registration timed out for function '${functionName}'`));
      clearInterval(lookup);
    }, 1000);
  });
}

// Execute the function when it becomes available in the global scope
function registerFunction(functionName) {
  lookupFunction(functionName)
    .then(fn => fn())
    .catch(console.error);
}

registerFunction("responsiveMenuToggler");
registerFunction("signupModal");
registerFunction("signupFormValidation");
