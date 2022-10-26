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
      
<p>It's recommended to answer 'y' to all options.</p>`
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
  }]
}

export default data;