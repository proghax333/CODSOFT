
(function() {
  function match(matchers) {
    for(const [condition, fn] of matchers) {
      if(!condition) continue;

      const result = fn();
      if(result == undefined) {
        return true;
      }
    }

    return false;
  }

  function onWindowLoad(windowLoadEvent) {

    class CalculatorApplication {
      constructor(container) {
        this.container = container;

        this.init();
      }

      init() {
        this.buttons = Array.from(this.container.querySelectorAll("button"));
        this.input = this.container.querySelector(".input-display");

        for(const button of this.buttons) {
          const action = button.dataset.action;

          button.addEventListener("click", () => {
            this.onActionPerformed(action);
          });
        }
      }

      onActionPerformed(action) {

        match([
          [action === "cut", () => {
            let value = this.input.value;
            value = value.slice(0, value.length - 1);
            if(value.length === 0) {
              value = "0";
            }

            this.input.value = value;
          }],

          [action === "all-clear", () => {
            this.input.value = "0";
          }],

          [action === "plus-minus", () => {

          }],

          [action === "percent", () => {

          }],

          [action === "divide", () => {
            this.input.value = this.input.value + "/";
          }],

          [action === "multiply", () => {
            this.input.value = this.input.value + "x";
          }],

          [action === "subtract", () => {
            this.input.value = this.input.value + "-";
          }],

          [action === "add", () => {
            this.input.value = this.input.value + "+";
          }],

          [action === "equals", () => {
            const value = String(this.input.value)
              .replace("x", "*");

            const result = eval(value);
            this.input.value = result;
          }],

          [action === "decimal", () => {
            this.input.value = this.input.value + ".";
          }],

          [true, () => {
            if(this.input.value === "0") {
              this.input.value = "";
            }
            this.input.value = this.input.value + action;
            return true;
          }]
        ]);

      }
    }


    const calculatorContainer = document.querySelector(".calculator-container");
    const application = new CalculatorApplication(calculatorContainer);
  }


  window.addEventListener("load", onWindowLoad);

})();
