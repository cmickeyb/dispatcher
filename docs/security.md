# DISPATCHER SECURITY #

## OVERVIEW ##

The OpenSim Dispatcher interface uses capabilities to ensure that only
authorized messages are acted on. A capability is a UUID that grants for
a limited time the right to send messages from a particular domain
(e.g. the Dispatcher or RemoteControl domains) to a scene.

A capability is created by sending a `"CreateCapabilityRequest"` message
to the dispatcher. That message contains one of three forms of user
identity (a UUID, a name, or an email address), a hashed password, a
list of requested domains, a scene, and a requested lifespan for the
capability. The dispatcher validates the user's identity with the hashed
password and then checks the user's account for the required
privileges. Currently the dispatcher can be configured to limit
capability creation to estate managers or to grid gods (where the access
level to be considered acceptable is configurable). Further, the
dispatcher can be configured to limit the lifespan of capabilities. This
enables the local simulator some control over the risk of replay
attacks.

If the user is authorized to send messages to the scene, the response to
the capability creation request is the UUID for the capability and the
lifespan over which the simulator will consider the capability valid. It
is the client's responsibility to renew the capability periodically with
the `"RenewCapabilityRequest"` message. Best practice suggests that the
client's should send a `"DestroyCapabilityRequest"` when they are
finished with the capability.

Every message sent to the dispatcher must contain a valid capability in
the `"_Capability"` field.  If the capability is no longer valid or does
not authorize the client to send a particular message, then the message
is immediately dropped and a "Not authorized" response is sent to the
client.

## CONFIGURATION ##

General information about security configuration directives can be found
in the [Configuration Directives](config.md) document.

### Open Access to All Users ###

This configuration is recommended only for debugging purposes on a
physically disconnected network. Capabilities are not validated for any
request so that anyone with a network connection to your simulator can
send any message.

    [Dispatcher]
    Enabled = true
    UseAuthentication = false

### Limit Access to Local Hosts ###

This configuration uses IP address filtering to drop any connections
that are initiated from hosts other than `127.0.0.1` and
`192.168.*.*`. Filtering by address happens prior to authentication and,
therefore, can be used to reduce the potential for denial of service
attacks and capability reuse.

    [Dispatcher]
    Enabled = true
    UseIPAddressFiltering = True
    AcceptableIPAddressPattern = "^(127.0.0.1)|(192\.168\.\d{1,3}\.\d{1,3})$"

### Access Limited to Estate Managers ###

Limit access to users specified in the OpenSim configuration as Estate
Managers or the owner of the estate. This is the recommended
configuration and is the default configuration when the dispatcher is
enabled. 

    [Dispatcher]
    Enabled = true
    UseAuthentication = true
    GrantEstateManagersAccess = true
    GrantGridManagersAccess = false

### Access Granted to Estate Managers and Grid Managers ###

Enable access for grid managers who have an account access level greater
than 200. Account access levels can be set when the account is created.

    [Dispatcher]
    Enabled = true
    UseAuthentication = true
    GrantGridManagersAccess = true
    GridManagerAccessLevel = 200

## TODO ##

* Implement message domain-specific access configuration
* Add risk levels and message specific access controls similar to OSSL
