I've narrowed down the issue to using `"jsEngine": "jsc"` which was the default for older expo projects.
Also, I've been able to "solve" the issue in this repo by switching to hermes, or by using "@babel/plugin-proposal-logical-assignment-operators" in `babel.config.js`.

At the time of writing this, I was not able to solve this issue in my production app, which uses `jsc` and simply switching to hermes is not an option.