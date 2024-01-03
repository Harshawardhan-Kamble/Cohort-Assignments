function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}
// parseINt is a global function. Doesn't require like xxx.parseInt simply use parseInt(value)
// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");//42
explainParseInt("3.14");
explainParseInt("xxpx4");
//if at sytart is alphabets like aax456 the parseInt(aax456) is NAN

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
explainParseFloat("px42px");
