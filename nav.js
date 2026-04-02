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
    if (!ul) return;

    var html = '';
    menu.forEach(function (item) { html += buildItem(item); });
    ul.innerHTML = html;

    // NOTE: We intentionally do NOT touch the .menu-toggle hamburger button.
    // Astra's deferred JS handles it. We only filled the ul with li items;
    // Astra will now find those items when it runs and wire up sub-menus.
    //
    // Fallback: If Astra's JS did not create .ast-menu-toggle buttons inside
    // li.menu-item-has-children (e.g. because of a timing edge-case), we add
    // our own minimal toggle after DOMContentLoaded (which fires AFTER deferred
    // scripts, so Astra has definitely had its chance by then).
    document.addEventListener('DOMContentLoaded', function () {
      ul.querySelectorAll('.menu-item-has-children').forEach(function (li) {
        // If Astra already injected a toggle button, skip – it handles the click.
        if (li.querySelector('.ast-menu-toggle')) return;

        // Astra did NOT inject a toggle – insert our own fallback button.
        var btn = document.createElement('button');
        btn.className = 'ast-menu-toggle';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Toggle sub-menu');

        var anchor = li.querySelector('a');
        // Insert immediately after the <a> tag (same position Astra would use)
        if (anchor && anchor.parentNode === li) {
          li.insertBefore(btn, anchor.nextSibling);
        } else {
          li.appendChild(btn);
        }

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var isExpanded = li.classList.toggle('ast-submenu-expanded');
          var sub = li.querySelector('.sub-menu');
          if (sub) sub.style.display = isExpanded ? 'block' : '';
          btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });
      });
    });
  }

  // Always run injectMenu immediately.
  // nav.js is a *synchronous* script loaded at the end of <body>, so by the
  // time it executes, #primary-menu is already in the DOM. Running immediately
  // (rather than waiting for DOMContentLoaded) ensures the <li> items are
  // present when Astra's *deferred* bundle runs and queries them.
  injectMenu();

})();
