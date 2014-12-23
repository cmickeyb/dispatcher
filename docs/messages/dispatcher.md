# DISPATCHER MESSAGES #

## Informational Messages ##

Informational messages provide self-inspection for a particular
dispatcher instance.

* **InfoRequest** -- request information about the dispatcher instance
including connection information, a list of scenes, and a list of
messages supported by the dispatcher. 

* **MessageFormatRequest** -- request information about the structure of
a particular message; the response is an instance of the message with
its default values. 

## Endpoint Messages ##

EndPoint messages provide a means for creating a representation in the
dispatcher instance of an endpoint to which the dispatcher can send
asynchronous responses to the client. It is principally used for
callbacks associated with events.

* **CreateEndPointRequest** -- create an endpoint for communication via
UDP, host and port must be provided along with a lifespan. The
lifespan provides an estimate for how long the information will be
cached in the dispatcher before it is removed. The dispatcher can
define a maximum lifespan for endpoints.

* **RenewEndPointRequest** -- extend the lifespan of the endpoint. This
is really a "keep alive" message for the endpoint; its the client's way
of telling the dispatcher that it is still listening on the port. 

* **CloseEndPointRequest** -- this message lets the dispatcher know that
the endpoint is no longer necessary and any resources associated with it
can be reclaimed. Removing the endpoint also removes all callbacks
associated with it. 

## Authentication messages ##

[Specification](../specs/AuthMessages.js)

Authentication messages manage capabilities providing a means of
creating new capabilities, renewing the lifespan of existing
capabilities, and destroying capabilities.

* **CreateCapabilityRequest** -- Request the creation of a
capability. The message defines fields for identifying a user (UserID,
name, or email), the user's hashed password, and the lifespan of the
capability. 

* **RenewCapabilityRequest** -- This message requests that the lifespan
of an existing, valid capability be extended. 

* **DestroyCapabilityRequest** -- This message tells the Dispatcher to
destroy the capability. While not necessary (capabilities will expire
at the end of their lifespan), it is good practice to destroy a
capability when finished with it. 

