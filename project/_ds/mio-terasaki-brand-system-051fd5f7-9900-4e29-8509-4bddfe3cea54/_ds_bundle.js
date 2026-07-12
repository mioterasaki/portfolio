/* @ds-bundle: {"format":4,"namespace":"MioTerasakiBrandSystem_051fd5","components":[{"name":"Avatar","sourcePath":"components/content/Avatar.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/Avatar.jsx":"e3c9707e47eb","components/content/Badge.jsx":"e0a95075fa7e","components/content/Card.jsx":"c99da6543f51","components/content/Stat.jsx":"d1b85d37ebbe","components/content/Testimonial.jsx":"55e0075c3984","components/core/Icon.jsx":"ef38c8d2008f","components/forms/Button.jsx":"b573bd7567f8","components/forms/IconButton.jsx":"3ccac11b14a4","components/forms/Input.jsx":"fb7791df57dd","components/forms/Textarea.jsx":"06efd71d96a6","components/navigation/NavBar.jsx":"29793124543f","ui_kits/website/About.jsx":"3facf7c85e25","ui_kits/website/Contact.jsx":"b98ed04bdc8b","ui_kits/website/Hero.jsx":"644e98c7108c","ui_kits/website/Testimonials.jsx":"e528d00fd524","ui_kits/website/Work.jsx":"d3c66289d8ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MioTerasakiBrandSystem_051fd5 = window.MioTerasakiBrandSystem_051fd5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 36,
  md: 48,
  lg: 72,
  xl: 112
};

/**
 * Avatar — initials or image, warm gradient fallback.
 */
function Avatar({
  name = 'Mio Terasaki',
  src,
  size = 'md',
  ring = false,
  style,
  ...rest
}) {
  const dim = typeof size === 'number' ? size : sizes[size] || sizes.md;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: dim,
      height: dim,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--surface-sunken)' : 'linear-gradient(150deg, var(--gold-500), var(--terracotta-500))',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: dim * 0.4,
      lineHeight: 1,
      overflow: 'hidden',
      flex: '0 0 auto',
      boxShadow: ring ? '0 0 0 3px var(--paper), 0 0 0 5px var(--brand)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm surface container. Elevation via subtle shadow or hairline border.
 */
function Card({
  children,
  variant = 'raised',
  interactive = false,
  padding,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = variant === 'sunken' ? {
    background: 'var(--surface-sunken)',
    border: '1.5px solid transparent',
    boxShadow: 'none'
  } : variant === 'outline' ? {
    background: 'var(--surface-card)',
    border: '1.5px solid var(--border)',
    boxShadow: 'none'
  } : variant === 'dark' ? {
    background: 'var(--dark-surface)',
    border: '1.5px solid transparent',
    boxShadow: 'var(--shadow-md)',
    color: 'var(--dark-text)'
  } : {
    background: 'var(--surface-card)',
    border: '1.5px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  };
  const hov = interactive && hover ? {
    boxShadow: 'var(--shadow-lg)',
    transform: 'translateY(-3px)'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      onMouseLeave && onMouseLeave(e);
    },
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: padding != null ? padding : 'var(--pad-card)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...base,
      ...hov,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/* Brand / social glyphs that current Lucide no longer ships in its core set.
   Rendered inline so they never depend on the CDN build. */
const BRAND_ICONS = {
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z|M2 9h4v12H2z|circle:4,4,2'
};
function renderBrand(name, size, strokeWidth, color, style, className, rest) {
  const spec = BRAND_ICONS[name];
  const parts = spec.split('|');
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color || 'currentColor',
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'inline-flex',
      flex: '0 0 auto',
      ...style
    }
  }, rest), parts.map((p, i) => {
    if (p.startsWith('circle:')) {
      const [cx, cy, r] = p.slice(7).split(',');
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r
      });
    }
    if (p.startsWith('M2 9h')) return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: "2",
      y: "9",
      width: "4",
      height: "12"
    });
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p
    });
  }));
}

/**
 * Icon — thin wrapper over Lucide (loaded from CDN as window.lucide).
 * Renders a <i data-lucide> placeholder that Lucide swaps for an inline
 * <svg> on mount. Brand glyphs (e.g. linkedin) render inline directly.
 * Inherits color via currentColor and sizes via `size`.
 */
function Icon({
  name = 'arrow-right',
  size = 20,
  strokeWidth = 2,
  color,
  style,
  className,
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      try {
        window.lucide.createIcons({
          nameAttr: 'data-lucide',
          icons: window.lucide.icons,
          attrs: {}
        });
      } catch (e) {/* lucide not ready */}
    }
  }, [name]);
  if (BRAND_ICONS[name]) {
    return renderBrand(name, size, strokeWidth, color, style, className, rest);
  }
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color: color || 'currentColor',
      strokeWidth,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  brand: {
    bg: 'var(--brand-soft)',
    fg: 'var(--terracotta-800)'
  },
  accent: {
    bg: 'var(--accent-soft)',
    fg: 'var(--gold-700)'
  },
  sage: {
    bg: 'var(--anchor-soft)',
    fg: 'var(--sage-700)'
  },
  neutral: {
    bg: 'var(--surface-sunken)',
    fg: 'var(--text-body)'
  },
  success: {
    bg: 'var(--success-50)',
    fg: 'var(--success-500)'
  },
  warning: {
    bg: 'var(--warning-50)',
    fg: 'var(--warning-500)'
  },
  danger: {
    bg: 'var(--danger-50)',
    fg: 'var(--danger-500)'
  }
};

/**
 * Badge — small pill for tags, statuses, skills.
 */
function Badge({
  children,
  tone = 'neutral',
  icon,
  solid = false,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: '0.02em',
      padding: '5px 11px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a large metric with label; the brand's signature "proof" element.
 */
function Stat({
  value,
  label,
  icon,
  accent = 'sage',
  align = 'left',
  style,
  ...rest
}) {
  const color = accent === 'brand' ? 'var(--brand)' : accent === 'gold' ? 'var(--gold-700)' : accent === 'ink' ? 'var(--text-strong)' : 'var(--anchor)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color,
      marginBottom: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-none)',
      color,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      letterSpacing: '0.01em',
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial — quote card with attribution. Core to the brand's social proof.
 */
function Testimonial({
  quote,
  name,
  title,
  avatarSrc,
  variant = 'card',
  style,
  ...rest
}) {
  const dark = variant === 'dark';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: dark ? 'var(--dark-surface)' : 'var(--surface-card)',
      border: dark ? '1.5px solid transparent' : '1.5px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: dark ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--gold-500)' : 'var(--brand)',
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 30
  })), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-snug)',
      color: dark ? 'var(--dark-text)' : 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, quote), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatarSrc,
    size: "md"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-sm)',
      color: dark ? 'var(--dark-text)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: dark ? 'var(--dark-muted)' : 'var(--text-muted)'
    }
  }, title))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '9px 16px',
    fontSize: 'var(--text-sm)',
    gap: 6,
    icon: 16
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--text-base)',
    gap: 8,
    icon: 18
  },
  lg: {
    padding: '15px 30px',
    fontSize: 'var(--text-md)',
    gap: 10,
    icon: 20
  }
};
function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--anchor)',
        color: '#fff',
        border: '1.5px solid var(--anchor)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--anchor)',
        border: '1.5px solid var(--border-strong)'
      };
    case 'subtle':
      return {
        background: 'var(--surface-sunken)',
        color: 'var(--text-strong)',
        border: '1.5px solid transparent'
      };
    case 'primary':
    default:
      return {
        background: 'var(--brand)',
        color: 'var(--brand-contrast)',
        border: '1.5px solid var(--brand)'
      };
  }
}

/**
 * Button — primary CTA control. Pill shape, warm palette.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variantStyle(variant);
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--brand-hover)',
    borderColor: 'var(--brand-hover)'
  } : variant === 'secondary' ? {
    background: 'var(--anchor-hover)',
    borderColor: 'var(--anchor-hover)'
  } : variant === 'ghost' ? {
    borderColor: 'var(--anchor)',
    color: 'var(--anchor-hover)'
  } : {
    background: 'var(--surface-alt)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter && onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      onMouseLeave && onMouseLeave(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: s.fontSize,
      lineHeight: 1,
      padding: s.padding,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      whiteSpace: 'nowrap',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      transform: !disabled && hover ? 'translateY(-1px)' : 'none',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 34,
  md: 42,
  lg: 50
};
const iconSizes = {
  sm: 16,
  md: 18,
  lg: 22
};

/**
 * IconButton — square/circular button with a single Lucide icon, no label.
 */
function IconButton({
  icon = 'arrow-right',
  variant = 'ghost',
  size = 'md',
  round = true,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = sizes[size] || sizes.md;
  const base = variant === 'primary' ? {
    background: 'var(--brand)',
    color: '#fff',
    border: '1.5px solid var(--brand)'
  } : variant === 'solid' ? {
    background: 'var(--anchor)',
    color: '#fff',
    border: '1.5px solid var(--anchor)'
  } : variant === 'subtle' ? {
    background: 'var(--surface-sunken)',
    color: 'var(--text-strong)',
    border: '1.5px solid transparent'
  } : {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1.5px solid var(--border-strong)'
  };
  const hov = !disabled && hover ? variant === 'primary' ? {
    background: 'var(--brand-hover)',
    borderColor: 'var(--brand-hover)'
  } : variant === 'solid' ? {
    background: 'var(--anchor-hover)',
    borderColor: 'var(--anchor-hover)'
  } : variant === 'subtle' ? {
    background: 'var(--surface-alt)'
  } : {
    borderColor: 'var(--anchor)',
    color: 'var(--anchor)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label || icon,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...base,
      ...hov,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSizes[size] || iconSizes.md
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled text field with warm styling and focus ring.
 */
function Input({
  label,
  hint,
  error,
  id,
  icon,
  type = 'text',
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--brand)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field matching Input styling.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  value,
  onChange,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--brand)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--leading-normal)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — brand wordmark + links + CTA. Sticky, warm paper surface.
 */
function NavBar({
  brand = 'Mio Terasaki',
  links = [{
    label: 'Work',
    href: '#work'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Testimonials',
    href: '#testimonials'
  }],
  ctaLabel = 'Contact',
  ctaHref = '#contact',
  active,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      background: 'rgba(255,251,245,0.82)',
      backdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)',
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: active === l.label ? 'var(--brand)' : 'var(--text-body)',
      textDecoration: 'none',
      transition: 'color var(--dur-fast) var(--ease-standard)'
    }
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => {
      if (ctaHref) window.location.hash = ctaHref;
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
/* About + Skills — prose, real proof stats, and a skills/services grid. */
const {
  Card,
  Badge,
  Stat,
  Icon
} = window.MioTerasakiBrandSystem_051fd5;
const services = [{
  icon: 'shield-check',
  title: 'Regulated-Industry Operations',
  body: 'Frontline experience with KYC checks, payment/fraud escalations, and responsible-gambling workflows inside an AML/CTF-regulated operator.'
}, {
  icon: 'workflow',
  title: 'Process Design & Delivery',
  body: 'Building workflows, playbooks, and reporting from zero — coordinating across teams and vendors to ship outcomes.'
}, {
  icon: 'message-circle',
  title: 'Customer Experience & Retention',
  body: 'Onboarding, check-ins, renewals, and Voice-of-Customer insight across high-volume B2B and B2C books.'
}, {
  icon: 'languages',
  title: 'Bilingual JP / EN Go-to-Market',
  body: 'Native Japanese and deep market fluency — opening and localising the Japan motion for teams in APAC.'
}];
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '14px 0 20px',
      lineHeight: 1.1
    }
  }, "A bilingual bridge between Japan and APAC \u2014 with an operator's eye for detail."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: '0 0 16px'
    }
  }, "I began my sales career at Fuji Xerox in Southern Japan and have spent 10+ years in high-velocity, high-volume commercial environments across Japan and Australia \u2014 from enterprise sales to frontline customer operations in regulated iGaming."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "My approach is calm and human, but I run on evidence: QA scores, resolution times, and honest conversations about value. I'm now advancing into delivery/project management and financial-crime (AML/CTF/KYC) operations, with certification in progress."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "10+ yrs",
    label: "Client-facing, Japan & Australia",
    accent: "sage"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "95%+",
    label: "QA score at Easygo (Stake.com)",
    accent: "brand"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Top 5%",
    label: "Salesperson at AmazingTalker",
    accent: "gold"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    variant: "raised",
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      display: 'inline-flex',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)',
      margin: '0 0 8px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      margin: 0
    }
  }, s.body)))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Contact — split: pitch + working form. Footer with wordmark & socials. */
const {
  Input,
  Textarea,
  Button,
  IconButton,
  Icon
} = window.MioTerasakiBrandSystem_051fd5;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      margin: '14px 0 20px',
      lineHeight: 1.05
    }
  }, "Let's talk about your customers."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '42ch'
    }
  }, "Open to delivery / project management and AML/KYC operations roles across APAC. Drop a note and I'll reply within a day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:mioterasaki@gmail.com",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 20
  })), "mioterasaki@gmail.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://linkedin.com/in/mioterasaki",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 20
  })), "linkedin.com/in/mioterasaki"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-strong)',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20
  })), "Melbourne, VIC \xB7 Remote-friendly")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    variant: "ghost",
    label: "LinkedIn"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    variant: "ghost",
    label: "Email"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "calendar",
    variant: "ghost",
    label: "Book a call"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      border: '1.5px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success-500)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 32
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0
    }
  }, "Thanks \u2014 message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)'
    }
  }, "I'll be in touch within a day."), /*#__PURE__*/React.createElement(Button, {
    variant: "subtle",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 4,
    placeholder: "Tell me about your team and what you're solving for\u2026",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    type: "submit",
    fullWidth: true
  }, "Send message")))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 80,
      paddingTop: 28,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Mio Terasaki"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 \xB7 Customer Experience \xB7 Operations \xB7 Bilingual JP / EN")));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Hero section — asymmetric: text left, portrait + floating stat right. */
const {
  Button,
  Stat,
  Badge
} = window.MioTerasakiBrandSystem_051fd5;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '72px 40px 40px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--brand)'
    }
  }, "Customer Experience \xB7 Operations \xB7 Bilingual JP / EN"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-6xl)',
      margin: '18px 0 24px',
      lineHeight: 1.02
    }
  }, "Calm operations for high-volume, regulated teams."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '48ch',
      margin: 0
    }
  }, "I'm a bilingual customer-experience and operations professional with 10+ years across Japan and Australia \u2014 most recently 2.5 years inside a regulated iGaming operator. I build the workflows, playbooks, and relationships that keep customers happy and compliance tight."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: "arrow-right",
    onClick: () => {
      window.location.hash = '#contact';
    }
  }, "Let's talk"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      window.location.hash = '#work';
    }
  }, "View experience")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    icon: "map-pin"
  }, "Melbourne, VIC \xB7 Remote"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    icon: "languages"
  }, "Native Japanese / Fluent English"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    solid: true
  }, "Open to delivery/PM & AML/KYC roles"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: 'linear-gradient(150deg, var(--gold-500), var(--terracotta-500))',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 28,
      left: 34,
      fontFamily: 'var(--font-display)',
      fontSize: 150,
      lineHeight: 1,
      color: '#fff',
      opacity: 0.24,
      fontWeight: 500
    }
  }, "MT"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 22,
      left: 26,
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,.85)',
      fontWeight: 500
    }
  }, "Drop a headshot here \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -22,
      right: -18,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      border: '1.5px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "95%+",
    label: "QA score at Easygo (Stake.com)",
    accent: "sage"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Testimonials — placeholder recommendations on the dark sage band.
   NOTE: these are illustrative placeholders. Replace with real LinkedIn
   recommendations / references before publishing. */
const {
  Testimonial
} = window.MioTerasakiBrandSystem_051fd5;
const quotes = [{
  quote: 'Mio brought calm and structure to a high-volume queue — and the payment-error workflow she built is still in use.',
  name: 'Team Lead',
  title: 'Easygo (Stake.com) · placeholder'
}, {
  quote: 'A true bilingual bridge. Mio opened conversations in the Japanese market we simply couldn\u2019t reach otherwise.',
  name: 'Founder',
  title: 'countfor.me · placeholder'
}, {
  quote: 'Consultative, patient, and trusted by enterprise buyers — exactly who you want in front of a client.',
  name: 'Sales Manager',
  title: 'Fuji Xerox · placeholder'
}];
function Testimonials() {
  return /*#__PURE__*/React.createElement("section", {
    id: "testimonials",
    style: {
      background: 'var(--dark-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--gold-500)'
    }
  }, "Testimonials"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '14px 0 8px',
      color: 'var(--dark-text)',
      maxWidth: '18ch'
    }
  }, "What colleagues say."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--dark-muted)',
      margin: '0 0 40px',
      fontSize: 'var(--text-sm)'
    }
  }, "Placeholder quotes \u2014 swap in real LinkedIn recommendations before publishing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, quotes.map(q => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: q.title,
    variant: "dark"
  }, q))))));
}
window.Testimonials = Testimonials;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
/* Work / Experience — expandable proof cards from the real résumé. */
const {
  Card,
  Badge,
  Button,
  Icon
} = window.MioTerasakiBrandSystem_051fd5;
const cases = [{
  company: 'Easygo (Stake.com)',
  role: 'Customer Service Representative · 2023–2026',
  tags: ['Regulated ops', 'CX'],
  headline: 'A payment-error workflow that cut resolution time 25%.',
  detail: 'Managed 100–400 daily customer touchpoints at a 95%+ QA score, partnering with Payments, Risk, KYC, Sportsbook, and CRM. Designed and rolled out a structured payment-error workflow, delivered 10+ Voice-of-Customer insights, and authored response playbooks that reduced handling times.',
  metric: '−25%',
  metricLabel: 'Ticket resolution time'
}, {
  company: 'countfor.me',
  role: 'Founding Sales, Marketing & Ops Lead · 2026–Present',
  tags: ['0→1', 'GTM'],
  headline: 'Built an early-stage startup\u2019s first commercial motion from zero.',
  detail: 'As the sole commercial hire, defined target segments across the Japanese and Melbourne markets, built the prospect list and outreach sequences, mapped the end-to-end customer journey, and ran marketing operations — coordinating sales, marketing, and ops directly with the founders.',
  metric: '0→1',
  metricLabel: 'Outbound sales motion'
}, {
  company: 'AmazingTalker',
  role: 'Teaching Mentor Manager · 2020–2021',
  tags: ['Retention', 'Coaching'],
  headline: 'Top 5% of salespeople — and coached others to retain their own books.',
  detail: 'Owned acquisition, retention, and renewals for a B2C book of student accounts while ranking in the top 5% of salespeople. Standardised evaluation criteria and onboarding so account-management practices scaled consistently across a cohort of teachers.',
  metric: 'Top 5%',
  metricLabel: 'Salesperson ranking'
}, {
  company: 'Fuji Xerox — Saga, Kyushu',
  role: 'Corporate Sales Representative · 2009–2010',
  tags: ['B2B sales', 'Public sector'],
  headline: 'Full B2B cycle across 40+ public-sector and SMB accounts.',
  detail: 'Sold DocuWorks document-management software to local government and SMBs across Southern Japan — prospecting through demo to close. Built relationships across major Japanese enterprises including Toyota, and learned the consultative selling and business etiquette still core to my work.',
  metric: '40+',
  metricLabel: 'Accounts owned'
}];
function CaseRow({
  c
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Card, {
    variant: "outline",
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '24px 28px',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, c.company), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      fontWeight: 500
    }
  }, c.role)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      margin: 0,
      lineHeight: 1.2
    }
  }, c.headline)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      color: 'var(--anchor)',
      lineHeight: 1
    }
  }, c.metric), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, c.metricLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'inline-flex',
      transform: open ? 'rotate(90deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? 240 : 0,
      opacity: open ? 1 : 0,
      overflow: 'hidden',
      transition: 'max-height var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 28px 26px',
      fontSize: 'var(--text-base)',
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '74ch'
    }
  }, c.detail)));
}
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Experience"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      margin: '14px 0 0'
    }
  }, "Selected roles")), /*#__PURE__*/React.createElement(Button, {
    variant: "subtle",
    iconRight: "arrow-up-right"
  }, "Full r\xE9sum\xE9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, cases.map(c => /*#__PURE__*/React.createElement(CaseRow, {
    key: c.company,
    c: c
  }))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
