/** Notes:
 * It suppports a mix of HTML and markdown
 * It's really picky about spacing in front of content, make sure there is zero white space at the start of lines
 * Use ~~~ instead of ~~~ for markdown syntax highlighting. You can also use <code class="highlighter-rouge">code here</code>
 * An item category has to be present in the categories array or kaboom
 */

/** Template
 * {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox VE 7 Post Install",
    "content": `# markdown stuff <p>mixed with html</p>`
   }
 */

const data = {
  "categories": [{
    "title": "Proxmox Tools",
    "logo_url": "https://github.com/home-assistant/brands/blob/master/core_integrations/proxmoxve/icon.png?raw=true"
  },{
    "title": "Home Assistant",
    "logo_url": "https://avatars.githubusercontent.com/u/13844975?s=200&v=4"
  },{
    "title": "Automation",
    "logo_url": "https://i.stack.imgur.com/Wttia.png"
  },{
    "title": "MQTT",
    "logo_url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapprecs.org%2Fgp%2Fimages%2Fapp-icons%2F300%2F9f%2Fcom.thn.iotmqttdashboard.jpg&f=1&nofb=1&ipt=26066097a7ec3ddb94e04545de4a92823a11b46b6790d2a9e3b04375b708597a&ipo=images"
  },{
    "title": "Database",
    "logo_url": "https://static.vecteezy.com/system/resources/thumbnails/004/657/673/small/database-line-style-icon-free-vector.jpg"
  }],
  "items": [{
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox VE 7 Post Install",
    "content": `The script will give options to Disable the Enterprise Repo, Add/Correct PVE7 Sources, Enable the No-Subscription Repo, Add Test Repo, Disable Subscription Nag, Update Proxmox VE and Reboot PVE.
      
Run the following in the Proxmox Shell. ⚠️ **PVE7 ONLY**
      
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pve-install.sh)"
~~~
      
<p>It's recommended to answer <code class="highlighter-rouge">y</code> to all options.</p>`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Kernel Clean",
    "content": `Cleaning unused kernel images is not only good because of a reduced grub menu, but also gains some disk space.
            
Run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/kernel-clean.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Edge Kernel Tool",
    "content": `Proxmox [Edge Kernels](https://github.com/fabianishere/pve-edge-kernel) are custom Linux Kernels for Proxmox VE 7. Keeping up with new Kernel releases instead of LTS
  
Run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/edge-kernel.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox CPU Scaling Governor",
    "content": `CPU Scaling Governor enables the operating system to scale the CPU frequency up or down in order to save power or improve performance.

[Generic Scaling Governors](https://www.kernel.org/doc/html/latest/admin-guide/pm/cpufreq.html?#generic-scaling-governors)
     
Run the following in the Proxmox Shell.
    
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/scaling-governor.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox LXC Updater",
    "content": `Update All LXC's Fast & Easy
 
Run the following in the Proxmox Shell.
    
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/update-lxcs.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Dark Theme",
    "content": `A dark theme for the Proxmox Web UI by [Weilbyte](https://github.com/Weilbyte/PVEDiscordDark)
 
Run the following in the Proxmox Shell.
    
~~~bash
bash <(curl -s https://raw.githubusercontent.com/Weilbyte/PVEDiscordDark/master/PVEDiscordDark.sh ) install
~~~
    
To uninstall the theme, simply run the script with the <code class="highlighter-rouge">uninstall</code> command.`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Backup Server Post Install",
    "content": `The script will give options to Disable the Enterprise Repo, Add/Correct PBS Sources, Enable the No-Subscription Repo, Add Test Repo, Disable Subscription Nag, Update Proxmox Backup Server and Reboot PBS.
 
Run the following in the Proxmox Shell. ⚠️ **Proxmox Backup Server ONLY**
    
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pbs-install.sh)"
~~~
    
It's recommended to answer <code class="highlighter-rouge">y</code> to all options.`
  },
  {
    "category": "Home Assistant",
    "type": "vm",
    "title": "Home Assistant OS VM",
    "content": `<h3 align="center"> Option to create VM using Stable, Beta, Dev or Latest Image </h3>

The script automates the manual process of finding, downloading and extracting the Official KVM (qcow2) disk image provided by the Home Assistant Team, creating a VM with user defined settings, importing and attaching the disk, setting the boot order and starting the VM. No hidden (kpartx, unzip, ect...) installs of any kind. Supports lvmthin, zfspool, nfs, dir and btrfs storage types.
    
To create a new Proxmox Home Assistant OS VM, run the following in the Proxmox Shell
    
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/vm/haos-vm-v4.sh)"
~~~
<h3 align="center" id="heading">⚡ Default Settings:  4GB RAM - 32GB Storage - 2vCPU - Stable Image⚡</h3>
     
After the script completes, click on the VM, then on the **_Summary_** tab to find the VM IP.
    
**Home Assistant Interface - IP:8123**`
  },
  {
    "category": "Home Assistant",
    "type": "vm",
    "title": "PiMox HAOS VM",
    "content": `<p align="center"><img src="https://github.com/tteck/Proxmox/blob/main/misc/images/pimox.png?raw=true" width="100" height="100"/></p>
 
<h3 align="center"> Option to create VM using Stable, Beta or Dev Image </h3>
    
The script automates the manual process of finding, downloading and extracting the aarch64 (qcow2) disk image provided by the Home Assistant Team, creating a VM with user defined settings, importing and attaching the disk, setting the boot order and starting the VM.
    
To create a new PiMox HAOS VM, run the following in the Proxmox Shell
    
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/vm/pimox-haos-vm-v4.sh)"
~~~
<h3 align="center" id="heading">⚡ Default Settings:  4GB RAM - 32GB Storage - 2vCPU - Stable Image⚡</h3>
     
After the script completes, click on the VM, then on the **_Summary_** tab to find the VM IP.
    
**Home Assistant Interface - IP:8123**`
  },
  {
    "category": "Home Assistant",
    "type": "lxc",
    "title": "Home Assistant Container LXC",
    "content": `<p align="center"><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png" alt="Docker Logos | Docker" width="100" height="100"/>
<img src="https://avatars.githubusercontent.com/u/13844975?s=200&amp;v=4" alt="@home-assistant" width="100" height="100"/><img src="https://avatars1.githubusercontent.com/u/22225832?s=400&amp;v=4" alt="GitHub - portainer/portainer-docs: Portainer documentation" width="100" height="100"/></p>
    
<h1 align="center" id="heading"> Home Assistant Container LXC </h1>
    
A standalone container-based installation of Home Assistant Core
    
🛈 *If the LXC is created Privileged, the script will automatically set up USB passthrough.*
    
To create a new Proxmox Home Assistant Container LXC, run the following in the Proxmox Shell.
     
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/homeassistant-v4.sh)"
~~~
     
<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 16GB Storage - 2vCPU ⚡</h3>
    
**Home Assistant Interface - IP:8123**
    
**Portainer Interface - IP:9000**
    
⚙️ **Path to HA /config**
~~~bash
/var/lib/docker/volumes/hass_config/_data
~~~
⚙️ **To Edit the HA configuration.yaml** (Recommend Using File Browser)

Run in the LXC console
~~~bash
nano /var/lib/docker/volumes/hass_config/_data/configuration.yaml
~~~
Save and exit the editor with “Ctrl+O”, “Enter” and “Ctrl+X”

⚙️ **Copy Data From a Existing Home Assistant LXC to another Home Assistant LXC**

Run in the Proxmox Shell
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/ha-copy-data.sh)"
~~~

⚙️ **To Install HACS:**

Run in the LXC console
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/hacs.sh)"
~~~
After install, reboot Home Assistant and **clear browser cache** then Add HACS integration.


⚙️ [**Update Menu**](https://raw.githubusercontent.com/tteck/Proxmox/main/misc/images/update-menu.png)

Run in the LXC console
~~~bash
./update
~~~
`
  },
  {
    "category": "Home Assistant",
    "type": "lxc",
    "title": "Home Assistant Core LXC",
    "content": `<p align="center"><img src="https://avatars.githubusercontent.com/u/13844975?s=200&amp;v=4" width="100" height="100"/></p>

<h1 align="center" id="heading"> Home Assistant Core LXC </h1>

A standalone installation of Home Assistant Core

🛈 *If the LXC is created Privileged, the script will automatically set up USB passthrough.*

To create a new Proxmox Home Assistant Core LXC, run the following in the Proxmox Shell.
  
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/homeassistant-core-v4.sh)"
~~~
  
<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 8GB Storage - 2vCPU ⚡</h3>

⚠️ Initialize Home Assistant-Core (Only required once)

<sub>Run in the LXC console</sub>
~~~bash
cd /srv/homeassistant && python3 -m venv . && source bin/activate && hass
~~~

***Home Assistant Interface - IP:8123***

⚙️ **Edit the HA configuration.yaml**

<sub>Run in the LXC console</sub>
~~~bash
nano .homeassistant/configuration.yaml
~~~
<sub>Save and exit the editor with “Ctrl+O”, “Enter” and “Ctrl+X”</sub>
  
⚙️ **Install HACS:**

<sub>Run in the LXC console</sub>
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/hacs-core.sh)"
~~~
<sub>After install, reboot Home Assistant and **clear browser cache** then Add HACS integration.</sub>

⚙️ **Update Home Assistant**

<sub>Run in the LXC console</sub>
~~~bash
systemctl stop homeassistant.service && source /srv/homeassistant/bin/activate && pip3 install --upgrade homeassistant && systemctl start homeassistant.service && exit
~~~`
  },
  {
    "category": "Home Assistant",
    "type": "lxc",
    "title": "Podman Home Assistant Container LXC",
    "content": `<p align="center"><img src="https://heise.cloudimg.io/width/223/q50.png-lossy-50.webp-lossy-50.foil1/_www-heise-de_/imgs/18/2/5/8/2/8/1/0/podman_logo-670078d7ea1d15a6.png" width="100" height="100"/>
<img src="https://avatars.githubusercontent.com/u/13844975?s=200&amp;v=4" alt="@home-assistant" width="100" height="100"/><img/><img src="https://raw.githubusercontent.com/SelfhostedPro/Yacht/master/readme_media/Yacht_logo_1_dark.png" height="80"/><img/></p>
  
A standalone container-based installation of Home Assistant Core

⚠️ Podman seems to need a privileged LXC

To create a new Proxmox Podman Home Assistant Container LXC, run the following in the Proxmox Shell. 

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/podman-homeassistant-v4.sh)"
~~~
<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 16GB Storage - 2vCPU ⚡</h3>
  
**Home Assistant Interface - IP:8123**
  
**Yacht Interface - IP:8000**

⚙️ **Path to HA /config**
~~~bash
/var/lib/containers/storage/volumes/hass_config/_data
  ~~~
⚙️ **To edit the HA configuration.yaml**
  
Run in the LXC console
~~~bash
nano /var/lib/containers/storage/volumes/hass_config/_data/configuration.yaml
~~~
Save and exit the editor with “Ctrl+O”, “Enter” and “Ctrl+X”

⚙️ **Copy Data From a Existing Home Assistant LXC to a Podman Home Assistant LXC**

Run in the Proxmox Shell
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/ha-copy-data-podman.sh)"
  ~~~

⚙️ **To allow USB device passthrough:**
  
Run in the Proxmox Shell. (**replace <code class="highlighter-rouge">106</code> with your LXC ID**)
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/usb-passthrough.sh)" -s 106
~~~
  
Reboot the LXC to apply the changes

⚙️ **To Install HACS:**

Run in the LXC console
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/podman_hacs.sh)"
~~~
After install, reboot Home Assistant and **clear browser cache** then Add HACS integration.

⚙️ **Initial Yacht Login**

**username** 
~~~bash
admin@yacht.local
~~~
**password** 
~~~bash
pass
~~~`
  },
  {
    "category": "Automation",
    "type": "lxc",
    "title": "ioBroker LXC",
    "content": `<p align="center"><img src="https://github.com/ioBroker/ioBroker/blob/master/img/logos/ioBroker_Logo_256px.png?raw=true" height="100"/></p>

<h1 align="center" id="heading"> ioBroker LXC </h1>
  
[ioBroker](https://www.iobroker.net/#en/intro) is an open source automation platform.
  
To create a new Proxmox ioBroker LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/iobroker-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 8GB Storage - 2vCPU ⚡</h3>
  
**ioBroker Interface - IP:8081**

⚙️ **To Update ioBroker**

~~~bash
update from the ioBroker UI
~~~`
   },
   {
    "category": "Automation",
    "type": "lxc",
    "title": "openHAB LXC",
    "content": `<p align="center"><img src="https://www.openhab.org/openhab-logo-square.png?raw=true" height="100"/></p>

[openHAB](https://www.openhab.org/), a vendor and technology agnostic open source automation software for your home.
  
To create a new Proxmox openHAB LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/openhab-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 8GB Storage - 2vCPU ⚡</h3>
  
**openHAB Interface - IP:8080**

⚙️ **To Update openHAB**

~~~bash
apt update && apt upgrade -y
~~~`
   },
   {
    "category": "Automation",
    "type": "lxc",
    "title": " Homebridge LXC",
    "content": `<p align="center"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dingz.ch%2Fadmin%2Fdata%2Ffiles%2Fintegration%2Flogo%2F20%2F200514-em-logo-homebridge_logo.png%3Flm%3D1589459081&f=1&nofb=1" height="100"/></p>

[Homebridge](https://homebridge.io/) allows you to integrate with smart home devices that do not natively support HomeKit

To create a new Proxmox Homebridge LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/homebridge-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 1vCPU ⚡</h3>
  
**Homebridge Interface - IP:8581**

⚙️ **Initial Login**

**username** 
~~~bash
admin
~~~
**password** 
~~~bash
admin
~~~
Config File Path	<code class="highlighter-rouge">/var/lib/homebridge/config.json</code>
  
Storage Path	<code class="highlighter-rouge">/var/lib/homebridge</code>
  
Restart Command	<code class="highlighter-rouge">sudo hb-service restart</code>
  
Stop Command	<code class="highlighter-rouge">sudo hb-service stop</code>
  
Start Command	<code class="highlighter-rouge">sudo hb-service start</code>
  
View Logs Command	<code class="highlighter-rouge">sudo hb-service logs</code>
  
Systemd Service File	<code class="highlighter-rouge">/etc/systemd/system/homebridge.service</code>
  
Systemd Env File	<code class="highlighter-rouge">/etc/default/homebridge</code>

⚙️ **To Update Homebridge**

~~~bash
Update from the Homebridge UI
~~~`
   },
   {
    "category": "Automation",
    "type": "lxc",
    "title": "ESPHome LXC",
    "content": `<p align="center"><img src="https://github.com/home-assistant/brands/blob/master/core_integrations/esphome/dark_icon@2x.png?raw=true" height="100"/></p>

[ESPHome](https://esphome.io/) is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems.

To create a new Proxmox ESPHome LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/esphome-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 2vCPU ⚡</h3>
  
**ESPHome Interface - IP:6052**

⚙️ **To Update ESPHome**

Run in the LXC console
~~~bash
pip3 install esphome --upgrade
~~~`
   },
   {
    "category": "Automation",
    "type": "lxc",
    "title": "Node-Red LXC",
    "content": `<p align="center"><img src="https://github.com/home-assistant/brands/blob/master/custom_integrations/nodered/icon.png?raw=true" height="100"/></p>

[Node-RED](https://nodered.org/) is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways.

To create a new Proxmox Node-RED LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/node-red-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 1vCPU ⚡</h3>
  
**Node-Red Interface - IP:1880**
  
⚙️ **To Restart Node-Red:**

Run in the LXC console
~~~bash
systemctl restart nodered
~~~

⚙️ **To Update Node-Red:**

Run in the LXC console (Restart after update)
~~~bash
npm install -g --unsafe-perm node-red
~~~

⚙️ **To Install Node-Red Themes** ⚠️ **Backup your flows before running this script!!**

Run in the LXC console
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/node-red-themes.sh)"
~~~`
   },
   {
    "category": "Automation",
    "type": "lxc",
    "title": "n8n LXC",
    "content": `<p align="center"><img src="https://docs.n8n.io/_images/n8n-docs-icon.svg" height="70"/></p>
  
[n8n](https://n8n.io/) is an extendable workflow automation tool which enables you to connect anything to everything.
  
To create a new Proxmox n8n LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/n8n-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 3GB Storage - 2vCPU ⚡</h3>
  
**n8n Interface: IP:5678**

⚙️ **To Update n8n**

~~~bash
npm update -g n8n
~~~`
   },
   {
    "category": "MQTT",
    "type": "lxc",
    "title": "MQTT LXC",
    "content": `<p align="center"><img src="https://mosquitto.org/images/mosquitto-text-side-28.png" height="75"/></p>

[Eclipse Mosquitto](https://mosquitto.org/) is an open source message broker that implements the MQTT protocol

To create a new Proxmox MQTT LXC, run the following in the Proxmox Shell.

~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/mqtt-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  512MiB RAM - 2GB Storage - 1vCPU ⚡</h3>
  
Mosquitto comes with a password file generating utility called mosquitto_passwd.
~~~bash
sudo mosquitto_passwd -c /etc/mosquitto/passwd <usr>
~~~
Password: < password >

Create a configuration file for Mosquitto pointing to the password file we have just created.
~~~bash
sudo nano /etc/mosquitto/conf.d/default.conf
~~~
This will open an empty file. Paste the following into it.
~~~bash
allow_anonymous false
persistence true
password_file /etc/mosquitto/passwd
listener 1883
~~~
Save and exit the text editor with "Ctrl+O", "Enter" and "Ctrl+X".

Now restart Mosquitto server.
~~~bash
sudo systemctl restart mosquitto
~~~

⚙️ **To Update MQTT:**

Run in the LXC console
~~~bash
apt update && apt upgrade -y
~~~`
   },
   {
    "category": "MQTT",
    "type": "lxc",
    "title": "EMQX LXC",
    "content": `<p align="center"><img src="https://github.com/hassio-addons/repository/blob/master/emqx/icon.png?raw=true" height="100"/></p>

[EMQX](https://www.emqx.io/) is an Open-source MQTT broker with a high-performance real-time message processing engine, powering event streaming for IoT devices at massive scale.

To create a new Proxmox EMQX LXC, run the following in the Proxmox Shell.

~~~bash
  bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/emqx-v4.sh)"
~~~
<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 2vCPU ⚡</h3>


**EMQX Interface - IP:18083** 
  
⚙️ **Initial Login**

**username** 
  ~~~bash
  admin
  ~~~
  **password** 
  ~~~bash
  public
  ~~~
⚙️ **Setup**

Access Control ➡ Authentication  ➡ Create ➡ Next ➡ Next ➡ Create ➡ Users ➡ Add ➡ Username / Password (to authenicate with MQTT) ➡ Save. You're now ready to enjoy a high-performance MQTT Broker.

⚙️ **To Update EMQX**

Run in the LXC console
~~~bash
apt update && apt upgrade -y
~~~`
   },
   {
    "category": "Database",
    "type": "lxc",
    "title": "Mariadb LXC",
    "content": `<p align="center"><img src="https://mariadb.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/sage/dist/images/mariadb-logo-white.png.webp" alt="MariaDB"/><img src="https://raw.githubusercontent.com/tteck/Proxmox/main/misc/images/adminer_logo-cl.png" height="60"></p>

<h3 align="center"> Option to Install Adminer</h3>

[MariaDB](https://mariadb.org/) is a community-developed, commercially supported fork of the MySQL relational database management system.

To create a new Proxmox Mariadb LXC, run the following in the Proxmox Shell.
  
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/mariadb-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 1vCPU ⚡</h3>
  
To enable MariaDB to listen to remote connections, you need to edit your defaults file. To do this, open the console in your MariaDB lxc:
~~~bash
nano /etc/mysql/my.cnf
~~~
Un-comment <code class="highlighter-rouge">port =3306</code>
Save and exit the editor with "Ctrl+O", "Enter" and "Ctrl+X".

~~~bash
nano /etc/mysql/mariadb.conf.d/50-server.cnf
~~~
Comment <code class="highlighter-rouge">bind-address  = 127.0.0.1</code>
Save and exit the editor with "Ctrl+O", "Enter" and "Ctrl+X".

For new MariaDB installations, the next step is to run the included security script. This script changes some of the less secure default options. We will use it to block remote root logins and to remove unused database users.

Run the security script:
~~~bash
sudo mysql_secure_installation
~~~
Enter current password for root (enter for none): <code class="highlighter-rouge">enter</code>
  
Switch to unix_socket authentication [Y/n] <code class="highlighter-rouge">y</code> 
  
Change the root password? [Y/n] <code class="highlighter-rouge">n</code> 
  
Remove anonymous users? [Y/n] <code class="highlighter-rouge">y</code> 
  
Disallow root login remotely? [Y/n] <code class="highlighter-rouge">y</code>  
  
Remove test database and access to it? [Y/n] <code class="highlighter-rouge">y</code> 
  
Reload privilege tables now? [Y/n] <code class="highlighter-rouge">y</code>  

We will create a new account called admin with the same capabilities as the root account, but configured for password authentication. 
~~~bash
sudo mysql
~~~ 
Prompt will change to ~~~MariaDB [(none)]>~~~

Create a new local admin (Change the username and password to match your preferences)
~~~sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
~~~
Give local admin root privileges (Change the username and password to match above)
~~~sql
GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
~~~

Now, we'll give the user admin root privileges and password-based access that can connect from anywhere on your local area network (LAN), which has addresses in the subnet 192.168.100.0/24. This is an improvement because opening a MariaDB server up to the Internet and granting access to all hosts is bad practice.. Change the **_username_**, **_password_** and **_subnet_** to match your preferences:
~~~sql
GRANT ALL ON *.* TO 'admin'@'192.168.100.%' IDENTIFIED BY 'password' WITH GRANT OPTION;
~~~
Flush the privileges to ensure that they are saved and available in the current session:
~~~sql
FLUSH PRIVILEGES;
~~~
Following this, exit the MariaDB shell:
~~~bash
exit
~~~
Log in as the new database user you just created:
~~~bash
mysql -u admin -p
~~~
Create a new database:
~~~sql
CREATE DATABASE homeassistant;
~~~
Following this, exit the MariaDB shell:
~~~bash
exit
~~~
⚠️ Reboot the lxc 

Checking status.
~~~bash
sudo systemctl status mariadb
~~~ 
Change the recorder: <code class="highlighter-rouge">db_url:</code> in your HA configuration.yaml
  
Example:
~~~bash
recorder:
  db_url: mysql://admin:password@192.168.100.26:3306/homeassistant?charset=utf8mb4
~~~
  
⚙️ **To Update Mariadb:**

Run in the LXC console
~~~bash
apt update && apt upgrade -y
~~~
⚙️ [**Adminer**](https://raw.githubusercontent.com/tteck/Proxmox/main/misc/images/adminer.png) (formerly phpMinAdmin) is a full-featured database management tool
  
<code class="highlighter-rouge">http://your-mariadb-lxc-ip/adminer/</code>`
   },{
    "category": "Database",
    "type": "lxc",
    "title": "PostgreSQL LXC",
    "content": `<p align="center"><img src="https://wiki.postgresql.org/images/3/30/PostgreSQL_logo.3colors.120x120.png" height="100"/><img src="https://raw.githubusercontent.com/tteck/Proxmox/main/misc/images/adminer_logo-cl.png" height="60"></p>

<h3 align="center"> Option to Install Adminer</h3>

[PostgreSQL](https://www.postgresql.org/), also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.

To create a new Proxmox PostgreSQL LXC, run the following in the Proxmox Shell.
  
~~~bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/postgresql-v4.sh)"
~~~

<h3 align="center" id="heading">⚡ Default Settings:  1GB RAM - 4GB Storage - 1vCPU ⚡</h3>

To make sure our PostgreSQL is secured with a strong password, set a password for its system user and then change the default database admin user account

Change user password
~~~bash
passwd postgres
~~~
Login using Postgres system account
  
~~~bash
su - postgres
~~~
Now, change the Admin database password 
~~~bash
psql -c "ALTER USER postgres WITH PASSWORD 'your-password';"
~~~
Create a new user.
~~~bash
psql
~~~
~~~sql
CREATE USER admin WITH PASSWORD 'your-password';
~~~
Create a new database:
~~~sql
CREATE DATABASE homeassistant;
~~~
Grant all rights or privileges on created database to the user
~~~sql
GRANT ALL ON DATABASE homeassistant TO admin;
~~~
To exit psql
~~~bash
\\q
~~~ 
Then type exit to get back to root

Change the recorder: <code class="highlighter-rouge">db_url:</code> in your HA configuration.yaml
  
Example:
~~~bash
recorder:
  db_url: postgresql://admin:your-password@192.168.100.20:5432/homeassistant?client_encoding=utf8
~~~ 
⚙️ **To Update PostgreSQL**

Run in the LXC console
~~~bash
apt update && apt upgrade -y
~~~
⚙️ [**Adminer**](https://raw.githubusercontent.com/tteck/Proxmox/main/misc/images/adminer.png) (formerly phpMinAdmin) is a full-featured database management tool
  
<code class="highlighter-rouge">http://your-PostgreSQL-lxc-ip/adminer/</code>`
   }]
}

export default data;