
# Introduction

Voici ma liste des paramètres à modifier dans le menu about:config de Firefox.
J'ai à l'origine créé cette liste pour me souvenir de quoi modifier lorsque je dois réinstaller Firefox.
Certaines personnes ayant été intéressées je l'ai diffusée par la suite sous format d'un fichier texte.
Ce mode de diffusion n'étant absolument pas pratique j'ai décidé de mettre cette liste sur GitHub.
Le but est aussi de recevoir des contributions et de discuter de ces paramètres.

**Donc n'hésitez pas à contribuer, en ouvrant par exemple une issue.**

# Paramètres 


## Vie privée et sécurité

### Désactiver le Safe Browsing

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `browser.safebrowsing.malware.enabled`          | **false** | Désactive le safebrowsing, fourni par Google.   |
| `browser.safebrowsing.phishing.enabled`         | **false** | Désactive le safebrowsing.                      |
| `browser.safebrowsing.downloads.remote.enabled` | **false** | Désactive la mise à jour des listes de blocage. |
| `browser.safebrowsing.provider.google.updateURL` | **blanc** | Désactive la mise à jour des listes de blocage. |
| `browser.safebrowsing.provider.google4.updateURL` | **blanc** | Désactive la mise à jour des listes de blocage. |
| `browser.safebrowsing.provider.google4.dataSharingURL` | **blanc** | Désactive le partage de données. |
| `browser.safebrowsing.provider.google4.gethashURL` | **blanc** | Désactive le partage de données. |




Safebrowing : vérifiez que les valeurs `*.enable` sont sur **false** et videz les champs avec des liens Google ou Mozilla.

![safebrowsing désactivé 1](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing1.png)
![safebrowsing désactivé 2](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing2.png)
![safebrowsing désactivé 3](https://raw.githubusercontent.com/kaliangel/firefox-about-config/master/safebrowsing3.png)

### Gestion du referer

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `network.http.referer.trimmingPolicy`        | **0**   | Réduit la taille du referer (info donnant le lien d'où vous venez) |
| `network.http.referer.XOriginTrimmingPolicy` | **0**    | Réduit la taille du referer |
| `network.http.referer.XOriginPolicy`         | **0**    | N'envoie un referer que si vous venez du même site (si vous passez de qwant.com à qwant.com/maps Firefox informera que vous venez de qwant.com ; si vous passez de qwant.com à mozilla.org Firefox n'enverra pas de referer, mozilla.org ne saura d'où vous venez). Peut rendre l'empreinte du navigateur plus unique et donc plus facilement authentifiable. Mettez plutôt la valeur à 0 et activez "network.http.referer.spoofSource" |
| `network.http.referer.spoofSource`           | **true** | Envoie comme referer le site que vous visitez, si vous visitez mozilla.org, Firefox enverra comme referer mozilla.org |

### Désactiver le préchargement

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `network.dns.disablePrefetch`               | **true**  | Désactive le préchargement DNS des liens, si vous avez confiance en votre serveur DNS ne désactivez pas cette option utile à l'amélioration des performances |
| `network.prefetch-next`                     | **false** | Désactive le préchargement des pages |
| `browser.urlbar.speculativeConnect.enabled` | **false** | Désactive le préchargement |
| `network.http.speculative-parallel-limit`   | **0**     | Désactive le préchargement |

### Désactiver la télémétrie

Tapez `telemetry` dans la barre de recherche, supprimez tous les liens et passez tout à `false`.

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `dom.ipc.plugins.flash.subprocess.crashreporter.enabled` | **false** | Désactive la télémétrie |
| `app.normandy.enabled`                                   | **false** | Désactive la télémétrie |
| `app.normandy.first_run`                                 | **false** | Désactive la télémétrie |
| `app.normandy.api_url`                                   | **blanc** | Désactive la télémétrie |
| `beacon.enabled`                                         | **false** | Désactive la télémétrie |

### Désactiver la géolocalisation


| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `geo.enabled`              | **false** | Désactive la géolocalisation |
| `geo.wifi.uri`             | **blanc** | Désactive la géolocalisation via énumération des points Wi-Fi |
| `geo.provider.network.url` | **blanc** | |

### Désactiver les notifications push


Les notifications push permettent aux sites de vous envoyer des notifications même s'ils ne sont pas ouverts, si vous les y autorisez. Pour ce faire Mozilla utilise ses serveurs. Cela peut poser des problèmes de confidentialité.


| Attribut | Valeur |
| :-: | :-: |
| `dom.push.connection.enabled` | **false** |
| `dom.push.enabled`            | **false** |
| `dom.push.serverURL`          | **blanc**  |
   
### Autres 

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `security.OCSP.enabled` | **0** | Désactive l'[OCSP](https://fr.wikipedia.org/wiki/Online_Certificate_Status_Protocol) |
| `browser.cache.offline.enable` | **false** | Désactive le cache hors-ligne, c'est pas terrible d'autoriser les sites à enregistrer tout et n'importe quoi sur votre ordi |
| `browser.cache.offline.capacity` | **0** | Désactive le cache hors-ligne |
| `extensions.pocket.enabled` | **false** | Désactive pocket. Si vous ne vous en servez pas autant le désactiver |
| `extensions.pocket.api` | **blanc** | Désactive pocket.
| `extensions.pocket.site` | **blanc** | Désactive pocket |
| `extensions.pocket.oAuthConsumerKey` | **blanc** | Désactive pocket |
| `browser.send_pings` | **false** | Désactive le pistage des cliques |
| `browser.send_pings.max_per_link` | **0** | Autorise 0 envoie de notification lors d'un clic sur la page |
| `dom.battery.enabled` | **false** | Empêche les sites de voir l'état de votre batterie |
| `dom.event.clipboardevents.enabled` | **false** | Empêche les sites de savoir lorsque vous coper un élément dans le presse-papier |
| `media.navigator.enabled`| **false** | Empêche les sites de pister l'état du micro et de la caméra |
| `webgl.disabled` | **true** | WebGL pourrait être source de problèmes de sécurité. Peut casser certains sites |
| `network.captive-portal-service.enabled` | **false** | Désactive la recherche de portail captif. C'est utilisé notamment pour se connecter aux réseaux Wi-Fi publics |
| `captivedetect.canonicalURL` | **blanc** | Désactive la recherche de portails captifs |
| `layout.css.visited_links_enabled` | **false** | |
| `device.sensors.enabled` | **false** | |
| `browser.newtabpage.activity-stream.feeds.snippets` | **false** | |
| `privacy.firstparty.isolate` | **true** | Isole chacun de vos onglets |
| `network.IDN_show_punycode` | **true** | Certains liens contiennent des caractères unicodes. Ceci donne de plus grandes possibilités pour l'hameçonnage. Ces caractères unicode sont ecnodés avec le code « punycode ». Activer ce paramètres force Firefox à afficher le punycode plutôt que le caractère unicode |
| `media.peerconnection.enabled` | **false** | Désactive WebRTC qui peut poser des problèmes de sécurité et de vie privée |

## Performances

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `browser.cache.memory.enable` | **true** | Active le cache mémoire (RAM). Pour tous les paramètres concernant le cache, pensez à activer le nettoyage automatique du cache à la fin de la session pour des raisons de confidentialité. Le mieux étant d'utiliser une extension comme cookies autodelete et d'activer le nettoyage automatique à la fermeture de l'onglet et au bout d'un intervalle d'une dizaine de secondes |
| `browser.cache.memory.capacity` | **512000** | Taille du cache mémoire (en octets, 512000 = 512 mo). Mettre -1 pour que Firefox gére automatiquement cette valeur en fonction de votre quantiter de mémoire |
| `browser.cache.memory.max_entry_size` | **-1** | Mettre -1 pour une gestion automatique de cette valeur |
| `browser.cache.disk.enable` | **true** | Autorise l'utilisation du cache disque |
| `browser.cache.disk.capacity` | **512000** | Taille du cache disque. Mettre -1 pour une gestion automatique |
| `network.dnsCacheEntries` | **4000** | Nombre d'entrées du cache DNS. Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur mettez ce nombre à 100 |
| `network.dnsCacheExpiration` | **43200** | Temps avant expiration, nettoyage, d'une entrée présente dans le cache DNS (en secondes). Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur laissez le nombre par défaut |
| `network.dnsCacheExpirationGracePeriod` | **43200** | Mettre la même valeur que pour `network.dnsCacheExpiration` |
| `browser.sessionstore.interval` | **60000** | Firefox sauvegarde toutes les 15 secondes vos onglets et leurs données. Ça lui permet en cas de plantage de restaurer votre session. Ici on fait passer de une sauvegarde toutes les 15 secondes (15 000 ms) à une sauvegarde toutes les 60 secondes (60 000 ms). Une sauvegarde par minute c'est largement suffisant et ça permet de diminuer les accès au disque fait par Firefox |

## Pratique

| Attribut | Valeur | Description |
| :-: | :-: | --- |
| `browser.tabs.closeWindowWithLastTab` | **false** | Désactive la fermeture de Firefox lorsque vous fermez le dernier onglet.
| `browser.backspace_action` | **1** | La touche retour arrière de votre clavier ne vous fera plus revenir au lien précédent |
| `security.secure_connection_icon_color_gray` | **false** | Remet le cadenas de la barre d'adresse en vert plutôt qu'en gris. Parce que c'est plus joli :-) |
| `accessibility.blockautorefresh` | **true** | Bloque le rafraichissement automatique de la page |
| `dom.event.contextmenu.enabled` | **false** | Empêche les sites de bloquer l'utilisation du clic-droit |
| `browser.tabs.allowTabDetach` | **false** | Désactive la possibilité de déplacer un onglet vers une nouvelle fenêtre en tirant dessus |
| `ui.SpellCheckerUnderlineStyle` | **3** | Créez cette entrée dans le about:config et mettez le nombre 3 afin que Firefox souligne les mots mal orthographiés au lieu de dessiner une petite vaguelette rouge |
| `full-screen-api.warning.timeout` | **0** | Firefox affiche un popup lorsque vous passez en plein écran. Passer ce paramètre à 0 permet de ne plus afficher ce paramètre |

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

https://lehollandaisvolant.net/?d=2020/01/02/11/28/39-ma-liste-des-tweaks-aboutconfig-dans-firefox

***Merci à eux !***
