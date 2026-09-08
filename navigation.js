/*
 * =============================================
 * M.R. ANDERSON
 * SHARED NAVIGATION SYSTEM
 * =============================================
 *
 * Use this file on EVERY page.
 *
 * Add this to each HTML page:
 *
 * <script src="/js/navigation.js" defer></script>
 *
 * Required HTML containers:
 *
 * <div id="site-header"></div>
 * <div id="site-nav"></div>
 * <div id="site-secondary-nav"></div>
 * <div id="site-footer"></div>
 *
 * =============================================
 */

(() => {

    "use strict";


    /* =========================================
       SITE CONFIGURATION
       ========================================= */

    const CONFIG = {

        brand: "M.R. Anderson",

        logoText: "M.R.",


        /* -------------------------------------
           PRIMARY NAVIGATION
           ------------------------------------- */

        primaryNav: [
            {
                label: "Home",
                href: "/"
            },

            {
                label: "About",
                href: "/about.html"
            },

            {
                label: "Services",
                href: "/services.html"
            },

            {
                label: "Portfolio",
                href: "/portfolio.html"
            },

            {
                label: "Contact",
                href: "/contact.html"
            }
        ],


        /* -------------------------------------
           SECONDARY NAVIGATION
           ------------------------------------- */

        secondaryNav: [
            {
                label: "Insights",
                href: "/insights.html"
            },

            {
                label: "Resources",
                href: "/resources.html"
            }
        ],


        /* -------------------------------------
           FOOTER LINKS
           ------------------------------------- */

        footerLinks: [
            {
                label: "Privacy",
                href: "/privacy.html"
            },

            {
                label: "Contact",
                href: "/contact.html"
            }
        ],


        /* -------------------------------------
           COLORS
           ------------------------------------- */

        colors: {

            forest: "#1F5D42",

            forestDark: "#123B2A",

            forestLight: "#EAF2ED",

            cream: "#F7F5EF",

            white: "#FFFFFF",

            text: "#17221C",

            muted: "#66736B",

            border: "#CBD8D0"
        }

    };


    /* =========================================
       PATH FUNCTIONS
       ========================================= */

    function normalizePath(path) {

        const clean =
            path
                .split("?")[0]
                .split("#")[0];

        if (
            clean.length > 1 &&
            clean.endsWith("/")
        ) {
            return clean.slice(0, -1);
        }

        return clean || "/";
    }


    function isActive(href) {

        return (
            normalizePath(
                window.location.pathname
            ) === normalizePath(href)
        );

    }


    /* =========================================
       CREATE NAVIGATION LINK
       ========================================= */

    function makeLink(item, className = "") {

        const link =
            document.createElement("a");

        link.href = item.href;

        link.textContent = item.label;

        link.className = className;


        if (isActive(item.href)) {

            link.classList.add("is-active");

            link.setAttribute(
                "aria-current",
                "page"
            );

        }


        return link;

    }


    /* =========================================
       SITE STYLES
       ========================================= */

    function injectStyles() {

        if (
            document.getElementById(
                "mr-navigation-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement("style");


        style.id =
            "mr-navigation-styles";


        style.textContent = `

        /* =====================================
           COLOR VARIABLES
           ===================================== */

        :root {

            --mr-forest:
                ${CONFIG.colors.forest};

            --mr-forest-dark:
                ${CONFIG.colors.forestDark};

            --mr-forest-light:
                ${CONFIG.colors.forestLight};

            --mr-cream:
                ${CONFIG.colors.cream};

            --mr-white:
                ${CONFIG.colors.white};

            --mr-text:
                ${CONFIG.colors.text};

            --mr-muted:
                ${CONFIG.colors.muted};

            --mr-border:
                ${CONFIG.colors.border};

        }


        /* =====================================
           GLOBAL
           ===================================== */

        * {

            box-sizing: border-box;

        }


        body.mr-site {

            margin: 0;

            color:
                var(--mr-text);

            background:
                var(--mr-white);

            font-family:
                Georgia,
                "Times New Roman",
                serif;

            line-height: 1.6;

        }


        /* =====================================
           10% LEFT + RIGHT MARGIN
           ===================================== */

        .mr-site-shell {

            width: 80%;

            margin-left: 10%;

            margin-right: 10%;

        }


        /* =====================================
           HEADER
           ===================================== */

        .mr-header {

            display: grid;

            grid-template-columns:
                160px 1fr;

            min-height: 112px;

            border:
                1px solid
                var(--mr-forest-dark);

            border-bottom: 0;

            background:
                var(--mr-white);

        }


        /* =====================================
           LOGO
           ===================================== */

        .mr-logo {

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 20px;

            background:
                var(--mr-forest);

            color:
                var(--mr-white);

            text-decoration: none;

            font-family:
                "Brush Script MT",
                "Segoe Script",
                cursive;

            font-size: 2.2rem;

            font-weight: 600;

            letter-spacing: .04em;

        }


        /* =====================================
           HEADER DESCRIPTION
           ===================================== */

        .mr-header-copy {

            display: flex;

            align-items: center;

            padding:
                22px 28px;

            background:
                var(--mr-cream);

        }


        .mr-header-copy h1 {

            margin:
                0 0 4px;

            font-size:
                clamp(
                    1.2rem,
                    2vw,
                    1.8rem
                );

            font-weight: 500;

        }


        .mr-header-copy p {

            margin: 0;

            color:
                var(--mr-muted);

            font-size: .95rem;

        }


        /* =====================================
           PRIMARY NAVIGATION
           ===================================== */

        .mr-primary-nav {

            display: flex;

            align-items: center;

            justify-content: center;

            border:
                1px solid
                var(--mr-forest-dark);

            background:
                var(--mr-forest);

        }


        .mr-primary-nav a {

            display: block;

            padding:
                12px 22px;

            color:
                var(--mr-white);

            text-decoration: none;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .88rem;

            transition:
                background .2s ease,
                color .2s ease;

        }


        .mr-primary-nav a:hover,

        .mr-primary-nav a.is-active {

            background:
                var(--mr-cream);

            color:
                var(--mr-forest-dark);

        }


        /* =====================================
           SECONDARY NAVIGATION
           ===================================== */

        .mr-secondary-nav {

            display: flex;

            align-items: center;

            justify-content: center;

            border:
                1px solid
                var(--mr-forest-dark);

            border-top: 0;

            background:
                var(--mr-forest-dark);

        }


        .mr-secondary-nav a {

            display: block;

            padding:
                8px 18px;

            color:
                var(--mr-white);

            text-decoration: none;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .8rem;

        }


        .mr-secondary-nav a:hover,

        .mr-secondary-nav a.is-active {

            background:
                var(--mr-cream);

            color:
                var(--mr-forest-dark);

        }


        /* =====================================
           THREE COLUMN CONTENT
           ===================================== */

        .mr-content-grid {

            display: grid;

            grid-template-columns:
                160px
                minmax(0, 1fr)
                160px;

            min-height: 520px;

            border:
                1px solid
                var(--mr-forest-dark);

            border-top: 0;

        }


        /* =====================================
           LEFT SIDEBAR
           ===================================== */

        .mr-side-nav {

            padding:
                24px 18px;

            background:
                var(--mr-cream);

            border-right:
                1px solid
                var(--mr-border);

        }


        .mr-side-nav h2 {

            margin:
                0 0 14px;

            color:
                var(--mr-forest-dark);

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .78rem;

            letter-spacing:
                .08em;

            text-transform:
                uppercase;

        }


        .mr-side-nav a {

            display: block;

            padding:
                7px 0;

            color:
                var(--mr-text);

            text-decoration: none;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .82rem;

        }


        .mr-side-nav a:hover,

        .mr-side-nav a.is-active {

            color:
                var(--mr-forest);

            font-weight: 700;

        }


        /* =====================================
           MAIN CONTENT
           ===================================== */

        .mr-main {

            min-width: 0;

            padding: 28px;

            background:
                var(--mr-white);

        }


        .mr-main h2 {

            color:
                var(--mr-forest-dark);

        }


        /* =====================================
           HERO
           ===================================== */

        .mr-hero {

            min-height: 190px;

            display: flex;

            align-items: center;

            justify-content: center;

            margin-bottom: 28px;

            padding: 28px;

            background:
                var(--mr-forest-light);

            border:
                1px solid
                var(--mr-border);

            color:
                var(--mr-forest-dark);

            text-align: center;

        }


        .mr-hero h2 {

            margin: 0;

            font-size:
                clamp(
                    1.8rem,
                    4vw,
                    3rem
                );

            font-weight: 500;

        }


        .mr-hero p {

            margin-bottom: 0;

            font-size: 1.1rem;

        }


        /* =====================================
           RIGHT STICKY CONTENT
           ===================================== */

        .mr-sticky-content {

            padding:
                24px 18px;

            background:
                var(--mr-cream);

            border-left:
                1px solid
                var(--mr-border);

        }


        .mr-sticky-card {

            position: sticky;

            top: 20px;

            padding: 16px;

            border:
                1px solid
                var(--mr-border);

            background:
                var(--mr-white);

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .8rem;

        }


        .mr-sticky-card h2 {

            color:
                var(--mr-forest-dark);

            font-size: .78rem;

            letter-spacing:
                .08em;

            text-transform:
                uppercase;

        }


        .mr-sticky-card a {

            color:
                var(--mr-forest);

            text-decoration: none;

        }


        .mr-sticky-card a:hover {

            text-decoration: underline;

        }


        /* =====================================
           FOOTER
           ===================================== */

        .mr-footer {

            display: flex;

            flex-wrap: wrap;

            align-items: center;

            justify-content: space-between;

            gap: 14px;

            padding:
                18px 22px;

            border:
                1px solid
                var(--mr-forest-dark);

            border-top: 0;

            background:
                var(--mr-forest-dark);

            color:
                var(--mr-white);

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: .76rem;

        }


        .mr-footer a {

            color:
                var(--mr-white);

            text-decoration: none;

            margin-left: 16px;

        }


        .mr-footer a:hover {

            text-decoration: underline;

        }


        /* =====================================
           MOBILE
           ===================================== */

        .mr-mobile-toggle {

            display: none;

            width: 100%;

            border: 0;

            padding: 12px 16px;

            background:
                var(--mr-forest);

            color:
                var(--mr-white);

            font:
                600 .9rem
                Arial,
                Helvetica,
                sans-serif;

            cursor: pointer;

        }


        @media (max-width: 850px) {


            .mr-header {

                grid-template-columns: 1fr;

            }


            .mr-logo {

                min-height: 80px;

            }


            .mr-mobile-toggle {

                display: block;

            }


            .mr-primary-nav {

                display: none;

                flex-direction: column;

                align-items: stretch;

            }


            .mr-primary-nav.is-open {

                display: flex;

            }


            .mr-primary-nav a {

                text-align: center;

            }


            .mr-secondary-nav {

                flex-wrap: wrap;

            }


            .mr-content-grid {

                grid-template-columns: 1fr;

            }


            .mr-side-nav,

            .mr-sticky-content {

                border: 0;

                border-bottom:
                    1px solid
                    var(--mr-border);

            }


            .mr-side-nav {

                order: 1;

            }


            .mr-main {

                order: 2;

            }


            .mr-sticky-content {

                order: 3;

            }

        }

        `;


        document.head.appendChild(style);

    }


    /* =========================================
       HEADER
       ========================================= */

    function renderHeader() {

        const mount =
            document.getElementById(
                "site-header"
            );


        if (!mount) return;


        const shell =
            document.createElement("div");


        shell.className =
            "mr-site-shell";


        shell.innerHTML = `

            <header class="mr-header">

                <a
                    class="mr-logo"
                    href="/"
                    aria-label="${CONFIG.brand} home"
                >
                    ${CONFIG.logoText}
                </a>


                <div class="mr-header-copy">

                    <div>

                        <h1>
                            ${CONFIG.brand}
                        </h1>

                        <p>
                            Thoughtful ideas,
                            creative work,
                            and purposeful direction.
                        </p>

                    </div>

                </div>

            </header>

        `;


        mount.replaceWith(shell);

    }


    /* =========================================
       PRIMARY NAVIGATION
       ========================================= */

    function renderNavigation() {

        const mount =
            document.getElementById(
                "site-nav"
            );


        if (!mount) return;


        const shell =
            document.createElement("div");


        shell.className =
            "mr-site-shell";


        /* MOBILE BUTTON */

        const toggle =
            document.createElement("button");


        toggle.className =
            "mr-mobile-toggle";


        toggle.type = "button";


        toggle.textContent =
            "Menu";


        toggle.setAttribute(
            "aria-expanded",
            "false"
        );


        /* NAV */

        const nav =
            document.createElement("nav");


        nav.className =
            "mr-primary-nav";


        nav.setAttribute(
            "aria-label",
            "Primary navigation"
        );


        CONFIG.primaryNav.forEach(
            item => {

                nav.appendChild(
                    makeLink(item)
                );

            }
        );


        /* MOBILE TOGGLE */

        toggle.addEventListener(
            "click",
            () => {

                const open =
                    nav.classList.toggle(
                        "is-open"
                    );


                toggle.setAttribute(
                    "aria-expanded",
                    String(open)
                );

            }
        );


        shell.append(
            toggle,
            nav
        );


        mount.replaceWith(shell);

    }


    /* =========================================
       SECONDARY NAVIGATION
       ========================================= */

    function renderSecondaryNavigation() {

        const mount =
            document.getElementById(
                "site-secondary-nav"
            );


        if (
            !mount ||
            CONFIG.secondaryNav.length === 0
        ) {

            return;

        }


        const shell =
            document.createElement("div");


        shell.className =
            "mr-site-shell";


        const nav =
            document.createElement("nav");


        nav.className =
            "mr-secondary-nav";


        nav.setAttribute(
            "aria-label",
            "Secondary navigation"
        );


        CONFIG.secondaryNav.forEach(
            item => {

                nav.appendChild(
                    makeLink(item)
                );

            }
        );


        shell.appendChild(nav);


        mount.replaceWith(shell);

    }


    /* =========================================
       FOOTER
       ========================================= */

    function renderFooter() {

        const mount =
            document.getElementById(
                "site-footer"
            );


        if (!mount) return;


        const shell =
            document.createElement("div");


        shell.className =
            "mr-site-shell";


        const footer =
            document.createElement("footer");


        footer.className =
            "mr-footer";


        /* COPYRIGHT */

        const copyright =
            document.createElement("span");


        copyright.textContent =
            `© ${new Date().getFullYear()} ${CONFIG.brand}. All rights reserved.`;


        /* FOOTER LINKS */

        const links =
            document.createElement("span");


        CONFIG.footerLinks.forEach(
            item => {

                links.appendChild(
                    makeLink(item)
                );

            }
        );


        footer.append(
            copyright,
            links
        );


        shell.appendChild(footer);


        mount.replaceWith(shell);

    }


    /* =========================================
       INITIALIZE
       ========================================= */

    function initialize() {

        document.body.classList.add(
            "mr-site"
        );


        injectStyles();


        renderHeader();


        renderNavigation();


        renderSecondaryNavigation();


        renderFooter();

    }


    /* =========================================
       PUBLIC API
       ========================================= */

    window.MRNavigation = {

        config: CONFIG,

        init: initialize

    };


    /* =========================================
       START
       ========================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize,
            { once: true }
        );

    } else {

        initialize();

    }

})();
