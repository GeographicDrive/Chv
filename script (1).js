// ===================================================================
// script.js
// Scripts propios que originalmente estaban inline (<script>) dentro de
// index.html: inicialización de tracking (GTM/GA/fbq/chartbeat/marfeel),
// buscador, reproductor embebido, e interacciones varias.
//
// Scripts externos enlazados (no incluidos en este export):
//   /_templates/desktop/includes/assets/js/main.min.js?v=1.1.2
//   https://www.googletagmanager.com/gtag/js?id=G-BZJZYDBZY8   (CDN)
//   //static.chartbeat.com/js/chartbeat_mab.js                 (CDN)
//   //applets.ebxcdn.com/ebx.js                                (CDN)
//   https://securepubads.g.doubleclick.net/tag/js/gpt.js       (CDN)
//   https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js   (CDN)
//   https://cdn.jsdelivr.net/npm/swiper@11.1.4/swiper-bundle.min.js    (CDN)
//   /_templates/desktop/includes/js/libs/handlebars.min-v4.7.6.js
//     -> sugerido migrar a CDN: https://cdn.jsdelivr.net/npm/handlebars@4.7.8/dist/handlebars.min.js
//   /_templates/desktop/includes/js/post_change.js?v=1.2
//   /_templates/desktop/includes/js/realtime.js
//   /_templates/desktop/includes/js/publicity_ES6.js?v=1.1.2
//   /_templates/desktop/includes/js/functionalities.js?v=1.1.2
//
// Nota: el bloque JSON-LD (schema.org) se dejó inline en index.html,
// ya que no es código ejecutable sino datos estructurados y debe
// permanecer dentro de su propio <script type="application/ld+json">.
// ===================================================================

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PHRTVCT');

// ── Next Inline Block ──

var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36532539-1']);
        //_gaq.push(['_setDomainName', 'chilevision.cl']);
        _gaq.push(['_setAllowLinker', true]);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();

// ── Next Inline Block ──

window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BZJZYDBZY8');

// ── Next Inline Block ──

!(function () {
    "use strict";
    function e(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        c = document.createElement("script");
        ((c.src = e),
        t
            ? (c.type = "module")
            : ((c.async = !0),
            (c.type = "text/javascript"),
            c.setAttribute("nomodule", "")));
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(c, n);
    }
    !(function (t, c) {
        !(function (t, c, n) {
        var a, o, r;
        ((n.accountId = c),
            (null !== (a = t.marfeel) && void 0 !== a) || (t.marfeel = {}),
            (null !== (o = (r = t.marfeel).cmd) && void 0 !== o) || (r.cmd = []),
            (t.marfeel.config = n));
        var i = "https://sdk.mrf.io/statics";
        (e("".concat(i, "/marfeel-sdk.js?id=").concat(c), !0),
            e("".concat(i, "/marfeel-sdk.es5.js?id=").concat(c), !1));
        })(
        t,
        c,
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        );
    })(window, 5033, {});
    })();

// ── Next Inline Block ──

(function() {
            var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
            _sf_async_config.uid = 66950;
            _sf_async_config.domain = 'chilevision.cl';
            _sf_async_config.flickerControl = false;
            _sf_async_config.useCanonical = true;
            _sf_async_config.useCanonicalDomain = true;
            _sf_async_config.sections = '';
            _sf_async_config.authors = '';
            _sf_async_config.autoDetect = false;

            function loadChartbeat() {
                var e = document.createElement('script');
                var n = document.getElementsByTagName('script')[0];
                e.type = 'text/javascript';
                e.async = true;
                e.src = '//static.chartbeat.com/js/chartbeat.js';
                n.parentNode.insertBefore(e, n);
            }
            loadChartbeat();
        })();

// ── Next Inline Block ──

!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '532721644796310');
    fbq('init', '374532633857319');

    fbq('track', 'PageView');

// ── Next Inline Block ──

!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '532721644796310');
        fbq('init', '374532633857319');

        fbq('track', 'PageView');

// ── Next Inline Block ──

!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '777638460547967');
        fbq('track', 'PageView');

// ── Next Inline Block ──

var turner_metadata = {
            "trackAction" : []
        };

// ── Next Inline Block ──

var c_id = "3005086";

        // Comscore library
        var comScoreRequest = function() {
            if (self.COMSCORE) {
                self.COMSCORE && COMSCORE.beacon({
                    c1: "2",
                    c2: c_id,
                    options: {
                        enableFirstPartyCookie: true,
                        bypassUserConsentRequirementFor1PCookie: true
                    }
                });
            } else {
                var _comscore = window._comscore = _comscore || [];

                _comscore.push({
                    c1: "2",
                    c2: c_id,
                    options: {
                        enableFirstPartyCookie: true,
                        bypassUserConsentRequirementFor1PCookie: true
                    }
                });

                (function() {
                    var s = document.createElement("script"),
                        el = document.getElementsByTagName("script")[0];
                    s.async = true;
                    s.src = "https://sb.scorecardresearch.com/beacon.js";
                    el.parentNode.insertBefore(s, el);
                })();
            }
        }
        comScoreRequest();

// ── Next Inline Block ──

(() => {
  const path = location.pathname;
  const bloqueados = ['/corporativo', '/page/corporativo', '/chv-presenta'];

  const esHome = path === '/';
  const esHomeNoticias = path === '/noticias/';

  if (!esHome && !esHomeNoticias && !bloqueados.some(p => path.includes(p))) {
    console.log('*****mowplayer*****');
    const s = document.createElement('script');
    s.src = 'https://ejs.mowplayer.com/js/player/midEdnRodu.js';
    s.async = true;
    document.head.appendChild(s);
  }
})();

// ── Next Inline Block ──

var page_meta_data    = {
            'pagename': "https://www.chilevision.cl",
            'section': "deportes",
            "subsection": "",
            "franchise": "",
            "contenttype": "category",
            "contenttitle": "Deportes",
            "contenttags": "",
            "datepublished": "",
            "dateupdated": "",
            "platform": "web",
            "region": "latam",
            "country": "chile",
            "contentid": "",
            "brand": "chilevision",
            "author" : '',
            "publisher" : "",
            "adobehashid": "",
        };

// ── Next Inline Block ──

//Captura variables para DFP desde la url
        var getQueryString = function ( field, url ) {
            var href = url ? url : window.location.href;
            var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
            var string = reg.exec(href);
            return string ? string[1] : null;
        };
        //Variables Key-Values
        var dfp_demo = getQueryString('demo');

// ── Next Inline Block ──

var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];

// ── Next Inline Block ──

document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector(".ad-skeleton.skeleton-rect");
    if (div) {
        div.remove();
    }
});

// ── Next Inline Block ──

var global_post_segment_url = '';
  var glogal_post_category    = 'deportes';
  var global_section          = 'deportes';
  var global_device           = "desktop";

  var global_post_id = '';

// ── Next Inline Block ──

<div class="main-tags | the-article__tags | all:my-start-20 all:my-end-32">
    {{#each post_tags}}

      {{#if primary}} 
        <a href="https://www.chilevision.cl/tag/{{slug}}/" class="main-tags__item" style=" border-color: #af9827; color: #f3f1ec; background-color: #af9827;" >#{{{name}}}</a>
      {{else}}
        <a href="https://www.chilevision.cl/tag/{{slug}}/" class="main-tags__item" >#{{{name}}}</a>
      {{/if}}

    {{/each}}
  </div>

// ── Next Inline Block ──

<div class="main-tags main-tags--bigger | mobile:margin-block-start-28 desktop:margin-block-start-60 mobile:margin-block-end-32 desktop:margin-block-end-40">
    <div class="main-tags__container">
      <strong class="main-tags__title | u-text-uppercase">Temas</strong>

      <ul class="main-tags__list | all:margin-block-start-20">
        {{#each post_tags}}
          <li class="main-tags__item">
            <h3 class="u-fw-400 u-fs-inherit">
              <a href="https://www.chilevision.cl/tag/{{slug}}/" class="main-tags__permalink">{{{name}}}</a>
            </h3>
          </li>
        {{/each}}
      </ul>
    </div>
  </div>

// ── Next Inline Block ──

<div class="js-link-static | main-article-box | all:margin-block-28">
    <strong class="main-article-box__title | u-text-uppercase">Te puede interesar:</strong>

    <div class="main-article-box__body | all:margin-block-start-16">
      {{#each posts}}
        <figure class="main-article-box__card main-article-box-card | all:margin-block-end-20">
          <a href="https://www.chilevision.cl{{post_link}}" class="main-article-box-card__media">
            <img src="{{imagen_post}}" alt="{{post_title}}" class="main-article-box-card__image | u-aspect-ratio" style="--aspect-ratio: 300/169;" loading="lazy"/>
          </a>

          <figcaption class="main-article-box-card__caption">
            <strong class="main-article-box-card__title">
              <a href="https://www.chilevision.cl{{post_link}}" class="main-article-box-card__permalink">{{{post_title}}}</a>
            </strong>

            <p class="main-article-box-card__text | u-hide-in-mobile">
              {{{extracto}}}
            </p>
          </figcaption>
        </figure>
      {{/each}}

    </div>
  </div>

// ── Next Inline Block ──

<section id="te-puede-interesar" class="main-section | mobile:margin-block-start-32 mobile:margin-block-end-32 desktop:margin-block-start-40 desktop:margin-block-end-84">
    <div class="main-section__container">
      <header class="main-section__header | all:margin-block-end-16">
        <strong class="main-section__title | u-the-title u-text-uppercase">Te puede interesar</strong>
      </header>

      <div class="main-section__body">
        <div class="main-card-list | _row">
          {{#each posts}}


            {{#if format_video}}

              <figure class="main-card-list__item main-card | _col-md-6">
                <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__media">
                  <img src="https://media.chilevision.cl{{imagen_post}}" alt="{{post_title}}" class="main-card__image">
                </a>

                <figcaption class="main-card__caption">
                  <strong class="main-card__title">
                    <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__permalink">
                      {{{post_title}}}
                    </a>
                  </strong>

                  <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__button main-card-button | u-text-uppercase">
                    <i class="main-card-button__icon | fa-regular fa-circle-play"></i>
                    <span class="main-card-button__label">Ver video</span>
                  </a>
                </figcaption>
              </figure>

            {{else}}

              <figure class="main-card-list__item main-card main-card--secondary | _col-md-6">
                <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__media">
                  <img src="https://media.chilevision.cl{{imagen_post}}" alt="{{post_title}}" class="main-card__image">
                </a>

                <figcaption class="main-card__caption">
                  <strong class="main-card__title">
                    <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__permalink">
                      {{{post_title}}}
                    </a>
                  </strong>

                  <a href="https://www.chilevision.cl/{{post_link}}" class="main-card__button main-card-button | u-text-uppercase">
                    <i class="main-card-button__icon | fa-solid fa-plus"></i>
                    <span class="main-card-button__label">Leer más</span>
                  </a>
                </figcaption>
              </figure>

            {{/if}}

          {{/each}}

        </div>
      </div>
    </div>
  </section>

// ── Next Inline Block ──

{{#each posts}}
  <div class="related-card">
    <div class="related-card__media">

      {{#if format_video}}
      <span class="related-card__icon | the-circle-icon" data-icon-size="medium" >
        <svg alt="Reproducir" aria-hidden="true" class="the-circle-icon__image" >
          <use href="/_templates/desktop/includes/assets/img/sprite.svg#play"></use>
        </svg>
      </span>
      {{/if}}


      <picture class="related-card__picture">
        <source srcset="{{imagen_src}}" media="(max-width: 767px)" >
        <img
          loading="lazy" 
          src="{{imagen_src}}" 
          alt="{{post_title}}"
          width="349"
          height="236"
          class="related-card__image | u-aspect-ratio"
          style="--mobile-aspect-ratio: 315/192; --desktop-aspect-ratio: 349/236;"
        >
      </picture>
    </div>

    <div class="related-card__caption">
      Ver también: <br>
      <a href="https://www.chilevision.cl/{{url}}" class="related-card__permalink">
        {{{titulo}}}
      </a>
    </div>
  </div>
  {{/each}}

// ── Next Inline Block ──

<iframe
      id=""
      class="vrudo"
      src="{{{url}}}"
      width="{{width}}"
      height="{{height}}"
      allowscriptaccess="always"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      frameborder="0"
      scrolling="no"
      allow="autoplay" >
  </iframe>

// ── Next Inline Block ──

{{#each posts}}
    <a href="https://www.chilevision.cl/{{slug}}" class="main-single-breadcrumbs__item" >{{name}}</a> {{separator @index ../posts.length '/' '/' }}
  {{/each}}

// ── Next Inline Block ──

{{{title}}}
    {{#each posts}}
      <a href="/autores/{{slug}}/" class="main-article-heading__link" title="{{name}}">{{{name}}}</a>{{separator @index ../posts.length}}
    {{/each}}

// ── Next Inline Block ──

<!-- src="https://media.chilevision.cl{{imagen_post}}"  -->
   
  {{#each posts}}

    <div class="col-md-3">
      <article class="the-card">
        <div class="the-card__media">

          {{#if format_video}}
          <span class="related-card__icon | the-circle-icon" data-icon-size="medium" >
            <svg alt="Reproducir" aria-hidden="true" class="the-circle-icon__image" >
              <use href="/_templates/desktop/includes/assets/img/sprite.svg#play"></use>
            </svg>
          </span>
          {{/if}}

          <picture class="related-card__picture">
            <source srcset="https://media.chilevision.cl{{imagen_post}}" media="(max-width: 767px)" >
            <img
              loading="lazy" 
              src="https://media.chilevision.cl{{imagen_post}}" 
              alt="{{post_title}}"
              width="297"
              height="168"
              class="the-card__image | u-aspect-ratio"
              style="--mobile-aspect-ratio: 276/155; --desktop-aspect-ratio: 297/168;"
            >
          </picture>
        </div>

        <div class="the-card__caption">
          <h2 class="the-card__title">
            <a href="https://www.chilevision.cl/{{post_link}}" title="{{post_title}}" class="the-card__permalink">
              {{{post_title}}}
            </a>
          </h2>
        </div>
      </article>
    </div>

  {{/each}}

// ── Next Inline Block ──

<!-- src="https://media.chilevision.cl{{imagen_post}}"  -->
   
  {{#each posts}}

    <div class="the-card | col-md-3" data-bg="true" data-type="light" style="--main-color-bg: #054466; --main-color-fg: white;">
      <article class="the-card">
        <div class="the-card__media">

          {{#if format_video}}
          <span class="related-card__icon | the-circle-icon" data-icon-size="medium" >
            <svg alt="Reproducir" aria-hidden="true" class="the-circle-icon__image" >
              <use href="/_templates/desktop/includes/assets/img/sprite.svg#play"></use>
            </svg>
          </span>
          {{/if}}

          <picture class="related-card__picture">
            <source srcset="https://media.chilevision.cl{{imagen_post}}" media="(max-width: 767px)" >
            <img
              loading="lazy" 
              src="https://media.chilevision.cl{{imagen_post}}" 
              alt="{{post_title}}"
              width="297"
              height="168"
              class="the-card__image | u-aspect-ratio"
              style="--mobile-aspect-ratio: 276/155; --desktop-aspect-ratio: 297/168;"
            >
          </picture>
        </div>

        <div class="the-card__caption">
          <h2 class="the-card__title">
            <a href="https://www.chilevision.cl/{{segment_url}}" title="{{post_title}}" class="the-card__permalink">
              {{{title}}}
            </a>
          </h2>
        </div>
      </article>
    </div>

  {{/each}}

// ── Next Inline Block ──

//ESTAS VARIABLES SON DE UN ARCHIVO LLAMADO STREAM.JS QUE SE LLAMA EN LOS FRONTS DE LOS SITIOS
    //SE AGREGARON ACA DE MANERA MANUAL
    //PARA PRODUCCION; FAVOR COMENTAR

    var global_url_count           = '';
    var global_url_ajax            = 'https://www.chilevision.cl/_includes/ajax/ajax.php';
    var global_url_json_static     = '';
    var global_name_site           = 'Chilevisión';

    var global_country_code        = '';
    var global_consent_mode        = '0';
    
    var global_domain_image        = 'https://media.chilevision.cl';
    var global_domain_search       = 'https://www.chilevision.cl';
    var global_domain              = 'https://www.chilevision.cl';
    var global_placeholder         = 'https://www.chilevision.cl/_templates/globals/img/placeholder.png';
    var global_rudo_url            = '//rudo.video';
    var global_domain_resources    = '';


    var global_dev_scroll = false;
    var _data_server = true;

    // const observer = new MutationObserver((mutations) => {
    // mutations.forEach(m => {

    //     // 🧩 Caso 1: se crea un nodo nuevo
    //     if (m.type === "childList") {
    //     m.addedNodes.forEach(node => {
    //         if (node.nodeType === 1) {
    //         if (node.classList?.contains("gadsrelative")) {
    //             console.log("🆕 Nodo creado con gadsrelative:", node);
    //             console.trace();
    //         }

    //         // por si viene dentro del nodo
    //         const found = node.querySelector?.(".gadsrelative");
    //         if (found) {
    //             console.log("🆕 Nodo creado que contiene gadsrelative:", found);
    //             console.trace();
    //         }
    //         }
    //     });
    //     }

    //     // 🎨 Caso 2: se agrega la clase a algo existente
    //     if (m.type === "attributes" && m.attributeName === "class") {
    //     if (m.target.classList.contains("gadsrelative")) {
    //         console.log("🎯 Clase gadsrelative agregada a:", m.target);
    //         console.trace();
    //     }
    //     }

    // });
    // });

    // observer.observe(document.documentElement, {
    // childList: true,
    // subtree: true,
    // attributes: true,
    // attributeFilter: ["class"]
    // });

// ── Next Inline Block ──

$( ".js_search_form" ).submit(function( event ) {
        event.preventDefault();

        $this = $(this);
        
        var search    = $this.find('.js_search_input').val();
        search        = search.replace(/ÃƒÂ¡/g,'a');
        search        = search.replace(/ÃƒÂ©/g,'e');
        search        = search.replace(/ÃƒÂ­/g,'i');
        search        = search.replace(/ÃƒÂ³/g,'o');
        search        = search.replace(/ÃƒÂº/g,'u');
        search        = search.replace(/ÃƒÂ/g,'A');
        search        = search.replace(/Ãƒâ€°/g,'E');
        search        = search.replace(/ÃƒÂ/g,'I');
        search        = search.replace(/Ãƒâ€œ/g,'O');
        search        = search.replace(/ÃƒÅ¡/g,'U');
        search        = search.replace(/ÃƒÂ±/g,'n');
        search        = search.replace(/Ãƒâ€˜/g,'N');
        search        = search.replace(/"/g,' ');
        location.href = global_domain+'/search/'+encodeURIComponent(search)+'/';
    });

// ── Next Inline Block ──

document.addEventListener("DOMContentLoaded", function () {

    const containers = document.querySelectorAll(".js-iframe-envivo");
    if (!containers.length) return;

    containers.forEach(function (container) {

        const playBtn = container.querySelector("#btn-play");
        if (!playBtn) return;

        const url_iframe = container.dataset.url;
        const det_iframe = container.dataset.det;

        playBtn.addEventListener("click", function () {
            container.innerHTML = `
                <iframe
                    loading="lazy"
                    width="560"
                    height="315"
                    src="${url_iframe}"
                    title="${det_iframe}"
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="main-section-grid__embed | u-aspect-ratio"
                ></iframe>
            `;
        });

    });

});

// ── Next Inline Block ──

/*
    document.addEventListener("DOMContentLoaded", function () {
 
    const container = document.querySelector(".js-iframe-envivo");
    if(!container) return;

    const playBtn = container.querySelector("#btn-play");

    var url_iframe = container.dataset.url;
    var det_iframe = container.dataset.det;

    playBtn.addEventListener("click", function () {
        container.innerHTML = `
        <iframe
            loading="lazy"
            width="560"
            height="315"
            src="${url_iframe}"
            title="${det_iframe}"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            class="main-section-grid__embed | u-aspect-ratio"
        ></iframe>
        `;
    });
    });
    */

// ── Next Inline Block ──

if(global_section === "single"){

        const destroyBtn = document.querySelector('.video-overlay-destroy');
        
        destroyBtn.addEventListener('click', function(e) {

            const iframeSignal = document.querySelector('.js-video-overlay-wrapper');

            iframeSignal.remove();
        });

        // Botón de copiar enlace
        // const copyLinkBtn = document.getElementById('copyLinkBtn');
        // copyLinkBtn.addEventListener('click', function(e) {
        //     e.preventDefault(); // Evita que el <a> recargue la página
    
        //     const url = window.location.href; // URL actual
    
        //     // Copiar al portapapeles
        //     navigator.clipboard.writeText(url)
        //     .then(() => {
        //         alert('URL copiada al portapapeles'); // Feedback
        //     })
        //     .catch(err => {
        //         console.error('Error al copiar la URL: ', err);
        //     });
        // });
    
        // Botón de compartir enlace
        /*
        const shareLinkBtn = document.getElementById('shareLinkBtn');
        shareLinkBtn.addEventListener('click', async function(e) {
            e.preventDefault();
    
            const url = window.location.href; // URL actual
    
            // Usar la API de Web Share (si está disponible)
            if (navigator.share) {
            try {
                await navigator.share({
                title: document.title,
                text: 'Mira este enlace:',
                url: url
                });
                console.log('Enlace compartido con éxito');
            } catch (err) {
                console.error('Error al compartir: ', err);
            }
            } else {
            alert('Tu navegador no soporta compartir enlaces directamente');
            }
        });
        */
    }

// ── Next Inline Block ──

document.addEventListener('DOMContentLoaded', () => {
        // Seleccionamos específicamente el <span> que actúa como botón de play
        const botonIframe = document.querySelector('.js-iframe-envivo #btn-play');

        // Verificamos que el botón exista en la página para evitar errores
        if (botonIframe) {
            // Lista de interacciones que cuentan como "actividad" del usuario
            const eventosInteraccion = ['click', 'scroll', 'mousemove', 'keydown', 'touchstart'];

            // Función que ejecutará el clic
            const activarBoton = () => {
                // Simula el clic directamente en tu ícono
                botonIframe.click(); 

                // Limpieza: quitamos los eventos para que esto ocurra solo UNA vez
                eventosInteraccion.forEach(evento => {
                    window.removeEventListener(evento, activarBoton);
                });
            };

            // Activamos la "escucha" de los eventos
            eventosInteraccion.forEach(evento => {
                // { once: true } asegura que el navegador escuche esto una sola vez por evento
                window.addEventListener(evento, activarBoton, { once: true }); 
            });
        }
    });
