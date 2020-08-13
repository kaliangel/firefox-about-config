// Introduction

/*

Voici ma liste des paramètres à modifier dans le menu about:config de Firefox.
J'ai à l'origine créé cette liste pour me souvenir de quoi modifier lorsque je dois réinstaller Firefox.
Certaines personnes ayant été intéressées je l'ai diffusée par la suite sous format d'un fichier texte.
Ce mode de diffusion n'étant absolument pas pratique j'ai décidé de mettre cette liste sur GitHub.
Le but est aussi de recevoir des contributions et de discuter de ces paramètres.

Donc n'hésitez pas à contribuer, en ouvrant par exemple une issue.

*/

// Paramètres

// Vie privée et sécurité

// Désactiver le Safe Browsing

user_pref("browser.safebrowsing.malware.enabled", false); // Désactive le safebrowsing, fourni par Google.
user_pref("browser.safebrowsing.phishing.enabled", false); // Désactive le safebrowsing.
user_pref("browser.safebrowsing.blockedURIs.enabled", false); // Désactive le safebrowsing.
user_pref("browser.safebrowsing.downloads.remote.enabled", false); // Désactive la mise à jour des listes de blocage.
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // Désactive la mise à jour des listes de blocage.
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // Désactive la mise à jour des listes de blocage.
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", ""); // Désactive le partage de données.
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // Désactive le partage de données.

// Gestion du referer

user_pref("network.http.referer.spoofSource", true); // Envoie comme referer le site que vous visitez, si vous visitez mozilla.org, Firefox enverra comme referer mozilla.org.

// Désactiver le préchargement

user_pref("network.dns.disablePrefetch", true); // Désactive le préchargement DNS des liens, si vous avez confiance en votre serveur DNS ne désactivez pas cette option utile à l'amélioration des performances.
user_pref("network.prefetch-next", false); // Désactive le préchargement des pages.
user_pref("browser.urlbar.speculativeConnect.enabled", false); // Désactive le préchargement dans la barre « intelligente » de Firefox.
user_pref("network.http.speculative-parallel-limit", 0); // Désactive le préchargement.

// Désactiver la télémétrie

/*

Tapez 'telemetry' dans la barre de recherche, supprimez tous les liens et passez tout à 'false'.

*/

user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
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
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.geckoview.streaming", false);
user_pref("toolkit.telemetry.isGeckoViewMode", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.testing.overrideProductsCheck", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

user_pref("toolkit.telemetry.enabled", false); // Désactive la télémétrie.
user_pref("toolkit.telemetry.server", ""); // Désactive la télémétrie.
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false); // Désactive la télémétrie.
user_pref("app.normandy.enabled", false); // Désactive la télémétrie.
user_pref("app.normandy.first_run", false); // Désactive la télémétrie.
user_pref("app.normandy.api_url", ""); // Désactive la télémétrie.
user_pref("beacon.enabled", false); // Désactive la télémétrie.

// Désactiver la géolocalisation

user_pref("geo.enabled", false); // Désactive la géolocalisation.
user_pref("geo.wifi.uri", ""); // Désactive la géolocalisation via énumération des points Wi-Fi.
user_pref("geo.provider.network.url", ""); // Désactive la géolocalisation.

// Désactiver les notifications push

/*

Les notifications push permettent aux sites de vous envoyer des notifications même s'ils ne sont pas ouverts, si vous les y autorisez. Pour ce faire Mozilla utilise ses serveurs. Cela peut poser des problèmes de confidentialité.

*/

user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");

// Autres 

user_pref("security.OCSP.enabled", 0); // Désactive l'OCSP.
user_pref("browser.cache.offline.enable", false); // Désactive le cache hors-ligne, c'est pas terrible d'autoriser les sites à enregistrer tout et n'importe quoi sur votre ordi.
user_pref("browser.cache.offline.capacity", 0); // Désactive le cache hors-ligne.
user_pref("extensions.pocket.enabled", false); // Désactive pocket. Si vous ne vous en servez pas autant le désactiver.
user_pref("extensions.pocket.api", ""); // Désactive pocket.
user_pref("extensions.pocket.site", ""); // Désactive pocket.
user_pref("browser.send_pings", false); // Désactive le pistage des cliques.
user_pref("browser.send_pings.max_per_link", 0); // Autorise 0 envoie de notification lors d'un clic sur la page.
user_pref("dom.battery.enabled", false); // Empêche les sites de voir l'état de votre batterie.
user_pref("dom.event.clipboardevents.enabled", false); // Empêche les sites de savoir lorsque vous coper un élément dans le presse-papier.
user_pref("media.navigator.enabled", false); // Empêche les sites de pister l'état du micro et de la caméra.
user_pref("webgl.disabled", true); // WebGL pourrait être source de problèmes de sécurité. Peut casser certains sites.
user_pref("network.captive-portal-service.enabled", false); // Désactive la recherche de portail captif. C'est utilisé notamment pour se connecter aux réseaux Wi-Fi publics.
user_pref("captivedetect.canonicalURL", ""); // Désactive la recherche de portails captifs.
user_pref("layout.css.visited_links_enabled", false); // Trop long à expliquer.
user_pref("device.sensors.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // Désactive l'affichage des snippets, ou « brèves » en Français, de Mozilla. Firefox contacte les serveurs de Mozilla pour les afficher.
user_pref("privacy.firstparty.isolate", true); // Isole chacun de vos onglets.
user_pref("network.IDN_show_punycode", true); // Certains liens contiennent des caractères unicodes. Ceci donne de plus grandes possibilités pour l'hameçonnage. Ces caractères unicode sont encodés avec le code « punycode ». Activer ce paramètres force Firefox à afficher le punycode plutôt que le caractère unicode.
user_pref("media.peerconnection.enabled", false); // Désactive WebRTC qui peut poser des problèmes de sécurité et de vie privée, comme révéler votre adresse IP.
user_pref("signon.autofillForms", false); //Désactive le remplissage automatique des identifiants.
user_pref("network.security.esni.enabled", true); //Active la prise en charge de l'esni.

// Performances

/*

Je dois mener des investigations plus poussées sur l'impact réel de la modification de ces paramètres ; je le laisses dans ce guide à titre informatif mais si vous ne savez pas ce que vous faites ne les modifiez pas. Merci. Bisous.

*/

user_pref("browser.cache.memory.enable", true); // Active le cache mémoire (RAM). Pour tous les paramètres concernant le cache, pensez à activer le nettoyage automatique du cache à la fin de la session pour des raisons de confidentialité. Le mieux étant d'utiliser une extension comme cookies autodelete et d'activer le nettoyage automatique à la fermeture de l'onglet et au bout d'un intervalle d'une dizaine de secondes.
user_pref("browser.cache.memory.capacity", 512000); // Taille du cache mémoire (en octets, 512000 = 512 mo). Mettre -1 pour que Firefox gére automatiquement cette valeur en fonction de votre quantiter de mémoire.
user_pref("browser.cache.memory.max_entry_size", -1); // Mettre -1 pour supprimer toute limite de taille.
user_pref("browser.cache.disk.enable", true); // Autorise l'utilisation du cache disque. Pour des raisons de confidentialité désactiver le cache disque au profit du cache mémoire peut être une bonne chose ; cela permet de s'assurer qu'aucune donnée n'est enregistrée sur votre ordinateur à la fermeture de Firefox.
user_pref("browser.cache.disk.capacity", 512000); // Taille du cache disque.
user_pref("network.dnsCacheEntries", 4000); // Nombre d'entrées du cache DNS. Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur laisser le paramètre par défaut.
user_pref("network.dnsCacheExpiration", 43200); // Temps avant expiration, nettoyage, d'une entrée présente dans le cache DNS (en secondes). Pour des raisons de confidentialité, si quelqu'un peut avoir accès à votre ordinateur laissez le nombre par défaut.
user_pref("network.dnsCacheExpirationGracePeriod", 43200); // Mettre la même valeur que pour "network.dnsCacheExpiration".
user_pref("browser.sessionstore.interval", 60000); // Firefox sauvegarde toutes les 15 secondes vos onglets et leurs données. Ça lui permet en cas de plantage de restaurer votre session. Ici on fait passer de une sauvegarde toutes les 15 secondes (15 000 ms) à une sauvegarde toutes les 60 secondes (60 000 ms). Une sauvegarde par minute c'est largement suffisant et ça permet de diminuer les accès au disque fait par Firefox.

// Pratique

user_pref("browser.tabs.closeWindowWithLastTab", false); // Désactive la fermeture de Firefox lorsque vous fermez le dernier onglet.
user_pref("browser.backspace_action", 1); // La touche retour arrière de votre clavier ne vous fera plus revenir au lien précédent.
user_pref("security.secure_connection_icon_color_gray", false); // Remet le cadenas de la barre d'adresse en vert plutôt qu'en gris. Parce que c'est plus joli :-)
user_pref("accessibility.blockautorefresh", true); // Bloque le rafraichissement automatique de la page.
user_pref("dom.event.contextmenu.enabled", false); // Empêche les sites de bloquer l'utilisation du clic-droit.
user_pref("browser.tabs.allowTabDetach", false); // Désactive la possibilité de déplacer un onglet vers une nouvelle fenêtre en tirant dessus.
user_pref("ui.SpellCheckerUnderlineStyle", 3); // Créez cette entrée dans le about:config et mettez le nombre 3 afin que Firefox souligne les mots mal orthographiés au lieu de dessiner une petite vaguelette rouge. Un autre chiffre donnera une autre forme.
user_pref("full-screen-api.warning.timeout", 0); // Firefox affiche un popup lorsque vous passez en plein écran. Passer ce paramètre à 0 permet de ne plus afficher ce paramètre.

// Sources

/*

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

http://kb.mozillazine.org/

https://www.malekal.com/mozilla-firefox-les-reglages-ultimes-anti-tracking-et-contre-le-pistage/

Merci à eux !

*/

/*

An user.js made by Yann Jaulin for kaliangel.

GitHub :

https://github.com/kaliangel/
https://github.com/YannJaulin/

Official repositorie :

https://github.com/kaliangel/firefox-about-config/


*/
