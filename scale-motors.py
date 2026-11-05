#!/usr/bin/env python3
"""
RACEKON – Desktop Motor Image Scaling Utility
=============================================
Scale the desktop width and height of all motor images across all 10 product pages.
Mobile dimensions remain fixed at 280px x 306px and are NOT reduced.

Usage:
  1. Pass the desktop percentage directly via CLI:
       python3 scale-motors.py 50      # Desktop: 183px x 200px (Mobile: 280px x 306px)
       python3 scale-motors.py 70      # Desktop: 256px x 280px (Mobile: 280px x 306px)
       python3 scale-motors.py 100     # Desktop: 366px x 400px (Mobile: 280px x 306px)

  2. Or edit "desktop_scale_percentage" in motor-config.js / motor-config.json and run:
       python3 scale-motors.py
"""

import sys
import os
import json
import re

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_JSON = os.path.join(SCRIPT_DIR, "motor-config.json")
CONFIG_JS = os.path.join(SCRIPT_DIR, "motor-config.js")
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
    if os.path.exists(CONFIG_JSON):
        with open(CONFIG_JSON, "r", encoding="utf-8") as f:
            return json.load(f)
    return {
        "desktop_scale_percentage": 50,
        "desktop_base_width_px": 366,
        "desktop_base_height_px": 400,
        "mobile_fixed_width_px": 280,
        "mobile_fixed_height_px": 306
    }

def save_config_json(config):
    with open(CONFIG_JSON, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)

def update_config_js(pct):
    if not os.path.exists(CONFIG_JS):
        return
    with open(CONFIG_JS, "r", encoding="utf-8") as f:
        content = f.read()
    content = re.sub(r'desktop_scale_percentage:\s*[\d\.]+', f'desktop_scale_percentage: {pct}', content)
    with open(CONFIG_JS, "w", encoding="utf-8") as f:
        f.write(content)

def update_css(scale_factor):
    if not os.path.exists(CSS_FILE):
        return
    with open(CSS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    content = re.sub(r'--motor-scale:\s*[\d\.]+;', f'--motor-scale: {scale_factor:.3f};', content)
    with open(CSS_FILE, "w", encoding="utf-8") as f:
        f.write(content)

def main():
    config = load_config()
    
    if len(sys.argv) > 1:
        try:
            config["desktop_scale_percentage"] = float(sys.argv[1].replace("%", ""))
        except ValueError:
            print("Error: Scale percentage must be a number (e.g. 50 or 70)")
            sys.exit(1)
            
    pct = config.get("desktop_scale_percentage", config.get("scale_percentage", 50))
    save_config_json(config)
    update_config_js(pct)
    
    scale_factor = pct / 100.0
    update_css(scale_factor)
    
    base_w = config.get("desktop_base_width_px", config.get("base_width_px", 366))
    base_h = config.get("desktop_base_height_px", config.get("base_height_px", 400))
    mob_w = config.get("mobile_fixed_width_px", 280)
    mob_h = config.get("mobile_fixed_height_px", 306)
    
    calc_w = round(base_w * scale_factor)
    calc_h = round(base_h * scale_factor)
    
    print(f"Applied Desktop Motor Scale: {pct}%")
    print(f"  • Desktop Dimensions: {calc_w}px × {calc_h}px (Scaled)")
    print(f"  • Mobile Dimensions:  {mob_w}px × {mob_h}px (Fixed, not reduced)")
    print("Done!")

if __name__ == "__main__":
    main()
