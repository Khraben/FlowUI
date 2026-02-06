#!/bin/bash

# Script to update ComponentRegistry to use new color system

file="src/app/preview/ComponentRegistry.tsx"
temp_file="src/app/preview/ComponentRegistry.temp.tsx"

# Replace old color props with new system for Button components
sed -E '
# Remove individual Button color props
/bg: (PREVIEW_COLORS|STATIC_COLORS)\./d
/textColor: (PREVIEW_COLORS|STATIC_COLORS)\./d
/hoverBg: (PREVIEW_COLORS|STATIC_COLORS)\./d
/hoverTextColor: (PREVIEW_COLORS|STATIC_COLORS)\./d
/disabledBg: STATIC_COLORS\./d
/disabledTextColor: STATIC_COLORS\./d
/disabledBorderColor: STATIC_COLORS\./d
/borderColor: (PREVIEW_COLORS|STATIC_COLORS)\./d
/focusRing: PREVIEW_COLORS\./d

# Add colors prop after variant
s/(variant: '\''[^'\'']*'\'',)/\1\n      colors: PREVIEW_COLOR_CONFIG,/g
' "$file" > "$temp_file"

mv "$temp_file" "$file"
echo "Preview updated successfully!"
