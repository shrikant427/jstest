/**
 * RACEKON – Centralized Navigation Menu
 * ======================================
 * Single source of truth for the site-wide nav menu.
 * To add / remove / reorder menu items, edit ONLY this file.
 *
 * How it works:
 *  1. Uses document.currentScript.src to find the site root (where nav.js lives).
 *  2. Builds absolute hrefs for every page from that base URL.
 *  3. Marks the current page with  aria-current="page"  and the active CSS classes.
 *  4. Replaces the <ul id="primary-menu"> already present in the HTML.
 */
(function () {

  /* ─────────────────────────────────────────────────────────
     1.  Derive the absolute site-root URL from nav.js's own src.
         e.g.  file:///Users/.../racekon.com/nav.js
               → siteBase = "file:///Users/.../racekon.com/"
         This works correctly at any folder depth, including
         long file:// paths on macOS.
  ───────────────────────────────────────────────────────── */
  var scriptSrc = (document.currentScript && document.currentScript.src) || '';
  // Strip "nav.js" (and any query string) to get the directory
  var siteBase = scriptSrc ? scriptSrc.replace(/nav\.js(\?.*)?$/, '') : './';

  /* ─────────────────────────────────────────────────────────
     2.  Menu definition.
         Each item: { label, href, id }
         For items with children, add a `children` array.
         hrefs are relative to the SITE ROOT (no leading slash).
  ───────────────────────────────────────────────────────── */
  var menu = [
    { id: 'menu-item-601', label: 'Home', href: 'index.htm' },
    { id: 'menu-item-303', label: 'About Us', href: 'about-us/index.htm' },
    {
      id: 'menu-item-814', label: 'Products', href: null,
      children: [
        { id: 'menu-item-819', label: '2Kg AC Synchronous Motor', href: '2-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-840', label: '3Kg AC Synchronous Motor', href: '3-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-841', label: '7Kg AC Synchronous Motor', href: '7-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-842', label: '10Kg AC Synchronous Motor', href: '10-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-2273', label: '14 KG AC Synchronous Motor', href: '14-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-843', label: '20Kg AC Synchronous Motor', href: '20-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-855', label: '28Kg AC Synchronous Motor', href: '28-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-844', label: '40Kg AC Synchronous Motor', href: '40-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-845', label: '60Kg AC Synchronous Motor', href: '60-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-2277', label: '80 KG AC Synchronous Motor', href: '80-kg-ac-synchronous-motor/index.htm' },
        { id: 'menu-item-1089', label: 'AC Synchronous Geared Motor', href: 'ac-synchronous-geared-motor/index.htm' },
        { id: 'menu-item-1099', label: 'DC Stepping Motor', href: 'dc-stepping-motor/index.htm' },
        { id: 'menu-item-1205', label: 'Pmdc Motors', href: 'pmdc-motors/index.htm' },
        { id: 'menu-item-1582', label: 'Induction Motor', href: 'solid-yoke-dc-motors/index.htm' }
      ]
    },
    { id: 'menu-item-1073', label: 'Warranty', href: 'warranty/index.htm' },
    { id: 'menu-item-803', label: 'Quality Policy', href: 'quality-policy/index.htm' },
    { id: 'menu-item-1035', label: 'Network/Support', href: 'network-support/index.htm' },
    { id: 'menu-item-646', label: 'Contact', href: 'contact/index.htm' }
  ];

  /* ─────────────────────────────────────────────────────────
     3.  Helper – detect whether a root-relative href matches
         the current page URL.
  ───────────────────────────────────────────────────────── */
  function isCurrent(rootHref) {
    if (!rootHref) return false;
    // Build the absolute URL of the candidate page using siteBase
    var candidateUrl = siteBase + rootHref;
    // Normalise both sides: strip trailing index.htm / trailing slash
    var norm = function (s) {
      return s.replace(/\/index\.htm(l)?$/i, '/').replace(/\/{2,}/g, '/').replace(/\/$/, '').toLowerCase();
    };
    return norm(window.location.href) === norm(candidateUrl);
  }

  function isAncestor(item) {
    if (!item.children) return false;
    return item.children.some(function (c) { return isCurrent(c.href); });
  }

  /* ─────────────────────────────────────────────────────────
     4.  Build the <li> HTML for one item.
  ───────────────────────────────────────────────────────── */
  function buildItem(item) {
    var current = isCurrent(item.href);
    var ancestor = isAncestor(item);
    var hasChildren = item.children && item.children.length > 0;

    var cls = ['menu-item', 'menu-item-type-post_type', 'menu-item-object-page', item.id];
    if (item.href === 'index.htm') cls.push('menu-item-home');
    if (current) cls = cls.concat(['current-menu-item', 'page_item', 'current_page_item']);
    if (ancestor) cls = cls.concat(['current-menu-ancestor', 'current-menu-parent']);
    if (hasChildren) cls.push('menu-item-has-children');

    var linkAttrs = '';
    if (current) linkAttrs = ' aria-current="page"';

    var href = item.href ? 'href="' + siteBase + item.href + '"' : '';
    var link = '<a ' + href + linkAttrs + '>' + item.label + '</a>';

    var sub = '';
    if (hasChildren) {
      sub = '<ul class="sub-menu">';
      item.children.forEach(function (child) {
        sub += buildItem(child);
      });
      sub += '</ul>';
    }

    return '<li id="' + item.id + '" class="' + cls.join(' ') + '">' + link + sub + '</li>';
  }

  /* ─────────────────────────────────────────────────────────
     5.  Assemble the full <ul> and inject it.
  ───────────────────────────────────────────────────────── */
  function injectMenu() {
    var ul = document.getElementById('primary-menu');
    if (!ul) return; // Nothing to do if placeholder is absent

    var html = '';
    menu.forEach(function (item) { html += buildItem(item); });
    ul.innerHTML = html;

    // --- Mobile hamburger toggle ---
    // Clone the button to strip any stale listeners added by Astra's deferred JS
    var toggleBtn = document.querySelector('button.menu-toggle[aria-controls="primary-menu"]');
    if (toggleBtn) {
      var newBtn = toggleBtn.cloneNode(true);
      toggleBtn.parentNode.replaceChild(newBtn, toggleBtn);

      newBtn.addEventListener('click', function () {
        var isOpen = newBtn.getAttribute('aria-expanded') === 'true';
        newBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');

        // Astra CSS uses .toggled on #masthead and #site-navigation to show the menu
        var masthead = document.getElementById('masthead');
        var nav = document.getElementById('site-navigation');
        [masthead, nav].forEach(function (el) {
          if (!el) return;
          el.classList.toggle('toggled', !isOpen);
        });
      });
    }

    // --- Mobile sub-menu toggle for items with children (e.g. Products) ---
    ul.querySelectorAll('.menu-item-has-children > a').forEach(function (parentLink) {
      parentLink.addEventListener('click', function (e) {
        // Only intercept when the hamburger is visible (i.e. mobile view)
        var btn = document.querySelector('button.menu-toggle');
        if (!btn || getComputedStyle(btn).display === 'none') return;

        e.preventDefault();
        var li = parentLink.parentElement;
        var sub = li.querySelector('.sub-menu');
        if (!sub) return;

        var expanded = li.classList.toggle('ast-submenu-expanded');
        sub.style.display = expanded ? 'block' : '';
      });
    });
  }

  // Run as soon as the DOM is ready (the script is at end of body, not deferred)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectMenu);
  } else {
    injectMenu();
  }

})();
