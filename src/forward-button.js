const { CreateForwardButton } = require("./shared");

const ForwardFiveButton = CreateForwardButton(5, "five");
ForwardFiveButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new ForwardFiveButton(rootElement, controls);
  }
};

const ForwardTenButton = CreateForwardButton(10, "ten");
ForwardTenButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new ForwardTenButton(rootElement, controls);
  }
};

const ForwardThirtyButton = CreateForwardButton(30, "thirty");
ForwardThirtyButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new ForwardThirtyButton(rootElement, controls);
  }
};

export { ForwardFiveButton, ForwardTenButton, ForwardThirtyButton };
