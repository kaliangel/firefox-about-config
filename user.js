/* Introduction                                                               

--------------------------------------------------------------------------------------------------------

Voici ma liste des paramètres à modifier dans le menu about:config de Firefox. 
J'ai à l'origine créé cette liste pour me souvenir de quoi modifier lorsque je dois réinstaller Firefox.
Certaines personnes ayant été intéressées je l'ai diffusée par la suite sous format d'un fichier texte. 
Ce mode de diffusion n'étant absolument pas pratique j'ai décidé de mettre cette liste sur GitHub. 
Le but est aussi de recevoir des contributions et de discuter de ces paramètres.

Donc n'hésitez pas à contribuer, en ouvrant par exemple une issue.

Paramètres                                                        

--------------------------------------------------------------------------------------------------------

Vie privée et sécurité                                                     

--------------------------------------------------------------------------------------------------------

*/

// Dégoogliser Firefox                                                                                   

user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");

// Désactiver le Safe Browsing

user_pref("browser.safebrowsing.malware.enabled", false); // désactive le safebrowsing, fourni par Google.
user_pref("browser.safebrowsing.phishing.enabled", false); // désactive le safebrowsing.
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // désactive la mise à jour des listes de blocage.

user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.passwords.enabled", false);

user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Gestion du referer

user_pref("network.http.referer.trimmingPolicy", 2); // réduit la taille du referer (info donnant le lien d'où vous venez).
user_pref("network.http.referer.XOriginTrimmingPolicy", 2); // réduit la taille du referer.
user_pref("network.http.referer.XOriginPolicy", 2); // n'envoie un referer que si vous venez du même site (si vous passez de qwant.com à qwant.com/maps Firefox informera que vous venez de qwant.com ; si vous passez de qwant.com à mozilla.org Firefox n'enverra pas de referer, mozilla.org ne saura d'où vous venez). Peut rendre l'empreinte du navigateur plus unique et donc plus facilement authentifiable. Mettez plutôt la valeur à 0 et activez "network.http.referer.spoofSource"
user_pref("network.http.referer.spoofSource", true); // envoie comme referer le site que vous visitez, si vous visitez mozilla.org, Firefox enverra comme referer mozilla.org.

// Désactiver le préchargement

user_pref("network.dns.disablePrefetch", true); // désactive le préchargement DNS des liens, si vous avez confiance en votre serveur DNS ne désactivez pas cette option utile à l'amélioration des performances
user_pref("network.prefetch-next", false); // désactive le préchargement des pages.
user_pref("browser.urlbar.speculativeConnect.enabled", false); // désactive le préchargement.
user_pref("network.http.speculative-parallel-limit", 0); // désactive le préchargement.

// Désactiver la télémétrie

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.urlbar.eventTelemetry.enabled", false);
user_pref("privacy.trackingprotection.origin_telemetry.enabled", false);
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.identitypopup.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("telemetry.origin_telemetry_test_mode.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.debugSlowSql", false);
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.geckoview.streaming", false);
user_pref("toolkit.telemetry.isGeckoViewMode", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.testing.overrideProductsCheck", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); // désactive la télémétrie.
user_pref("app.normandy.enabled", false); // désactive la télémétrie.
user_pref("app.normandy.first_run", false); // désactive la télémétrie.
user_pref("app.normandy.api_url", ""); // désactive la télémétrie.
user_pref("beacon.enabled", false); // désactive la télémétrie.

// Désactiver la géolocalisation

user_pref("geo.enabled", false); // désactive la géolocalisation.
user_pref("geo.wifi.uri", ""); // désactive la géolocalisation via énumération des points Wi-Fi.
user_pref("geo.provider.network.url", "");

// Désactiver les notifications push

/*

Les notifications push permettent aux sites de vous envoyer des notifications même s'ils ne sont pas ouverts, si vous les y autorisez. 
Pour ce faire Mozilla utilise ses serveurs. Cela peut poser des problèmes de confidentialité. Voici comment le désactiver :

*/

user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");

// Autres 

user_pref("security.OCSP.enabled", 0); // désactive l'OCSP.
user_pref("browser.cache.offline.enable", false); // désactive le cache hors-ligne, c'est pas terrible d'autoriser les sites à enregistrer tout et n'importe quoi sur votre ordi.
user_pref("browser.cache.offline.capacity", 0); // désactive le cache hors=ligne.
user_pref("extensions.pocket.enabled", false); // désactive pocket. Si vous ne vous en servez pas autant le désactiver.
user_pref("extensions.pocket.api", ""); // désactive pocket.
user_pref("extensions.pocket.site", ""); // désactive pocket.
user_pref("extensions.pocket.oAuthConsumerKey", ""); // désactive pocket.
user_pref("browser.send_pings", false); // désactive le pistage des cliques.
user_pref("browser.send_pings.max_per_link", 0); // autorise aucun envoi de notifications lors d'un clic sur la page.
user_pref("dom.battery.enabled", false); // empêche les sites de voir l'état de votre batterie.
user_pref("dom.event.clipboardevents.enabled", false); // empêche les sites de savoir lorsque vous coper un élément dans le presse-papier.
user_pref("media.navigator.enabled", false); // empêche les sites de pister l'état du micro et de la caméra.
user_pref("webgl.disabled", true); // webGL pourrait être source de problèmes de sécurité. Peut casser certains sites.
user_pref("network.captive-portal-service.enabled", false); // désactive la recherche de portail captif. C'est utilisé notamment pour se connecter aux réseaux WIFI publics.
user_pref("captivedetect.canonicalURL", ""); // désactive la recherche de portails captifs.
user_pref("layout.css.visited_links_enabled", false);
user_pref("device.sensors.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("privacy.firstparty.isolate", true); // isole chacun de vos onglets.
user_pref("network.IDN_show_punycode", true); // certains liens contiennent des caractères unicodes. Ceci donne de plus grandes possibilités pour l'hameçonnage. Ces caractères unicode sont ecnodés avec le code « punycode ». Activer ce paramètres force Firefox à afficher le punycode plutôt que le caractère unicode.
user_pref("media.peerconnection.enabled", false); // désactive WebRTC qui peut poser des problèmes de sécurité et de vie privée.

/* Performances                                                               

--------------------------------------------------------------------------------------------------------

*/

user_pref("browser.cache.memory.enable", true); // active le cache mémoire (RAM). Pour tous les paramètres concernant le cache, pensez à activer le nettoyage automatique du cache à la fin de la session pour des raisons de confidentialité. Le mieux étant d'utiliser une extension comme cookies autodelete et d'activer le nettoyage automatique à la fermeture de l'onglet et au bout d'un intervalle d'une dizaine de secondes.
user_pref("browser.cache.memory.capacity", 512000); // taille du cache mémoire (en octets, 512000 = 512 mo). Mettre -1 pour que Firefox gére automatiquement cette valeur en fonction de votre quantiter de mémoire.
user_pref("browser.cache.memory.max_entry_size", -1); // mettre -1 pour une gestion automatique de cette valeur.
user_pref("browser.cache.disk.enable", true); // pour autoriser l'utilisation du cache disque.
user_pref("browser.cache.disk.capacity", 512000); // taille du cache disque. Mettre -1 pour une gestion automatique.
user_pref("network.dnsCacheEntries", 4000); // nombre d'entrées du cache DNS. Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur mettez ce nombre à 100.
user_pref("network.dnsCacheExpiration", 43200); // temps avant expiration, nettoyage, d'une entrée présente dans le cache DNS (en secondes). Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur laissez le nombre par défaut.
user_pref("network.dnsCacheExpirationGracePeriod", 43200); // mettre la même valeur que pour "network.dnsCacheExpiration".
user_pref("browser.sessionstore.interval", 60000); // Firefox sauvegarde toutes les 15 secondes vos onglets et leurs données. Ça lui permet en cas de plantage de restaurer votre session. Ici on fait passer de une sauvegarde toutes les 15 secondes (15 000 ms) à une sauvegarde toutes les 60 secondes (60 000 ms). Une sauvegarde par minute c'est largement suffisant et ça permet de diminuer les accès au disque fait par Firefox.

/* Pratique  

--------------------------------------------------------------------------------------------------------

*/

user_pref("browser.tabs.closeWindowWithLastTab", false); // désactive la fermeture de Firefox lorsque vous fermez le dernier onglet.
user_pref("browser.backspace_action", 1); // la touche retour arrière de votre clavier ne vous fera plus revenir au lien précédent.
user_pref("security.secure_connection_icon_color_gray", false); // remet le cadenas de la barre d'adresse en vert plutôt qu'en gris. Parce que c'est plus joli :-)
user_pref("accessibility.blockautorefresh", true); // bloque le rafraichissement automatique de la page.
user_pref("dom.event.contextmenu.enabled", false); // empêche les sites de bloquer l'utilisation du clic-droit. 
user_pref("browser.tabs.allowTabDetach", false); // désactive la possibilité de déplacer un onglet vers une nouvelle fenêtre en tirant dessus.
user_pref("full-screen-api.warning.timeout", 0); // Firefox affiche un popup lorsque vous passez en plein écran. Passer ce paramètre à 0 permet de ne plus afficher ce paramètre.

/* Sources

--------------------------------------------------------------------------------------------------------

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

Merci à eux !

*/

/*

An user.js made by Yann Jaulin for kaliangel.
Based on the user.js of PoorPocketsMcNewHold.

GitHub :

https://github.com/kaliangel/
https://github.com/YannJaulin/
https://github.com/PoorPocketsMcNewHold/

Official repositorie :

https://github.com/kaliangel/firefox-about-config/


*/
