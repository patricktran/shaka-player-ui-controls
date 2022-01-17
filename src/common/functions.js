import shaka from "shaka-player/dist/shaka-player.ui.js";

/**
 * @param {!number} step - in seconds
 * @param {!string} stepName - used for constructing css className
 */
const CreateRewindButton = (step, stepName) =>
  class extends shaka.ui.Element {
    /**
     * @param {!HTMLElement} parent
     * @param {!shaka.ui.Controls} controls
     */
    constructor(parent, controls) {
      super(parent, controls);

      /** @private {!HTMLButtonElement} */
      this.button_ = document.createElement("button");
      this.button_.classList.add("material-icons-round");
      this.button_.classList.add(`shaka-rewind-${stepName}-button`);
      this.button_.textContent = `replay_${step}`;
      this.button_.ariaLabel = `Rewind ${step}`;
      this.parent.appendChild(this.button_);

      this.eventManager.listen(this.button_, "click", () => {
        this.rewind_();
      });
    }

    rewind_() {
      console.log(this.video.duration);
      if (!this.video.duration || this.video.duration < step) {
        return;
      }

      if (this.video.currentTime - step > 0) {
        this.video.currentTime -= step;
      } else {
        this.video.currentTime = 0;
      }
    }
  };

/**
 * @param {!number} step - in seconds
 * @param {!string} stepName - used for constructing css className
 */
const CreateForwardButton = (step, stepName) =>
  class extends shaka.ui.Element {
    /**
     * @param {!HTMLElement} parent
     * @param {!shaka.ui.Controls} controls
     */
    constructor(parent, controls) {
      super(parent, controls);

      /** @private {!HTMLButtonElement} */
      this.button_ = document.createElement("button");
      this.button_.classList.add("material-icons-round");
      this.button_.classList.add(`shaka-forward-${stepName}-button`);
      this.button_.textContent = `forward_${step}`;
      this.button_.ariaLabel = `Forward ${step}`;
      this.parent.appendChild(this.button_);

      this.eventManager.listen(this.button_, "click", () => {
        this.forward_();
      });
    }

    forward_() {
      if (!this.video.duration || this.video.duration < step) {
        return;
      }

      if (this.video.currentTime + step < this.video.duration) {
        this.video.currentTime += step;
      } else {
        // if forwarding exceeds video duration, move to last STEP (ie. 10) seconds
        this.video.currentTime = this.video.duration - step;
      }
    }
  };

export { CreateRewindButton, CreateForwardButton };
