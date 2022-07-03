const events = {} as any;

const on = (eventName: string, cb: (data: any) => void) => {
  if (eventName in events) {
    events[eventName].push(cb);
  } else {
    events[eventName] = [cb];
  }

  return {
    remove() {
      if (eventName in events) {
        const filteredEvents = events[eventName].filter(
          (el: (data: any) => void) => el !== cb
        );
        events[eventName] = filteredEvents;
        console.log(`Unsubscribed to ${eventName}`);
      }
    },
  };
};

const emit = (eventName: string, data: any) => {
  events[eventName].forEach((cb: (data: any) => void) => cb(data));
};

export { on, emit };
