/**
 * ========================================================
 * RACEKON – Homepage Carousel Slider Configuration
 * ========================================================
 * Edit padding and margin values below and save the file.
 * Refresh the homepage (index.htm) in your browser and
 * changes will reflect instantly!
 * ========================================================
 */
var SLIDER_CONFIG = {
  // Desktop Spacing (>= 768px)
  margin_top_px: 0,          // Vertical gap above the slider
  margin_bottom_px: 15,       // Vertical gap below the slider
  margin_left_px: 30,          // Left margin (keep 0 for edge-to-edge full width)
  margin_right_px: 30,         // Right margin (keep 0 for edge-to-edge full width)
  padding_top_px: 0,          // Top padding inside slider wrapper
  padding_bottom_px: 0,       // Bottom padding inside slider wrapper
  padding_left_px: 0,         // Inset slider from the left screen edge
  padding_right_px: 0,        // Inset slider from the right screen edge

  // Mobile Spacing (< 768px)
  mobile_margin_top_px: 0,
  mobile_margin_bottom_px: 0,
  mobile_padding_left_px: 0,
  mobile_padding_right_px: 0
};

(function () {
  var cfg = (typeof SLIDER_CONFIG !== 'undefined') ? SLIDER_CONFIG : {};

  var mTop = (cfg.margin_top_px != null) ? cfg.margin_top_px : 15;
  var mBottom = (cfg.margin_bottom_px != null) ? cfg.margin_bottom_px : 35;
  var mLeft = (cfg.margin_left_px != null) ? cfg.margin_left_px : 0;
  var mRight = (cfg.margin_right_px != null) ? cfg.margin_right_px : 0;
  var pTop = (cfg.padding_top_px != null) ? cfg.padding_top_px : 0;
  var pBottom = (cfg.padding_bottom_px != null) ? cfg.padding_bottom_px : 0;
  var pLeft = (cfg.padding_left_px != null) ? cfg.padding_left_px : 0;
  var pRight = (cfg.padding_right_px != null) ? cfg.padding_right_px : 0;

  var mobMTop = (cfg.mobile_margin_top_px != null) ? cfg.mobile_margin_top_px : 10;
  var mobMBottom = (cfg.mobile_margin_bottom_px != null) ? cfg.mobile_margin_bottom_px : 25;
  var mobPLeft = (cfg.mobile_padding_left_px != null) ? cfg.mobile_padding_left_px : 0;
  var mobPRight = (cfg.mobile_padding_right_px != null) ? cfg.mobile_padding_right_px : 0;

  var css = [
    ':root {',
    '  --slider-margin-top: ' + mTop + 'px;',
    '  --slider-margin-bottom: ' + mBottom + 'px;',
    '  --slider-margin-left: ' + mLeft + 'px;',
    '  --slider-margin-right: ' + mRight + 'px;',
    '  --slider-padding-top: ' + pTop + 'px;',
    '  --slider-padding-bottom: ' + pBottom + 'px;',
    '  --slider-padding-left: ' + pLeft + 'px;',
    '  --slider-padding-right: ' + pRight + 'px;',
    '}',
    '.home .site-content > .ast-container {',
    '  max-width: 100% !important;',
    '  padding-left: 0 !important;',
    '  padding-right: 0 !important;',
    '}',
    '.elementor-section.elementor-element-0f16af0 {',
    '  max-width: 100% !important;',
    '  width: auto !important;',
    '  box-sizing: border-box !important;',
    '  margin-top: var(--slider-margin-top) !important;',
    '  margin-bottom: var(--slider-margin-bottom) !important;',
    '  margin-left: var(--slider-margin-left) !important;',
    '  margin-right: var(--slider-margin-right) !important;',
    '  padding-top: var(--slider-padding-top) !important;',
    '  padding-bottom: var(--slider-padding-bottom) !important;',
    '  padding-left: var(--slider-padding-left) !important;',
    '  padding-right: var(--slider-padding-right) !important;',
    '}',
    '.elementor-element-0f16af0 > .elementor-container {',
    '  max-width: 100% !important;',
    '  width: 100% !important;',
    '  padding: 0 !important;',
    '  margin: 0 !important;',
    '}',
    '.elementor-element-0f16af0 .elementor-column-wrap,',
    '.elementor-element-0f16af0 .elementor-widget-wrap,',
    '.elementor-element-0f16af0 .elementor-widget-container,',
    '.elementor-element-0f16af0 .n2-section-smartslider,',
    '.elementor-element-0f16af0 .n2-ss-align,',
    '.elementor-element-0f16af0 .n2-padding {',
    '  width: 100% !important;',
    '  max-width: 100% !important;',
    '  padding: 0 !important;',
    '  margin: 0 !important;',
    '}',
    '#n2-ss-2,',
    '#n2-ss-2-align {',
    '  width: 100% !important;',
    '  max-width: 100% !important;',
    '}',
    '#n2-ss-2 .n2-ss-slide-background-image img {',
    '  object-fit: contain !important;',
    '  object-position: center bottom !important;',
    '}',
    '@media (max-width: 767px) {',
    '  .elementor-section.elementor-element-0f16af0 {',
    '    margin-top: ' + mobMTop + 'px !important;',
    '    margin-bottom: ' + mobMBottom + 'px !important;',
    '    padding-left: ' + mobPLeft + 'px !important;',
    '    padding-right: ' + mobPRight + 'px !important;',
    '  }',
    '}'
  ].join('\n');

  var style = document.getElementById('slider-config-style');
  if (!style) {
    style = document.createElement('style');
    style.id = 'slider-config-style';
    var head = document.head || document.getElementsByTagName('head')[0];
    if (head) head.appendChild(style);
  }
  style.textContent = css;
})();