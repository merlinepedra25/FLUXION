#Flux

Flux is a auto WIFI CRACKER to test your one wifi. Simple, Easy to use and fast.
Flux is a remake of linset by v496, with more functions, and less Bugs. 
Flux use a Installer, check requirements
Some Bugs are fixed like negative channel [aireplay-ng] , enable wlan0mon[SEF]
Interface is fixed

#How it works

* Scan the networks.
* Capture handshake (can be used without handshake)
* Use WEB Interface *
* Mounts one FakeAP imitating the original
* A DHCP server is created on FakeAP
* It creates a DNS server to redirect all requests to the Host
* The web server with the selected interface is launched
* The mechanism is launched to check the validity of the passwords that will be introduced
* It deauthentificate all users of the network, hoping to connect to FakeAP and enter the password.
* The attack will stop after the correct password checking

**Check FLUX WIKI to lern more**

#Install:

1. Allow execuing file as program **$ sudo chmod +x flux**
2. Run Bash with **$ sudo ./flux**
```shell 
sudo chmod +x fluxion
sudo ./fluxion
```
#Bugs
- [ ] Negative Channel
- [x] Check Updates 
- [x] Animations
- [x] Wifi List Bug 
- [X] Kali Interface Bug