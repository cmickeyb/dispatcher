# OPENSIM DISPATCHER #

The OpenSim Dispatcher defines a message-based, layered interface for
interacting with an OpenSim region through external client
applications. The messages provide an abstract API for an OpenSim scene
including assets and objects, avatars, and events. By specifying the
interaction in terms of messages (specifically JSON/BSON messages) the
API is both language and transport independent. That means that you can
write OpenSim applications in any language that can generate JSON/BSON
messages. Further, concurrent processing of the messages ensures that
high performance application requirements can be met such as those for
real time object dynamics. Finally, all invocations must present a valid
capability that can be generated solely

* [High Level Architecture](architecture.md)
* [Security](security.md)
* [Configuration](config.md)