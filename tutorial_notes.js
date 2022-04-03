//"test": "jest --forceExit" (in package.json),
// dropping --forceExit reports coverage but the process never exits
// Force Jest to exit after all tests have completed running. This is useful when resources set up by test code cannot be adequately cleaned up. Note: This feature is an escape-hatch. If Jest doesn't exit at the end of a test run, it means external resources are still being held on to or timers are still pending in your code. It is advised to tear down external resources after each test to make sure Jest can shut down cleanly. You can use --detectOpenHandles to help track it down.

//"type": "module",
// Adding "type": "module" to the package.json enables ES6 modules (your source code should use import syntax). When you do not have, you should use require syntax.
