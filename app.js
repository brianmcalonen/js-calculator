let display = "";

let equation = "";

$(".num").click(function(){
  let buttonClicked = this.innerHTML;
  display += buttonClicked;
  equation += buttonClicked;
  $(".results").html(display);
})

$(".operator").click(function(){
  let operatorClicked = this.innerHTML;
  equation += operatorClicked;
  display = "";
})

$(".t").click(function(){
  $(".results").html(eval(equation));
})

$(".b").click(function(){
  $(".a").html("0");
  display = "";
  equation = "";
})

// $(".c").click(function(){
//   display = "-" + display;
//   equation = "-" + equation;
//   $(".results").html(display);
// })
