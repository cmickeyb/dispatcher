# OpenSim Dispatcher

Extending the behavior of OpenSim primarily involves adding code to the
simulator itself through in-world scripts written in LSL. To enable a
broader set of languages and applications, we built Dispatcher, a
language-independent API for external scripting of OpenSim
regions. Using Dispatcher, scripts can be written in any language that
provides a JSON messaging interface; the package comes with libraries
for Perl and Python. The Dispatcher API supports scene update
operations, asset manipulation, inventory and avatar appearance changes,
and handling of in-world events.

Here are some examples of the Dispatcher in action: 

* [Penrose Tile Generation](https://www.youtube.com/watch?v=aTovnScmNhc)
-- This is a Perl script tiles a portion of a region using a
[Penrose tiling](http://en.wikipedia.org/wiki/Penrose_tiling) pattern.

* [Mobdat Traffic Simulation](https://www.youtube.com/watch?v=32HB5gnjtPk)
-- Mobdat is a social traffic simulation that uses OpenSim for
visualizing the movement of traffic. The Dispatcher handles real-time
updates for thousands of simulated cars.

See the document, [Dispatcher Overview](docs/overview.md), for more
information.
