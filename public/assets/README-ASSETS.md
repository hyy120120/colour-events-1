# Hero Video Upload Guide

To use your custom video for the Hero section:

1. **File Location**: Copy your `.mp4` video file into the folder:
   `d:\colour events 1\public\assets\hero-video.mp4`

2. **Video Requirements & Best Practices**:
   - **Format**: MP4 (`.mp4`)
   - **Resolution**: 1080p (1920x1080) or 4K
   - **Properties**: Optimized for web (H.264 video codec)
   - **Attribute Compatibility**: The site automatically renders it with `autoPlay`, `muted`, `loop`, `playsInline`, and `object-fit: cover` for full responsiveness across desktop and mobile.

3. **Changing Video Path (Optional)**:
   If your video has a different filename or is hosted on a CDN URL, open `src/config/siteConfig.js` and update:
   ```javascript
   heroVideoUrl: "/assets/your-custom-filename.mp4"
   ```
