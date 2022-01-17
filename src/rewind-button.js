const { CreateRewindButton } = require("./common/functions");

const RewindFiveButton = CreateRewindButton(5, "five");
RewindFiveButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new RewindFiveButton(rootElement, controls);
  }
};

const RewindTenButton = CreateRewindButton(10, "ten");
RewindTenButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new RewindTenButton(rootElement, controls);
  }
};

const RewindThirtyButton = CreateRewindButton(30, "thirty");
RewindThirtyButton.Factory = class {
  /** @override */
  create(rootElement, controls) {
    return new RewindThirtyButton(rootElement, controls);
  }
};

export { RewindFiveButton, RewindTenButton, RewindThirtyButton };
