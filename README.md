
# Introduction

Voici ma liste des paramètres à modifier dans le menu about:config de Firefox.
J'ai à l'origine créé cette liste pour me souvenir de quoi modifier lorsque je dois réinstaller Firefox.
Certaines personnes ayant été intéressées je l'ai diffusée par la suite sous format d'un fichier texte.
Ce mode de diffusion n'étant absolument pas pratique j'ai décidé de mettre cette liste sur GitHub.
Le but est aussi de recevoir des contributions et de discuter de ces paramètres.

**Donc n'hésitez pas à contribuer, en ouvrant par exemple une issue.**

# Paramètres 


## Vie privée et sécurité

### Dégoogliser Firefox

Tapez Google dans la barre de recherche et tout retirer (passez à false ou supprimez les liens).
![Mon about:config dégooglisé](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/google.png)

### Désactiver le Safe Browsing

`browser.safebrowsing.malware.enabled` **= false** : désactive le safebrowsing, fourni par Google.

`browser.safebrowsing.phishing.enabled` **= false** : désactive le safebrowsing.

`browser.safebrowsing.downloads.remote.enabled` **= false** : désactive la mise à jour des listes de blocage.

Safebrowing : vérifiez que les valeurs `*.enable` sont sur **false** et videz les champs avec des liens Google ou Mozilla.

![safebrowsing désactivé 1](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing1.png)
![safebrowsing désactivé 2](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing2.png)
![safebrowsing désactivé 3](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing3.png)
### Gestion du referer

`network.http.referer.trimmingPolicy` **= 2** : réduit la taille du referer (info donnant le lien d'où vous venez).

`network.http.referer.XOriginTrimmingPolicy` **= 2** : réduit la taille du referer.

`network.http.referer.XOriginPolicy` **= 2** : n'envoie un referer que si vous venez du même site (si vous passez de qwant.com à qwant.com/maps Firefox informera que vous venez de qwant.com ; si vous passez de qwant.com à mozilla.org Firefox n'enverra pas de referer, mozilla.org ne saura d'où vous venez). Peut rendre l'empreinte du navigateur plus unique et donc plus facilement authentifiable. Mettez plutôt la valeur à 0 et activez "network.http.referer.spoofSource" 

`network.http.referer.spoofSource` **= true** : envoie comme referer le site que vous visitez, si vous visitez mozilla.org, Firefox enverra comme referer mozilla.org.

### Désactiver le préchargement

`network.dns.disablePrefetch` **= true** : désactive le préchargement DNS des liens, si vous avez confiance en votre serveur DNS ne désactivez pas cette option utile à l'amélioration des performances.

`network.prefetch-next` **= false** : désactive le préchargement des pages.

`browser.urlbar.speculativeConnect.enabled` **= false** : désactive le préchargement.

`network.http.speculative-parallel-limit` **= 0** : désactive le préchargement.

### Désactiver la télémétrie

Tapez `telemetry` dans la barre de recherche, supprimez tous les liens et passez tout à `false`.

`dom.ipc.plugins.flash.subprocess.crashreporter.enabled` **= false** : désactive la télémétrie.

`app.normandy.enabled` **= false** : désactive la télémétrie.

`app.normandy.first_run` **= false** : désactive la télémétrie.

`app.normandy.api_url` **= blanc** : désactive la télémétrie.

`beacon.enabled` **= false** : désactive la télémétrie.

### Désactiver la géolocalisation

`geo.enabled` **= false** : désactive la géolocalisation.

`geo.wifi.uri` **= blanc** : désactive la géolocalisation via énumération des points Wi-Fi.

`geo.provider.network.url` **= blanc**

### Désactiver les notifications push


Les notifications push permettent aux sites de vous envoyer des notifications même s'ils ne sont pas ouverts, si vous les y autorisez. Pour ce faire Mozilla utilise ses serveurs. Cela peut poser des problèmes de confidentialité. Voici comment le désactiver :

 - `dom.push.connection.enabled` **= false**
 
- `dom.push.enabled` **= false**

- `dom.push.serverURL` **= blanc** 
   
### Autres 

`security.OCSP.enabled` **= 0** : désactive l'OCSP.

`browser.cache.offline.enable` **= false** : désactive le cache hors-ligne, c'est pas terrible d'autoriser les sites à enregistrer tout et n'importe quoi sur votre ordi.

`browser.cache.offline.capacity` **= 0** : désactive le cache hors-ligne.

`extensions.pocket.enabled` **= false** : désactive pocket. Si vous ne vous en servez pas autant le désactiver.

`extensions.pocket.api` **= blanc** : désactive pocket.

`extensions.pocket.site` **= blanc** : désactive pocket.

`extensions.pocket.oAuthConsumerKey` **= blanc** : désactive pocket.

`browser.send_pings` **= false** : désactive le pistage des cliques.

`browser.send_pings.max_per_link` **= 0** : autorise 0 envoie de notification lors d'un clic sur la page.

`dom.battery.enabled` **= false** : empêche les sites de voir l'état de votre batterie.

`dom.event.clipboardevents.enabled` **= false** : empêche les sites de savoir lorsque vous coper un élément dans le presse-papier.

`media.navigator.enabled` **= false** : empêche les sites de pister l'état du micro et de la caméra.

`webgl.disabled` **= true** : webGL pourrait être source de problèmes de sécurité. Peut casser certains sites.

`network.captive-portal-service.enabled` **= false** : désactive la recherche de portail captif. C'est utilisé notamment pour se connecter aux réseaux Wi-Fi publics.

`captivedetect.canonicalURL` **= blanc** : désactive la recherche de portails captifs.

`layout.css.visited_links_enabled` **= false**

`device.sensors.enabled` **= false**

`browser.newtabpage.activity-stream.feeds.snippets` **= false**
   
`privacy.firstparty.isolate` **= true** : isole chacun de vos onglets.

`network.IDN_show_punycode` **= true** : désactive le punycode.


`media.peerconnection.enabled` **= false** : désactive WebRTC qui peut poser des problèmes de sécurité et de vie privée.



## Performances


`browser.cache.memory.enable` **= true** : active le cache mémoire (RAM). Pour tous les paramètres concernant le cache, pensez à activer le nettoyage automatique du cache à la fin de la session pour des raisons de confidentialité. Le mieux étant d'utiliser une extension comme cookies autodelete et d'activer le nettoyage automatique à la fermeture de l'onglet et au bout d'un intervalle d'une dizaine de secondes.

`browser.cache.memory.capacity` **= 512000** : taille du cache mémoire (en octets, 512000 = 512 mo). Mettre -1 pour que Firefox gére automatiquement cette valeur en fonction de votre quantiter de mémoire.

`browser.cache.memory.max_entry_size` **= -1** : mettre -1 pour une gestion automatique de cette valeur.

`browser.cache.disk.enable` **= true** : pour autoriser l'utilisation du cache disque.

`browser.cache.disk.capacity` **= 512000** : taille du cache disque. Mettre -1 pour une gestion automatique.

`network.dnsCacheEntries` **= 4000** : nombre d'entrées du cache DNS. Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur mettez ce nombre à 100.

`network.dnsCacheExpiration` **= 43200** : temps avant expiration, nettoyage, d'une entrée présente dans le cache DNS (en secondes). Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur laissez le nombre par défaut.

`network.dnsCacheExpirationGracePeriod` **= 43200** : mettre la même valeur que pour "network.dnsCacheExpiration".


## Pratique


`browser.tabs.closeWindowWithLastTab` **= false** : désactive la fermeture de Firefox lorsque vous fermez le dernier onglet.

`browser.backspace_action` **= 1** : la touche retour arrière de votre clavier ne vous fera plus revenir au lien précédent.

`security.secure_connection_icon_color_gray` **= false** : remet le cadenas de la barre d'adresse en vert plutôt qu'en gris. Parce que c'est plus joli :-)

`accessibility.blockautorefresh` **= true** : bloque le rafraichissement automatique de la page.

`dom.event.contextmenu.enabled` **= false** : empêche les sites de bloquer l'utilisation du clic-droit. 

`browser.tabs.allowTabDetach` **= false** : désactive la possibilité de déplacer un onglet vers une nouvelle fenêtre en tirant dessus.


# Sources


https://www.dsfc.net/logiciel-libre/firefox-logiciel-libre/firefox-plus-rapide-respectueux-vie-privee/#Utiliser_la_memoire

https://www.privacytools.io/browsers/#about_config

https://support.mozilla.org/fr/kb/comment-empecher-firefox-etablir-automatiquement-connexions#w_mises-aa-jour-automatiques-et-saecuritae

https://sebsauvage.net/wiki/doku.php?id=firefox

https://wiki.mozilla.org/Privacy/Privacy_Task_Force/firefox_about_config_privacy_tweeks

https://www.kali-linux.fr/configuration/configurer-firefox-optimiser-securite-performances

https://lehollandaisvolant.net/?d=2020/01/02/11/28/39-ma-liste-des-tweaks-aboutconfig-dans-firefox

https://theprivacyguide1.github.io/about_config.html

https://www.ghacks.net/overview-firefox-aboutconfig-security-privacy-preferences/

https://librewolf-community.gitlab.io/

***Merci à eux !***
