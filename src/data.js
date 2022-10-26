const data = {
  "categories": [{
    "title": "Proxmox Tools",
    "logo_url": "https://github.com/home-assistant/brands/blob/master/core_integrations/proxmoxve/icon.png?raw=true"
  },{
    "title": "Home Assistant",
    "logo_url": "https://github.com/tteck/Proxmox/blob/main/misc/images/haos.png?raw=true"
  }],
  "items": [{
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox VE 7 Post Install",
    "content": `The script will give options to Disable the Enterprise Repo, Add/Correct PVE7 Sources, Enable the No-Subscription Repo, Add Test Repo, Disable Subscription Nag, Update Proxmox VE and Reboot PVE.
      
Run the following in the Proxmox Shell. ⚠️ **PVE7 ONLY**
      
~~~yaml
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

~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/kernel-clean.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Edge Kernel Tool",
    "content": `Proxmox [Edge Kernels](https://github.com/fabianishere/pve-edge-kernel) are custom Linux Kernels for Proxmox VE 7. Keeping up with new Kernel releases instead of LTS
  
Run the following in the Proxmox Shell.

~~~yaml
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
    
~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/scaling-governor.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox LXC Updater",
    "content": `Update All LXC's Fast & Easy
 
Run the following in the Proxmox Shell.
    
~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/update-lxcs.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "type": "utility",
    "title": "Proxmox Dark Theme",
    "content": `A dark theme for the Proxmox Web UI by [Weilbyte](https://github.com/Weilbyte/PVEDiscordDark)
 
Run the following in the Proxmox Shell.
    
~~~yaml
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
    
~~~yaml
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
    
~~~yaml
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
    
~~~yaml
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
     
~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/homeassistant-v4.sh)"
~~~
     
<h3 align="center" id="heading">⚡ Default Settings:  2GB RAM - 16GB Storage - 2vCPU ⚡</h3>
    
**Home Assistant Interface - IP:8123**
    
**Portainer Interface - IP:9000**
    
⚙️ **Path to HA /config**`
  }]
}

export default data;