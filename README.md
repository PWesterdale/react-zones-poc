## Zones POC

Zones are a customisable area inside an existing page that can be injected into by third party scripts.
The host application needs to know nothing about the third party interacting with the zone it provides.


The workflow is as follows:

- The host application initialises and prepares a zone for the third party to inject into
- The host sets up a listener for a ready event.
- The third party notifies the zone that it is ready.
- the third party then can specify content it wants to inject into the DOM, which it adds via events.

There are currently two types of add event.

`add(zoneId:string, key:string, component:component)`

This will add a react component to the dom.

`addInteractive(zoneId:string, key:string):Promise`

This adds an element into the DOM and returns the node in a promise - There is some handling for this that has to be done on the Host side.

