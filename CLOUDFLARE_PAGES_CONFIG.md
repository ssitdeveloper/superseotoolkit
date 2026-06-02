# Cloudflare Pages Build Configuration
# This prevents automatic Wrangler deployment which causes asset size issues

# For Static Sites, Pages deployment is automatic - no build command needed

# If you see "Asset too large" error:
# 1. The issue: node_modules is being included in deployment (119 MiB > 25 MiB limit)
# 2. The fix: Use Cloudflare Pages, not Wrangler
# 3. Remove any "npx wrangler deploy" commands

# Recommended Cloudflare Pages Settings:
# - Framework preset: None
# - Build command: (leave empty)
# - Build output directory: . (or /)
# - Root directory: / (default)

# DO NOT set deploy command in Cloudflare Pages settings!
