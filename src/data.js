const data = {
  "categories": [{
    "title": "Proxmox Tools",
    "logo_url": "https://github.com/home-assistant/brands/blob/master/core_integrations/proxmoxve/icon.png?raw=true"
  }],
  "items": [{
    "category": "Proxmox Tools",
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
    "title": "Proxmox Kernel Clean",
    "content": `Cleaning unused kernel images is not only good because of a reduced grub menu, but also gains some disk space.
            
Run the following in the Proxmox Shell.

~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/kernel-clean.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
    "title": "Proxmox Edge Kernel Tool",
    "content": `Proxmox [Edge Kernels](https://github.com/fabianishere/pve-edge-kernel) are custom Linux Kernels for Proxmox VE 7. Keeping up with new Kernel releases instead of LTS
  
Run the following in the Proxmox Shell.

~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/edge-kernel.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
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
    "title": "Proxmox LXC Updater",
    "content": `Update All LXC's Fast & Easy
 
Run the following in the Proxmox Shell.
    
~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/update-lxcs.sh)"
~~~`
  },
  {
    "category": "Proxmox Tools",
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
    "title": "Proxmox Backup Server Post Install",
    "content": `The script will give options to Disable the Enterprise Repo, Add/Correct PBS Sources, Enable the No-Subscription Repo, Add Test Repo, Disable Subscription Nag, Update Proxmox Backup Server and Reboot PBS.
 
Run the following in the Proxmox Shell. ⚠️ **Proxmox Backup Server ONLY**
    
~~~yaml
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pbs-install.sh)"
~~~
    
It's recommended to answer <code class="highlighter-rouge">y</code> to all options.`
  }]
}

export default data;