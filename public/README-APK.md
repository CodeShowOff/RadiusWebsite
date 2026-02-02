# APK File Setup for Radius Connect

## Where to Place the APK File

Place your Android APK file in this directory (`public/`) with the name:
```
Radius.apk
```

Full path: `c:\Users\shukr\Desktop\Projects\Radius\website\public\Radius.apk`

## How It Works

When users click the download button:

1. **Android Users**: Automatically download the APK file directly
2. **iOS Users**: Redirect to App Store
3. **Desktop Users**: Scroll to show all download options

## File Naming

The website expects the file to be named: **`Radius.apk`**

If you want to use a different name, update these files:
- `src/components/Navbar.jsx` (line with `/Radius.apk`)
- `src/components/Hero.jsx` (line with `/Radius.apk`)
- `src/components/Download.jsx` (lines with `/Radius.apk`)

## Versioning

### Option 1: Replace the file (recommended for simplicity)
Just replace `Radius.apk` with each new version.

### Option 2: Version-named files
Name your files like:
- `Radius-v1.0.0.apk`
- `Radius-v1.0.1.apk`

Then update the download paths in the components mentioned above.

## Important: Android Security Warning

Users will see a security warning when installing APK files from outside the Play Store. This is normal Android behavior.

To minimize concerns:
1. Sign your APK with a valid certificate
2. Add installation instructions on your website
3. Consider getting your app verified

## File Size Considerations

APK files can be large (20-50MB+). Consider:
- Using a CDN for faster downloads
- Compressing your APK (ProGuard/R8)
- Offering split APKs for different architectures

## Testing

1. Place your APK file in the `public/` folder
2. Run `npm run build` to build the website
3. Test the download on an Android device
4. Verify the file downloads correctly

## Direct Download Link

Once deployed, users can download directly via:
```
https://radiusconnect.tech/Radius.apk
```
