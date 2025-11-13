# DNS Setup Guide for www.coinpft.com

## For www.coinpft.com (CNAME Record)

Add a CNAME record at your domain registrar:

```
Type: CNAME
Host/Name: www
Value/Target: coint-profit.onrender.com
TTL: 3600 (or Auto)
```

## For coinpft.com (Root Domain - ANAME/ALIAS or A Record)

### Option 1: ANAME or ALIAS Record (Recommended if supported)

If your DNS provider supports ANAME or ALIAS records:

```
Type: ANAME (or ALIAS)
Host/Name: @ (or leave blank for root domain)
Value/Target: coint-profit.onrender.com
TTL: 3600
```

### Option 2: A Record (If ANAME/ALIAS not supported)

If your DNS provider does not support ANAME or ALIAS records, use an A record:

```
Type: A
Host/Name: @ (or leave blank for root domain)
Value: 216.24.57.1
TTL: 3600
```

## Complete DNS Configuration

For full domain support (both www and root), add both:

1. **CNAME for www:**
   - Type: CNAME
   - Host: www
   - Value: coint-profit.onrender.com

2. **ANAME/ALIAS or A for root:**
   - Type: ANAME/ALIAS (preferred) or A
   - Host: @
   - Value: coint-profit.onrender.com (ANAME) or 216.24.57.1 (A record)

## Render Configuration

After setting up DNS:

1. Go to your Render dashboard: https://dashboard.render.com/
2. Select your `coin-profit` service
3. Go to Settings → Custom Domains
4. Add both domains:
   - `www.coinpft.com`
   - `coinpft.com` (if you set up the root domain)

## DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- Usually works within a few hours
- Check propagation: https://www.whatsmydns.net/

## SSL Certificate

- Render automatically provisions SSL certificates
- Takes a few minutes to a few hours after DNS is configured
- You'll see a green lock icon when ready

