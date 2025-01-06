# FTR Tech Test

Author: Ben Kenny

## Part 1

The tech test app is encapsulated within docker for easy running:

Install: `docker compose run app npm install`

Tests: `docker composer run app npm test`

Run the app: `docker composer run app npms start`

## Part 2

### Question 1

The application is currently structured in a very loose Domain Driven Design pattern. That is, the main logic of the application (storage of the frequencies and fibonnaci number detection) are encapsulated and handled by services. These services are agnostic to whatever is consuming them, and could be used without any changes to their interfaces.

However, the application has 2 main features that are specific to the UI layer, they are:
1. Handling the frequency display timer
1. Handling user input

These features would need to be re-implemented in whatever UI was chosen. For example, how you handle the user input would be dramatically different if the frontend was a webapp. Likewise, the decision about when and how to handle the timer is purely a UI concern, and would have to be modified depending on the new UI chosen.

However, if the application were to become multi-user (ie: a webapp or similar), then more changes would be required. For example, frequency storage should be refactored to handle number frequency on a per-user basis.

### Question 2

If we're going to distribute the CLI to users, then to make it "production ready", we would need to:

1. Improve testing around the CLI module.
1. Instrument the code so that user analytics, errors and telemetry could be surfaced to the engineering and product teams.
1. Implement Feature Flags for progressive rollout of new features.
1. Estabilish baseline performance metrics.
1. Perform a security review to answer questions such as: 
    * Does our current confidence level match our required confidence level?
    * Are all library code licences compatible with ours?
    * Do we have a escalation process for vulnerability discovery?
1. Setup a CI pipeline to run automated tests and build the artifacts
1. Determine a distribution method of artifacts to users

For a webapp, there are some additional steps that are required:
1. Infrastructure capacity planning
1. Upgrade and maintenance planning (i.e: How do we perform a big upgrade without impacting users?)

### Question 3

It's a clever test, as it's deceptively easy, until you get into some of the specifics. Initially it seems straight forward to handle fibonacci number sequences, until you realise that the 1000th fib number has 800+ digits. It's easy to get yourself into trouble if you're not thinking ahead. Also, there are a number of possible ways to determine whether a number is a fibonacci number, and it would be interesting to hear from candidates why they chose one method over another.


