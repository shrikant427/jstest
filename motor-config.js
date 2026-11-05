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
 *   desktop_scale_percentage: 130   -> Desktop: 183px x 200px (Compact)
 *   desktop_scale_percentage: 130   -> Desktop: 256px x 280px (Medium)
 *   desktop_scale_percentage: 130  -> Desktop: 366px x 400px (Base)
 * ========================================================
 */
var MOTOR_CONFIG = {
  desktop_scale_percentage: 130,  // <-- CHANGE THIS VALUE for desktop scaling
  desktop_base_width_px: 366,
  desktop_base_height_px: 400,
  mobile_fixed_width_px: 280,    // Fixed mobile width (stays unchanged)
  mobile_fixed_height_px: 306    // Fixed mobile height (stays unchanged)
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

  var desktopW = Math.round(baseW * scale);
  var desktopH = Math.round(baseH * scale);

  var css = [
    ':root {',
    '  --motor-scale: ' + scale + ';',
    '  --motor-desktop-width: ' + desktopW + 'px;',
    '  --motor-desktop-height: ' + desktopH + 'px;',
    '  --motor-mobile-width: ' + mobW + 'px;',
    '  --motor-mobile-height: ' + mobH + 'px;',
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
    '  object-fit: cover !important;',
    '}',
    '/* Fixed on mobile screens (< 768px) – not reduced by desktop scale */',
    '@media (max-width: 767px) {',
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
        img.style.setProperty('object-fit', 'cover', 'important');
        img.style.setProperty('margin', '0 auto', 'important');
        img.style.setProperty('display', 'inline-block', 'important');
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
