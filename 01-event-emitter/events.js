// Event Emitter - simple version

class EventEmitter {
  eventListeners = {};

  addListener(event, fn) {
    this.eventListeners[event] = this.eventListeners[event] ?? [];
    this.eventListeners[event].push(fn);
    return this;
  }

  on(event, fn) {
    return this.addListener(event, fn);
  }

  removeListener(event, fn) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return this;
    }

    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
        break;
      }
    }
    return this;
  }

  off(event, fn) {
    return this.removeListener(event, fn);
  }

  once(event, fn) {
    this.eventListeners[event] = this.eventListeners[event] ?? [];

    const onceWrapper = () => {
      fn();
      this.off(event, onceWrapper);
    };

    this.eventListeners[event].push(onceWrapper);
    return this;
  }

  emit(event, ...args) {
    const listeners = this.eventListeners[event];
    if (!listeners) {
      return false;
    }

    listeners.forEach((listener) => {
      listener(...args);
    });
    return true;
  }

  listenerCount(event) {
    const listeners = this.eventListeners[event] ?? [];
    return listeners.length;
  }

  rawListeners(event) {
    return this.listeners[event];
  }
}

module.exports = EventEmitter;
