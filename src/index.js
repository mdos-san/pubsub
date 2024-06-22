function PubSub(defaultValue) {
  let value = defaultValue;
  let subscriberCounter = 0;
  let subscribers = {};

  const publish = (newValue) => {
    value = newValue;
    Object.values(subscribers).forEach((callback) => callback(newValue));
  };

  const subscribe = (callback) => {
    const newSubscriberIndex = subscriberCounter;
    subscribers[newSubscriberIndex] = callback;
    subscriberCounter += 1;
    callback(value);
    return () => delete subscribers[newSubscriberIndex];
  };

  const get = () => value;

  return [publish, subscribe, get];
}

export default PubSub;
