#!/usr/bin/env python3
"""
RACEKON – Motor Image Scaling Utility
======================================
Scale the width and height of all motor images across all 10 product pages in 1 go!

Usage:
  1. Edit "scale_percentage" in motor-config.json and run:
       python3 scale-motors.py

  2. Or pass the percentage directly via CLI:
       python3 scale-motors.py 120     # scales to 120%
       python3 scale-motors.py 85      # scales to 85%
       python3 scale-motors.py 100     # resets to 100% (366px x 400px)
"""

import sys
import os
import json
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_FILE = os.path.join(SCRIPT_DIR, "motor-config.json")
CSS_FILE = os.path.join(SCRIPT_DIR, "motor-style.css")

MOTOR_PAGES = [
    ("2-kg-ac-synchronous-motor", "2-kg-ac-synchronous-motor.png", "2 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large"),
    ("3-kg-ac-synchronous-motor", "3-kg-ac-synchronous-motor.png", "3 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large"),
    ("7-kg-ac-synchronous-motor", "7-kg-ac-synchronous-motor.png", "7 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large"),
    ("10-kg-ac-synchronous-motor", "10-kg-ac-synchronous-motor.png", "10 Kg AC Synchronous Motor", "attachment-full size-full"),
    ("14-kg-ac-synchronous-motor", "14-kg-ac-synchronous-motor.png", "14 Kg AC Synchronous Motor", "attachment-large size-large"),
    ("20-kg-ac-synchronous-motor", "20-kg-ac-synchronous-motor.png", "20 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large"),
    ("28-kg-ac-synchronous-motor", "28kg-ac-synchronous-motor.png", "28 Kg AC Synchronous Motor", "attachment-large size-large"),
    ("40-kg-ac-synchronous-motor", "40-kg-ac-synchronous-motor.png", "40 Kg AC Synchronous Motor", "attachment-full size-full"),
    ("60-kg-ac-synchronous-motor", "60-kg-ac-synchronous-motor.png", "60 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large"),
    ("80-kg-ac-synchronous-motor", "80kg-ac-synchronous-motor.png", "80 Kg AC Synchronous Motor", "attachment-medium_large size-medium_large")
]

def load_config():
    if not os.path.exists(CONFIG_FILE):
        default_config = {
            "scale_percentage": 100,
            "base_width_px": 366,
            "base_height_px": 400,
            "mobile_base_width_px": 280,
            "mobile_base_height_px": 306
        }
        with open(CONFIG_FILE, "w", encoding="utf-8") as f:
            json.dump(default_config, f, indent=2)
        return default_config
    with open(CONFIG_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_config(config):
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)

def update_css(scale_factor):
    if not os.path.exists(CSS_FILE):
        return
    with open(CSS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    content = re.sub(r"--motor-scale:\s*[\d\.]+;", f"--motor-scale: {scale_factor:.3f};", content)
    with open(CSS_FILE, "w", encoding="utf-8") as f:
        f.write(content)

def update_html_pages(desktop_w, desktop_h, mobile_w, mobile_h):
    css_link = '  <link rel="stylesheet" href="../motor-style.css">\n'
    
    for folder, img_file, alt_text, css_class in MOTOR_PAGES:
        page_path = os.path.join(SCRIPT_DIR, folder, "index.htm")
        if not os.path.exists(page_path):
            continue
        with open(page_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Ensure motor-style.css is linked in <head>
        if "motor-style.css" not in content:
            content = content.replace("</head>", css_link + "</head>", 1)
        
        # Update the inline image tag
        img_tag = (
            f'<div class="elementor-image" style="text-align: center;"> '
            f'<img src="../images/{img_file}" class="{css_class} motor-product-img" '
            f'alt="{alt_text}" loading="lazy" '
            f'style="width: {desktop_w}px; height: {desktop_h}px; max-width: 100%; '
            f'margin: 0 auto; display: inline-block; object-fit: cover;"></div>'
        )
        content = re.sub(r'<div class="elementor-image"[^>]*>.*?</div>', img_tag, content, count=1)
        
        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)

def main():
    config = load_config()
    
    # Check CLI argument
    if len(sys.argv) > 1:
        try:
            config["scale_percentage"] = float(sys.argv[1].replace("%", ""))
            save_config(config)
        except ValueError:
            print("Error: Scale percentage must be a number (e.g. 110 or 85)")
            sys.exit(1)
            
    pct = config.get("scale_percentage", 100)
    base_w = config.get("base_width_px", 366)
    base_h = config.get("base_height_px", 400)
    mob_w = config.get("mobile_base_width_px", 280)
    mob_h = config.get("mobile_base_height_px", 306)
    
    scale_factor = pct / 100.0
    calc_w = round(base_w * scale_factor)
    calc_h = round(base_h * scale_factor)
    calc_mob_w = round(mob_w * scale_factor)
    calc_mob_h = round(mob_h * scale_factor)
    
    print(f"Applying Motor Image Scale: {pct}%")
    print(f"  • Desktop Dimensions: {calc_w}px × {calc_h}px (Base: {base_w}px × {base_h}px)")
    print(f"  • Mobile Dimensions:  {calc_mob_w}px × {calc_mob_h}px (Base: {mob_w}px × {mob_h}px)")
    
    update_css(scale_factor)
    update_html_pages(calc_w, calc_h, calc_mob_w, calc_mob_h)
    
    print(f"Successfully updated {len(MOTOR_PAGES)} motor pages and motor-style.css!")

if __name__ == "__main__":
    main()
