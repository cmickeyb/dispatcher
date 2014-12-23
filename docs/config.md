# CONFIGURATION DIRECTIVES #

A sample configuration file, [Dispatcher.ini.example](../modules/dispatcher/Dispatcher.ini.example)
can be found in the dispatcher module directory: . When building the
module, this file is copied into the OpenSim `bin/config` directory. To
configure the dispatcher module, change the name of the file to
`Dispatcher.ini` and edit the various directives in the file.

All dispatcher configuration directives can be found in the
`[Dispatcher]` section of the configuration file. 

## Basic Directives ##

* **Enabled** -- Turns the module on or off. Defaults to `false` (off).

    `Enabled = false`
    
## Connection Directives ##

* **HostAddress** -- Sets the address to use in the binding string for the
UDP (packet) binding. Defaults to `127.0.0.1` for local access only.

    `HostAddress = 127.0.0.1`

* **UDPPort** -- Set the port to use in the binding string for the UDP
(packet) binding. Defaults to `45325`. 

    `UDPPort = 45325`

* **HTTPPath** -- Sets the path used to register the dispatcher with the
simulators HTTP server. The binding string for HTTP (stream)
interface will be `http://{SimulatorAddress}/{HTTPPath}/`. Defaults to
`/Dispatcher/`. 

    `HTTPPath = "/Dispatcher"`

* **MaxInterPingTime** -- The number of milliseconds to keep a callback
connection open without activity. Defaults to 3000 milliseconds.

    `MaxInterPingTime = 3000`

* **MaxAsyncThreads** -- The maximum number of threads that can be used to
process  asynchronous requests. The thread pool will shrink when not in
use and will not grow larger than `MaxAsyncThreads`. Defaults to 2.

    `MaxAsyncThreads = 2`

## Security Directives ##

* **UseAuthentication** -- Specify whether invocation should require an
authenticated and valid capability before execution. Turning this off
should only happen in physically isolated networks. Defaults to `true`.

    `UseAuthentication = True`

* **UseIPAddressFiltering** -- Specify whether to use IP address
filtering in addition to  any other authentication. This is particularly
useful for reducing the exposure of denial of service attacks and
capability replay attacks. Defaults to `false`.

    `UseIPAddressFiltering = false`

* **AcceptableIPAddressPattern** -- When IP address filtering is
enabled, this variable contains the regular expression for acceptable IP
addresses. For example the expression, `"^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$"`,
would match all addresses and the expression `"^127\.0\.0\.1$"` would
limit to the local host. There is no default value, failure to specify a
pattern when using address filtering will disable all access to the
dispatcher interface.

    `AcceptableIPAddressPattern = "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$"`


* **GrantEstateManagersAccess** -- Specify that estate managers or the
estate owner may access dispatcher commands regardless of account access
level. Defaults to `true`.

    `GrantEstateManagersAccess = true`

* **GrantGridManagersAccess** -- Specify that grid managers may access
dispatcher commands. A grid manager is determined by the access level of
the account. Most user accounts have access level of 1. Grid "gods" have
access level 255. Defaults to `false`.

    `GrantGridManagersAccess = false`

* **GridManagerAccessLevel** -- The minimum access level used to determine
whether a particular account should be considered a grid
manager. Defaults to 256 which disables all grid manager access.

    `GridManagerAccessLevel = 100`

* **MaxLifeSpan** -- Specify the maximum lifespan of a capability in
seconds. The capability can be created or renewed with a maximum life
span. Defaults to 300 seconds.

    `MaxLifeSpan = 300`
