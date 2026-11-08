/**
 * ========================================================
 * RACEKON – Motor Images Scale Configuration
 * ========================================================
 * Edit "desktop_scale_percentage" below and save the file.
 * Refresh any motor page in your browser and the desktop
 * size updates instantly in 1 go!
 *
 * (Mobile dimensions stay fixed at 280px x 306px and are NOT reduced)
 *
 * Examples:
 *   desktop_scale_percentage: 130.0   -> Desktop: 183px x 200px (Compact)
 *   desktop_scale_percentage: 130.0   -> Desktop: 256px x 280px (Medium)
 *   desktop_scale_percentage: 130.0  -> Desktop: 366px x 400px (Base)
 *   desktop_scale_percentage: 130.0  -> Desktop: 476px x 520px
 * ========================================================
 */
var MOTOR_CONFIG = {
  desktop_scale_percentage: 130.0,  // <-- CHANGE THIS VALUE for desktop scaling
  desktop_base_width_px: 366,
  desktop_base_height_px: 400,
  mobile_fixed_width_px: 280,    // Fixed mobile width (stays unchanged)
  mobile_fixed_height_px: 306,   // Fixed mobile height (stays unchanged)
  banner_padding_top_px: 24,     // Top padding of white background banner
  banner_padding_bottom_px: 24,  // Bottom padding of white background banner
  banner_margin_top_px: 0,       // Top margin above banner
  banner_margin_bottom_px: 40,   // Bottom margin below banner
  mobile_banner_padding_top_px: 16,
  mobile_banner_padding_bottom_px: 16,
  mobile_banner_margin_bottom_px: 25
};

/* ── Auto-apply to browser ── */
(function () {
  var pct = 100;
  if (typeof MOTOR_CONFIG !== 'undefined') {
    if (MOTOR_CONFIG.desktop_scale_percentage != null) {
      pct = Number(MOTOR_CONFIG.desktop_scale_percentage);
    } else if (MOTOR_CONFIG.scale_percentage != null) {
      pct = Number(MOTOR_CONFIG.scale_percentage);
    }
  }

  var scale = pct / 100.0;
  var baseW = (MOTOR_CONFIG && (MOTOR_CONFIG.desktop_base_width_px || MOTOR_CONFIG.base_width_px)) || 366;
  var baseH = (MOTOR_CONFIG && (MOTOR_CONFIG.desktop_base_height_px || MOTOR_CONFIG.base_height_px)) || 400;
  var mobW = (MOTOR_CONFIG && (MOTOR_CONFIG.mobile_fixed_width_px || MOTOR_CONFIG.mobile_base_width_px)) || 280;
  var mobH = (MOTOR_CONFIG && (MOTOR_CONFIG.mobile_fixed_height_px || MOTOR_CONFIG.mobile_base_height_px)) || 306;

  var padTop = (MOTOR_CONFIG && MOTOR_CONFIG.banner_padding_top_px != null) ? MOTOR_CONFIG.banner_padding_top_px : 24;
  var padBottom = (MOTOR_CONFIG && MOTOR_CONFIG.banner_padding_bottom_px != null) ? MOTOR_CONFIG.banner_padding_bottom_px : 24;
  var marTop = (MOTOR_CONFIG && MOTOR_CONFIG.banner_margin_top_px != null) ? MOTOR_CONFIG.banner_margin_top_px : 0;
  var marBottom = (MOTOR_CONFIG && MOTOR_CONFIG.banner_margin_bottom_px != null) ? MOTOR_CONFIG.banner_margin_bottom_px : 40;
  var mobPadTop = (MOTOR_CONFIG && MOTOR_CONFIG.mobile_banner_padding_top_px != null) ? MOTOR_CONFIG.mobile_banner_padding_top_px : 16;
  var mobPadBottom = (MOTOR_CONFIG && MOTOR_CONFIG.mobile_banner_padding_bottom_px != null) ? MOTOR_CONFIG.mobile_banner_padding_bottom_px : 16;
  var mobMarBottom = (MOTOR_CONFIG && MOTOR_CONFIG.mobile_banner_margin_bottom_px != null) ? MOTOR_CONFIG.mobile_banner_margin_bottom_px : 25;

  var desktopW = Math.round(baseW * scale);
  var desktopH = Math.round(baseH * scale);

  var css = [
    ':root {',
    '  --motor-scale: ' + scale + ';',
    '  --motor-desktop-width: ' + desktopW + 'px;',
    '  --motor-desktop-height: ' + desktopH + 'px;',
    '  --motor-mobile-width: ' + mobW + 'px;',
    '  --motor-mobile-height: ' + mobH + 'px;',
    '  --motor-banner-padding-top: ' + padTop + 'px;',
    '  --motor-banner-padding-bottom: ' + padBottom + 'px;',
    '  --motor-banner-margin-top: ' + marTop + 'px;',
    '  --motor-banner-margin-bottom: ' + marBottom + 'px;',
    '}',
    'html, body {',
    '  overflow-x: hidden;',
    '}',
    '.elementor-element-00da342,',
    '.elementor-element-37ec16e,',
    '.motor-hero-section[data-id="00da342"],',
    '.motor-hero-section[data-id="37ec16e"] {',
    '  background-color: #ffffff !important;',
    '  background: #ffffff !important;',
    '}',
    '.motor-hero-section,',
    '.elementor-section.motor-hero-section,',
    '.elementor-top-section.motor-hero-section,',
    '.motor-hero-section .elementor-container,',
    '.motor-hero-section .elementor-row,',
    '.motor-hero-section .elementor-column,',
    '.motor-hero-section .elementor-column-wrap,',
    '.motor-hero-section .elementor-widget-wrap,',
    '.motor-hero-section .elementor-widget,',
    '.motor-hero-section .elementor-widget-container,',
    '.motor-hero-section .elementor-image {',
    '  padding-top: 0 !important;',
    '  margin-top: 0 !important;',
    '}',
    '@media (max-width: 1024px) {',
    '  .motor-hero-section,',
    '  .elementor-section.motor-hero-section,',
    '  .elementor-top-section.motor-hero-section,',
    '  .motor-hero-section .elementor-container,',
    '  .motor-hero-section .elementor-row,',
    '  .motor-hero-section .elementor-column,',
    '  .motor-hero-section .elementor-column-wrap,',
    '  .motor-hero-section .elementor-widget-wrap,',
    '  .motor-hero-section .elementor-widget,',
    '  .motor-hero-section .elementor-widget-container,',
    '  .motor-hero-section .elementor-image {',
    '    padding-top: 0 !important;',
    '    margin-top: 0 !important;',
    '  }',
    '}',
    '@media (max-width: 767px) {',
    '  .motor-hero-section,',
    '  .elementor-section.motor-hero-section,',
    '  .elementor-top-section.motor-hero-section,',
    '  .motor-hero-section .elementor-container,',
    '  .motor-hero-section .elementor-row,',
    '  .motor-hero-section .elementor-column,',
    '  .motor-hero-section .elementor-column-wrap,',
    '  .motor-hero-section .elementor-widget-wrap,',
    '  .motor-hero-section .elementor-widget,',
    '  .motor-hero-section .elementor-widget-container,',
    '  .motor-hero-section .elementor-image {',
    '    padding-top: 0 !important;',
    '    margin-top: 0 !important;',
    '  }',
    '}',
    '.motor-hero-section .elementor-widget-spacer {',
    '  display: none !important;',
    '}',
    '.motor-image-banner-wrap,',
    '.elementor-widget-image .elementor-image.motor-image-banner-wrap {',
    '  width: 100vw !important;',
    '  position: relative !important;',
    '  left: 50% !important;',
    '  right: 50% !important;',
    '  margin-left: -50vw !important;',
    '  margin-right: -50vw !important;',
    '  background-color: #ffffff !important;',
    '  display: flex !important;',
    '  justify-content: center !important;',
    '  align-items: center !important;',
    '  text-align: center !important;',
    '  box-sizing: border-box !important;',
    '  padding: ' + padTop + 'px 0 ' + padBottom + 'px 0 !important;',
    '  margin-top: ' + marTop + 'px !important;',
    '  margin-bottom: ' + marBottom + 'px !important;',
    '}',
    '.motor-hero-section + .elementor-top-section {',
    '  padding-top: 0 !important;',
    '}',
    '.elementor-widget-image .elementor-image {',
    '  text-align: center !important;',
    '}',
    '.elementor-widget-image .elementor-image img.motor-product-img,',
    '.elementor-widget-image .elementor-image img[src*="-motor.png"] {',
    '  width: ' + desktopW + 'px !important;',
    '  height: ' + desktopH + 'px !important;',
    '  max-width: 100% !important;',
    '  margin: 0 auto !important;',
    '  display: inline-block !important;',
    '  object-fit: contain !important;',
    '}',
    '/* Fixed on mobile screens (< 768px) – not reduced by desktop scale */',
    '@media (max-width: 767px) {',
    '  .motor-image-banner-wrap,',
    '  .elementor-widget-image .elementor-image.motor-image-banner-wrap {',
    '    padding: ' + mobPadTop + 'px 0 ' + mobPadBottom + 'px 0 !important;',
    '    margin-bottom: ' + mobMarBottom + 'px !important;',
    '  }',
    '  .elementor-widget-image .elementor-image img.motor-product-img,',
    '  .elementor-widget-image .elementor-image img[src*="-motor.png"] {',
    '    width: ' + mobW + 'px !important;',
    '    height: ' + mobH + 'px !important;',
    '  }',
    '}'
  ].join('\n');

  var style = document.getElementById('motor-config-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'motor-config-style';
    var head = document.head || document.getElementsByTagName('head')[0];
    if (head) head.appendChild(style);
  }
  style.textContent = css;

  function directApply() {
    var isMobile = window.innerWidth < 768;
    var targetW = isMobile ? mobW : desktopW;
    var targetH = isMobile ? mobH : desktopH;

    var imgs = document.querySelectorAll('.elementor-widget-image .elementor-image img');
    imgs.forEach(function (img) {
      if (img.classList.contains('motor-product-img') || (img.src && img.src.indexOf('-motor.png') !== -1)) {
        img.style.setProperty('width', targetW + 'px', 'important');
        img.style.setProperty('height', targetH + 'px', 'important');
        img.style.setProperty('object-fit', 'contain', 'important');
        img.style.setProperty('margin', '0 auto', 'important');
        img.style.setProperty('display', 'inline-block', 'important');

        var parent = img.closest('.elementor-image');
        if (parent && !parent.classList.contains('motor-image-banner-wrap')) {
          parent.classList.add('motor-image-banner-wrap');
        }
      }
    });

    var heroSecs = document.querySelectorAll('.motor-hero-section');
    heroSecs.forEach(function (sec) {
      sec.style.setProperty('padding-top', '0px', 'important');
      sec.style.setProperty('margin-top', '0px', 'important');
      var sid = sec.getAttribute('data-id');
      if (sid === '00da342' || sid === '37ec16e') {
        sec.style.setProperty('background-color', '#ffffff', 'important');
        sec.style.setProperty('background', '#ffffff', 'important');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', directApply);
  } else {
    directApply();
  }

  window.addEventListener('resize', directApply);
})();
