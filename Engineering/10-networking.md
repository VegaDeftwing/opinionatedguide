# Chapter 10 - Networking

[TODO] Add follow along making a network stack

## Basics

Nodes

Links - Wired and Wireless

​	Guided and Unguided

Applications

End Systems - Hosts & Clients

Routers and Switches

​	forwarding table

Applications and APIs

LAN v WAN

the Packet

​		header

packet switching

​	store and forward - buffering, end to end delay

Packet Loss

Bandwidth V Throughput

​	FDM vs TDM

## A typical network

[TODO]

Default Gateway, Routes & kernel routing table, subnet mask, ping, traceroute (mtr/lft), dns - resolv.conf, pihole, caching / squid, localhosts, port forwards, DHCP, private nets, firewalls, chromecast port thing, https vs no s,  rsync,scp,samba, cups, databases , pihole, BGP, RIP, OSFI, multi-zone wifi, single ap multi freq wifi, enterprise security, secured ethernet, https://blog.cloudflare.com/how-verizon-and-a-bgp-optimizer-knocked-large-parts-of-the-internet-offline-today/

IETF & RFCs

IEEE-SA

The OSI model of networking is

In the **TCP/IP** model, the **Physical** and **Data Link** Layers are viewed as a **unified 'Network Acces Layer'**

The **Network Layer** is called the **Internet Layer**

The Transport Layer *stays the same*,

and The **Session, Presentation, and Application** layer are all part of a **larger Application** Layer

## 1 - The physical Layer

### Coax, Twister Pair, Fiber & More

### Wireless (Terrestrial and Satellite)

geostationary vs LEO

### Hubs, Repeaters, Taps

### Carrier Pidgeon, Can, etc.

## 2 - Data Link

MAC and LLC

### Ethernet

### PPP

### Switch

### Bridge

### Frames

### VLAN

## 3 - Network Layer/IP Layer

### Packets

### IPV4, IPV6

[IPV6 is a total nightmare](https://teknikaldomain.me/post/ipv6-is-a-total-nightmare/) & [Hacker News comments on this blog post](https://news.ycombinator.com/item?id=24994587) (note, I don't agree with everything here, just providing it as another person's comments)

### MAC

### ICMP, IGMP

### Subnets

![devnullnetwork](../media/devnullnetwork.png ':size=70%')

## 4 - Transport Layer

### TCP

#### QUIC

### UDP

## 5 - Session Layer

### Authentication

### Sockets

### API's

### NetBios

### PAP

### RPC

### SMB

### SOCKS

## 6 - Presentation Layer

### TLS

### SSL

### IMAP

## 7 - Application Layer

### HTTP(s) 

![Codes](../media/http-status-codes.png ':size=50%')

> https://www.monkeyuser.com/2017/http-status-codes/

http1 vs 2 v 3

### FTP

### DNS

#### DHCP

### SSH

### IRC

### EMail (SMTP)

### UPNP

### NTP

### Telnet

### NFS

## Time

Real time clocks, timezones, utc, etc.

## VPNs

### OpenVPN

### Wireguard

[Wireguard Quickstart page](https://www.wireguard.com/quickstart/)

[Wireguard entry on the (Arch Wiki)](https://wiki.archlinux.org/index.php/WireGuard)

#### Tailscale

## Networking Tools

### Etherape

### Wireshark

### Nmap

### Scapy / Kamene

[Kamene](https://kamene.readthedocs.io/en/latest/introduction.html)

### (G)NS



# Chapter 10.1 - Weird Networking, because why not!

[cjdns](https://github.com/cjdelisle/cjdns) + [hyperboria](https://hyperboria.net)

[ipfs](https://ipfs.io)

[dat](https://dat.foundation)

[Netsukuku](http://netsukuku.freaknet.org)

[Beaker Browser](https://beakerbrowser.com)

[EVE Online internet](https://blog.benjojo.co.uk/post/eve-online-bgp-internet) from https://blog.benjojo.co.uk, which has a ton of other really, really neat posts, like [The Speed of BGP network propagation](https://blog.benjojo.co.uk/post/speed-of-bgp-network-propagation), or [Hacking Ethernet out of Fibre Channel cards](https://blog.benjojo.co.uk/post/ip-over-fibre-channel-hack)

Software Defined Networking, ActivityPub

[GreenTunnel](https://github.com/SadeghHayeri/GreenTunnel) - "GreenTunnel bypasses DPI (Deep Packet Inspection) systems found in many ISPs (Internet Service Providers) which block access to certain websites."

[Alternative Internet (Github list)](https://github.com/redecentralize/alternative-internet)

[Awesome Mesh (Github list)](https://github.com/moarpepes/awesome-mesh)

[List of tools in the BlackArch repo](https://blackarch.org/tools.html), meant mostly for security research, though obviously many of these are network related and so might give some inspiration or lead to interesting rabbit holes

[Defcon channel (YouTube)](https://www.youtube.com/user/DEFCONConference/videos), DefCon is a security confrence, and naturally that means a lot of network security, including [Including some on hacking sex toys](https://www.youtube.com/watch?v=RnxcPeemHSc&ab_channel=DEFCONConference)

[Why do we use the Linux Kernel's TCP Stack (Julia Evans Blog)](https://jvns.ca/blog/2016/06/30/why-do-we-use-the-linux-kernels-tcp-stack/)

[A smol tcp stack (Github)](https://github.com/smoltcp-rs/smoltcp)

[The Cost of CPU Networking on a Host (David Ahern's Blog)](https://people.kernel.org/dsahern/the-cpu-cost-of-networking-on-a-host)

[Encapsulation of TCP over UDP](https://tools.ietf.org/id/draft-cheshire-tcp-over-udp-00.html)

