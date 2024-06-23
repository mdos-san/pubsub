# @mdos-san/pubsub

Propagate change inside your NodeJS application with the Publish/Subscribe pattern.

### Usage

```js
import PubSub from "@mdos-san/pubsub";

// Create your PubSub
// You can rename "publish", "subscribe", "get" here
// Ex: const [publishUserState, subscribeUserState, getUserState] = PubSub(UserStateFactory())
const [publish, subscribe, get] = PubSub(42)

// The PubSub is already init with default value
console.log(get()) // get() return the current internal value, so this will print 42

// Register a subsriber to log new values
const unsubscribe = subscribe(newValue => console.log(newValue)) // This will immediatly call the callback, so this print 42 on console

// Publish a change
publish(21); // Since we have one subscription, this will print 21 on stdout

// Remove the subscription
unsubscribe()

// Publish a change
publish(8); // Will only update the internal value, since we have no subscription
```
