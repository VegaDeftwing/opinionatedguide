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

### MAC

### ICMP, IGMP

### Subnets

![devnullnetwork](../media/devnullnetwork.png ':size=70%')

## 4 - Transport Layer

### TCP

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

Netsukuku, cjdns + hyperboria, Dat / Beaker, [EVE Online internet](https://blog.benjojo.co.uk/post/eve-online-bgp-internet)

Software Defined Networking, ActivityPub



