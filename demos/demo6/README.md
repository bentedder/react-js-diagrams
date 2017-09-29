## Demo 6
This demo shows an example of a custom "Icon" node type. In a graph diagram situation there may be a scenario where you want to represent a piece of data with an icon (ie, a phone number, a patient, a hospital).

### Features
* Allows user to change icon during navigation of the graph
* Allows developer to generate the correct icon classes based on data needs
* Has a fallback icon in case of no customization
* Uses fontawesome, so no extra work needs to be done to match classes to icons

### Changes
* In order to implement this feature, the keydown listener in the DiagramWidget needed to be altered. It was listening for every key event all the time. This has been fixed to stop acting on the keydown events when the user is in an input box (ie, changing the class for the icon)

### Production considerations / potential improvements
* If giving the user the ability to change the icon on the fly is something actually useful (this is debatable), then there needs to be more error handling and fallback, as well as more instruction to the user as to what types of classes they can type in. An alternate solution would be an autocomplete or dropdown.
* Removing the dependence on fontawesome and instead giving the developer the ability to integrate any other icon may be useful. If this were the task at hand, the better approach would be to create a few different node types (custom icon, image/jpg, fontawesome-specific, etc).
* The boilerplate in Demo6.js is unnecessarily large. This could be abstracted away as is done in demo4.
* Much of the styling is done in the React component. This needs to be broken out and put into scss where it makes sense.
* Not much styling has been done to the "change icon" form.