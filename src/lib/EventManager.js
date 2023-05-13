/* eslint-disable no-useless-return */
export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event, payload) {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event].forEach((listener) => {
      listener(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];
    if (!listeners) {
      return;
    }
    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );
    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

function addToast1(payload) {
  console.log('EventEmitter executou 1', payload);
}
function addToast2(payload) {
  console.log('EventEmitter executou 2', payload);
}
toastEventManager.on('addtoast', addToast1);
toastEventManager.on('addtoast', addToast2);

toastEventManager.emit('addtoast', { type: 'danger', text: 'testando' });
toastEventManager.removeListener('addtoast', addToast1);
toastEventManager.emit('addtoast', { type: 'danger', text: 'depois de remover' });

console.log('toastEventManager', toastEventManager);