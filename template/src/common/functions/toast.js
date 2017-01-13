class Toast {
  queue = [];

  toast(location) { // eslint-disable-line
    const toast = document.createElement('div'); // eslint-disable-line

    toast.classList.add('toast');
    toast.classList.add(`toast--${location}`);

    document.body.appendChild(toast); // eslint-disable-line

    return toast;
  }

  checkQueue(cb = null) {
    return () => {
      if (cb) {
        cb();
      }
      const next = this.queue.shift();
      if (next && next.length) {
        this.launchToast(...next);
      }
    };
  }

  addOnQueue(message = '', location, duration = 3000, cb = null, cbmessage = '', cbbutton = null) {
    const params = [message, location, duration, this.checkQueue(cb), cbmessage, cbbutton];
    this.queue.push(params);
    if (this.queue.length === 1) {
      setTimeout(() => { this.launchToast(...this.queue.shift()); }, 5E2);
    }
  }

  launchToast(message, location = 'right', duration = 3000, cb = null, cbmessage = '', cbbutton = null) {
    let toast = document.querySelector(`.toast--${location}`); // eslint-disable-line

    if (!toast) {
      toast = this.toast(location);
    }

    const content = document.createElement('div'); // eslint-disable-line
    content.classList.add('toast__content');

    if (location === 'snack') {
      const snackMessage = document.createElement('span'); // eslint-disable-line
      snackMessage.classList.add('toast__message');
      snackMessage.innerHTML = message;
      content.appendChild(snackMessage);

      if (cbmessage && cbbutton) {
        const snackButton = document.createElement('button'); // eslint-disable-line
        snackButton.classList.add('md-button');
        snackButton.classList.add('md-accent');
        snackButton.classList.add('md-theme-default');
        snackButton.innerHTML = cbmessage;
        snackButton.addEventListener('click', cbbutton);
        content.appendChild(snackButton);
      }
    } else {
      content.innerHTML = message;
    }

    toast.appendChild(content);
    setTimeout(() => content.classList.add('toast__content--active'), 10);

    setTimeout(() => {
      content.classList.remove('toast__content--active');
      content.classList.add('toast__content--remove');

      setTimeout(() => {
        content.remove();

        if (cb) {
          cb();
        }
      }, 3E2);
    }, duration);
  }

  create(message, location = 'right', duration = 3000, cb = null, cbmessage = '', cbbutton = null) {
    if (location === 'snack') {
      this.addOnQueue(message, location, duration, cb, cbmessage, cbbutton);
      return;
    }
    this.launchToast(message, location, duration, cb, cbmessage, cbbutton);
  }
}

export default new Toast();

function plugin(Vue) {
  Vue.prototype.$toast = new Toast();
}

if (typeof window !== 'undefined' && window.Vue) { // eslint-disable-line no-undef
  window.Vue.use(plugin); // eslint-disable-line no-undef
}

module.exports = plugin;
