/* @ds-bundle: {"format":3,"namespace":"ReclaimConstructionDesignSystem_813411","components":[{"name":"Badge","sourcePath":"components/badges/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"StarRating","sourcePath":"components/data-display/StarRating.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/badges/Badge.jsx":"981ae4795089","components/buttons/Button.jsx":"c3dd5c0ab8d8","components/data-display/Avatar.jsx":"9ddcb81cfcbb","components/data-display/StarRating.jsx":"acd2fe47ccaf","components/forms/Checkbox.jsx":"e657ec9c5f31","components/forms/Input.jsx":"07f3e48404d8","components/forms/Label.jsx":"1ccf61d4df45","components/forms/Radio.jsx":"20ad0651ebc3","components/forms/Select.jsx":"578029b74c0f","components/forms/Textarea.jsx":"1385ec263f4c","components/navigation/Tabs.jsx":"5996f187945c","components/surfaces/Card.jsx":"800414324618","ui_kits/website/Sections1.jsx":"afaf356f6330","ui_kits/website/Sections2.jsx":"716562f883d3","ui_kits/website/Sections3.jsx":"b412edde8c49","ui_kits/website/Sections4.jsx":"07319e1d6a9e","ui_kits/website/Sections5.jsx":"746eacdc5776","ui_kits/website/icons.js":"03be8422a013","ui_kits/website/lib.jsx":"0432c5cf8e92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReclaimConstructionDesignSystem_813411 = window.ReclaimConstructionDesignSystem_813411 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badges/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-badge {
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-small);
  line-height: 1;
  display: inline-flex;
  align-items: center;
  gap: .375rem;
  padding: .4375rem .75rem;
  border-radius: var(--radius-badge);
  border: 1px solid transparent;
  white-space: nowrap;
}
.rc-badge--neutral { background: var(--color-neutral-lightest); color: var(--color-neutral-darkest); }
.rc-badge--blue   { background: var(--color-jelly-bean-lightest); color: var(--color-jelly-bean-dark); }
.rc-badge--orange { background: var(--color-jaffa-lighter); color: var(--color-jaffa-dark); }
.rc-badge--green  { background: var(--color-mantis-lighter); color: var(--color-mantis-dark); }
.rc-badge--solid  { background: var(--color-jelly-bean); color: #fff; }
.rc-badge--outline { background: transparent; border-color: var(--scheme-border, var(--color-black-15)); color: var(--scheme-text, var(--color-neutral-darkest)); }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-badge-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-badge-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Small pill label for status, category, or project type.
 * Colour variants map to the three chromatic palettes.
 */
function Badge({
  variant = "neutral",
  className = "",
  children,
  ...props
}) {
  ensureStyles();
  const cls = ["rc-badge", `rc-badge--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badges/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Hover/focus/active states need real
   pseudo-classes, so we ship a scoped stylesheet rather than inline. */
const CSS = `
.rc-btn {
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-radius: var(--radius-button);
  border: 1px solid transparent;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color .2s ease, border-color .2s ease, color .2s ease, opacity .2s ease;
  text-decoration: none;
  line-height: 1.2;
}
.rc-btn:focus-visible { outline: 2px solid var(--color-jelly-bean); outline-offset: 2px; }
.rc-btn:disabled { pointer-events: none; opacity: .5; }

/* sizes */
.rc-btn--sm { font-size: var(--text-small); padding: .375rem 1rem; }
.rc-btn--default { font-size: var(--text-small); padding: .625rem 1.5rem; }
.rc-btn--lg { font-size: var(--text-medium); padding: .875rem 2rem; }

/* primary — slate blue */
.rc-btn--primary { background: var(--color-jelly-bean); border-color: var(--color-jelly-bean); color: #fff; }
.rc-btn--primary:hover { background: var(--color-jelly-bean-dark); border-color: var(--color-jelly-bean-dark); }

/* alternate — white fill for dark surfaces */
.rc-btn--alternate { background: #fff; border-color: #fff; color: var(--color-neutral-darkest); }
.rc-btn--alternate:hover { background: var(--color-neutral-lighter); border-color: var(--color-neutral-lighter); }

/* secondary — outline on light surface */
.rc-btn--secondary { background: transparent; border-color: var(--scheme-border, var(--color-black-15)); color: var(--scheme-text, var(--color-neutral-darkest)); }
.rc-btn--secondary:hover { background: var(--color-black-5); }

/* secondary-alt — outline on dark surface */
.rc-btn--secondary-alt { background: transparent; border-color: var(--color-white-20); color: #fff; }
.rc-btn--secondary-alt:hover { background: var(--color-white-10); }

/* link */
.rc-btn--link { background: transparent; border: none; padding: 0; gap: .5rem; color: var(--scheme-text, var(--color-neutral-darkest)); border-radius: 0; }
.rc-btn--link:hover { opacity: .7; }

/* ghost */
.rc-btn--ghost { background: transparent; border-color: transparent; color: var(--scheme-text, var(--color-neutral-darkest)); }
.rc-btn--ghost:hover { background: var(--color-neutral-darkest); color: #fff; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-button-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-button-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Reclaim primary action button. Pill-shaped, Inter medium.
 */
function Button({
  variant = "primary",
  size = "default",
  iconLeft,
  iconRight,
  as,
  className = "",
  children,
  ...props
}) {
  ensureStyles();
  const Comp = as || "button";
  const cls = ["rc-btn", `rc-btn--${size}`, `rc-btn--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: cls,
    "data-variant": variant
  }, props), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-avatar { display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; overflow: hidden; background: var(--color-neutral-lighter); color: var(--color-neutral-dark); font-family: var(--font-body); font-weight: var(--font-weight-medium); flex: none; }
.rc-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.rc-avatar--sm { width: 2rem; height: 2rem; font-size: var(--text-small); }
.rc-avatar--md { width: 3rem; height: 3rem; font-size: var(--text-regular); }
.rc-avatar--lg { width: 4rem; height: 4rem; font-size: var(--text-medium); }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-avatar-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-avatar-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Circular avatar — image `src`, or initials fallback. */
function Avatar({
  src,
  alt = "",
  name,
  size = "md",
  className = "",
  ...props
}) {
  ensureStyles();
  const initials = name ? name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase() : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["rc-avatar", `rc-avatar--${size}`, className].filter(Boolean).join(" ")
  }, props), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || name || ""
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/StarRating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Star = ({
  filled
}) => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.5l2.9 6.06 6.6.78-4.9 4.55 1.3 6.56L12 17.9l-5.9 3.05 1.3-6.56-4.9-4.55 6.6-.78L12 2.5z",
  fill: filled ? "currentColor" : "none",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinejoin: "round"
}));

/** Row of stars for testimonial / review ratings. */
function StarRating({
  value = 5,
  max = 5,
  size = 24,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["rc-stars", className].filter(Boolean).join(" "),
    style: {
      display: "inline-flex",
      gap: ".25rem",
      color: "var(--scheme-text, var(--color-neutral-darkest))",
      lineHeight: 0
    },
    role: "img",
    "aria-label": `${value} out of ${max} stars`
  }, props), Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size,
      height: size,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Star, {
    filled: i < value
  }))));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-check-row { display: inline-flex; align-items: center; gap: .5rem; font-family: var(--font-body); font-size: var(--text-regular); color: var(--scheme-text, var(--color-neutral-darkest)); cursor: pointer; }
.rc-check { position: relative; width: 1.125rem; height: 1.125rem; flex: none; }
.rc-check input { position: absolute; inset: 0; opacity: 0; margin: 0; cursor: pointer; }
.rc-check__box {
  width: 1.125rem; height: 1.125rem;
  border: 1px solid var(--scheme-border, var(--color-black-15));
  border-radius: var(--radius-checkbox);
  display: flex; align-items: center; justify-content: center;
  color: #fff; transition: background-color .15s ease, border-color .15s ease;
}
.rc-check__box svg { opacity: 0; }
.rc-check input:checked + .rc-check__box { background: var(--color-neutral-darkest); border-color: var(--color-neutral-darkest); }
.rc-check input:checked + .rc-check__box svg { opacity: 1; }
.rc-check input:focus-visible + .rc-check__box { outline: 2px solid var(--color-jelly-bean); outline-offset: 2px; }

/* radio */
.rc-radio__box { border-radius: 50%; }
.rc-radio input:checked + .rc-radio__box { background: #fff; border-color: var(--color-neutral-darkest); }
.rc-radio__dot { width: .5rem; height: .5rem; border-radius: 50%; background: var(--color-neutral-darkest); opacity: 0; transition: opacity .15s ease; }
.rc-radio input:checked + .rc-radio__box .rc-radio__dot { opacity: 1; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-check-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-check-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}
const CheckMark = () => /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2.5 6.2L4.8 8.5L9.5 3.5",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/** Square checkbox with label. Pass a `label` or wrap your own. */
function Checkbox({
  label,
  className = "",
  id,
  ...props
}) {
  ensureStyles();
  const box = /*#__PURE__*/React.createElement("span", {
    className: "rc-check"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: id
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "rc-check__box"
  }, /*#__PURE__*/React.createElement(CheckMark, null)));
  if (label == null) return box;
  return /*#__PURE__*/React.createElement("label", {
    className: ["rc-check-row", className].filter(Boolean).join(" "),
    htmlFor: id
  }, box, label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-field-label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--font-weight-medium);
  color: var(--scheme-text, var(--color-neutral-darkest));
  display: inline-block;
}
.rc-input {
  font-family: var(--font-body);
  font-size: var(--text-regular);
  width: 100%;
  min-height: 2.75rem;
  padding: .5rem 0;
  background: transparent;
  color: var(--scheme-text, var(--color-neutral-darkest));
  border: none;
  border-bottom: 1px solid var(--scheme-border, var(--color-black-15));
  transition: border-color .2s ease;
  outline: none;
}
.rc-input::placeholder { color: var(--color-neutral); }
.rc-input:focus { border-bottom-color: var(--color-jelly-bean); }
.rc-input:disabled { opacity: .5; cursor: not-allowed; }
.rc-input-wrap { position: relative; display: flex; align-items: center; width: 100%; }
.rc-input-wrap .rc-input--icon-l { padding-left: 1.75rem; }
.rc-input__icon { position: absolute; left: 0; display: flex; color: var(--color-neutral); }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-input-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-input-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Underline text input — the Reclaim form field style (no box,
 * just a 1px baseline that turns slate-blue on focus).
 */
function Input({
  icon,
  className = "",
  ...props
}) {
  ensureStyles();
  if (icon) {
    return /*#__PURE__*/React.createElement("span", {
      className: "rc-input-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rc-input__icon"
    }, icon), /*#__PURE__*/React.createElement("input", _extends({
      className: ["rc-input", "rc-input--icon-l", className].filter(Boolean).join(" ")
    }, props)));
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ["rc-input", className].filter(Boolean).join(" ")
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-label-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-label-styles";
  el.textContent = `
.rc-label { font-family: var(--font-body); font-size: var(--text-small); font-weight: var(--font-weight-medium); color: var(--scheme-text, var(--color-neutral-darkest)); display: inline-block; margin-bottom: .5rem; }
`;
  document.head.appendChild(el);
}

/** Form field label — Inter medium, small. */
function Label({
  className = "",
  children,
  ...props
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", _extends({
    className: ["rc-label", className].filter(Boolean).join(" ")
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Reuses the stylesheet injected by Checkbox.jsx (rc-check-styles). */
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-radio-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-radio-styles";
  el.textContent = `
.rc-check-row { display: inline-flex; align-items: center; gap: .5rem; font-family: var(--font-body); font-size: var(--text-regular); color: var(--scheme-text, var(--color-neutral-darkest)); cursor: pointer; }
.rc-check { position: relative; width: 1.125rem; height: 1.125rem; flex: none; }
.rc-check input { position: absolute; inset: 0; opacity: 0; margin: 0; cursor: pointer; }
.rc-radio__box { width: 1.125rem; height: 1.125rem; border: 1px solid var(--scheme-border, var(--color-black-15)); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: border-color .15s ease; }
.rc-radio input:checked + .rc-radio__box { border-color: var(--color-neutral-darkest); }
.rc-radio__dot { width: .5rem; height: .5rem; border-radius: 50%; background: var(--color-neutral-darkest); opacity: 0; transition: opacity .15s ease; }
.rc-radio input:checked + .rc-radio__box .rc-radio__dot { opacity: 1; }
.rc-radio input:focus-visible + .rc-radio__box { outline: 2px solid var(--color-jelly-bean); outline-offset: 2px; }
`;
  document.head.appendChild(el);
}

/** Single radio button with label. Group via shared `name`. */
function Radio({
  label,
  className = "",
  id,
  ...props
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("label", {
    className: ["rc-check-row", className].filter(Boolean).join(" "),
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-check rc-radio"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: id
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "rc-radio__box"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rc-radio__dot"
  }))), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-select-wrap { position: relative; display: flex; width: 100%; align-items: center; }
.rc-select {
  font-family: var(--font-body);
  font-size: var(--text-regular);
  width: 100%;
  min-height: 2.75rem;
  padding: .5rem 1.75rem .5rem 0;
  background: transparent;
  color: var(--scheme-text, var(--color-neutral-darkest));
  border: none;
  border-bottom: 1px solid var(--scheme-border, var(--color-black-15));
  border-radius: 0;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: border-color .2s ease;
}
.rc-select:focus { border-bottom-color: var(--color-jelly-bean); }
.rc-select:invalid { color: var(--color-neutral); }
.rc-select__chev { position: absolute; right: 0; pointer-events: none; color: var(--scheme-text, var(--color-neutral-darkest)); display: flex; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-select-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-select-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Native underline select. Pass `options` (array of {value,label} or
 * strings) or your own `<option>` children. `placeholder` renders a
 * disabled first option.
 */
function Select({
  options,
  placeholder,
  className = "",
  children,
  ...props
}) {
  ensureStyles();
  const opts = (options || []).map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("span", {
    className: "rc-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ["rc-select", className].filter(Boolean).join(" "),
    defaultValue: ""
  }, props), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("span", {
    className: "rc-select__chev"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 6l4.5 4.5L12.5 6",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-textarea {
  font-family: var(--font-body);
  font-size: var(--text-regular);
  width: 100%;
  min-height: 11.25rem;
  padding: .625rem 0;
  background: transparent;
  color: var(--scheme-text, var(--color-neutral-darkest));
  border: none;
  border-bottom: 1px solid var(--scheme-border, var(--color-black-15));
  transition: border-color .2s ease;
  outline: none;
  resize: vertical;
}
.rc-textarea::placeholder { color: var(--color-neutral); }
.rc-textarea:focus { border-bottom-color: var(--color-jelly-bean); }
.rc-textarea:disabled { opacity: .5; cursor: not-allowed; }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-textarea-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-textarea-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/** Multi-line underline text field matching {@link Input}. */
function Textarea({
  className = "",
  ...props
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["rc-textarea", className].filter(Boolean).join(" ")
  }, props));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.rc-tabs__list { display: flex; gap: 0; flex-wrap: wrap; }
.rc-tabs__list--pill { gap: .75rem; }
.rc-tab {
  font-family: var(--font-body);
  font-size: var(--text-regular);
  color: var(--scheme-text, var(--color-neutral-darkest));
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .2s ease;
}
/* pill */
.rc-tabs__list--pill .rc-tab { border-radius: var(--radius-button); border-color: var(--scheme-border, var(--color-black-15)); padding: .625rem 1.5rem; }
.rc-tabs__list--pill .rc-tab[data-active="true"] { background: var(--scheme-foreground, var(--color-neutral-lightest)); }
.rc-tabs__list--pill .rc-tab[data-active="false"] { border-color: transparent; }
/* underline */
.rc-tabs__list--underline { gap: 1.5rem; border-bottom: 1px solid var(--scheme-border, var(--color-black-15)); }
.rc-tabs__list--underline .rc-tab { padding: .5rem 0; border-bottom: 2px solid transparent; margin-bottom: -1px; }
.rc-tabs__list--underline .rc-tab[data-active="true"] { border-bottom-color: var(--scheme-text, var(--color-neutral-darkest)); }
.rc-tabs__list--underline .rc-tab[data-active="false"] { opacity: .5; }
.rc-tabs__panel { margin-top: 1.5rem; animation: rc-tab-fade .4s ease; }
@keyframes rc-tab-fade { from { opacity: 0; } to { opacity: 1; } }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-tabs-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-tabs-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Tab switcher. `items` is an array of {value,label,content}.
 * `variant` chooses pill or underline tab styling.
 */
function Tabs({
  items = [],
  defaultValue,
  variant = "pill",
  className = ""
}) {
  ensureStyles();
  const [active, setActive] = React.useState(defaultValue || items[0] && items[0].value);
  const current = items.find(i => i.value === active);
  return /*#__PURE__*/React.createElement("div", {
    className: ["rc-tabs", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: `rc-tabs__list rc-tabs__list--${variant}`,
    role: "tablist"
  }, items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i.value,
    role: "tab",
    className: "rc-tab",
    "data-active": String(i.value === active),
    "aria-selected": i.value === active,
    onClick: () => setActive(i.value)
  }, i.label))), current && current.content != null && /*#__PURE__*/React.createElement("div", {
    className: "rc-tabs__panel",
    role: "tabpanel",
    key: active
  }, current.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.rc-card {
  border-radius: var(--radius-card);
  overflow: hidden;
  border: 1px solid var(--scheme-border, var(--color-black-15));
  background: var(--scheme-foreground, var(--color-neutral-lightest));
  color: var(--scheme-text, var(--color-neutral-darkest));
}
.rc-card--transparent {
  background: transparent;
  border-color: var(--color-white-20);
  color: #fff;
}
.rc-card--bg {
  position: relative;
  border: none;
  background: var(--color-jelly-bean-darkest);
}
.rc-card__body { padding: var(--space-6); }
`;
function ensureStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("rc-card-styles")) return;
  const el = document.createElement("style");
  el.id = "rc-card-styles";
  el.textContent = CSS;
  document.head.appendChild(el);
}

/**
 * Surface container. `default` uses the active scheme's foreground +
 * border; `transparent` is an outline-only card for dark imagery;
 * `background` is a bare relative shell for full-bleed image cards.
 */
function Card({
  variant = "default",
  padded = false,
  className = "",
  children,
  ...props
}) {
  ensureStyles();
  const cls = ["rc-card", variant === "transparent" && "rc-card--transparent", variant === "background" && "rc-card--bg", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), padded ? /*#__PURE__*/React.createElement("div", {
    className: "rc-card__body"
  }, children) : children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections1.jsx
try { (() => {
/* Navbar, Hero, "Why we're different" */
(function () {
  const {
    Button,
    Card,
    Badge
  } = window.ReclaimConstructionDesignSystem_813411;
  const {
    Icon,
    Logo
  } = window;
  const NAV = [{
    label: "Our process",
    id: "process"
  }, {
    label: "Investors",
    id: "investors"
  }, {
    label: "Homeowners",
    id: "homeowners"
  }, {
    label: "Aging in place",
    id: "aging-in-place"
  }];
  function goToSection(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
  function Navbar({
    onContact
  }) {
    return /*#__PURE__*/React.createElement("header", {
      className: "scheme-1",
      style: {
        position: "sticky",
        top: 0,
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 76,
        paddingInline: "var(--section-pad-x)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      "aria-label": "Reclaim Construction home"
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "dark",
      height: 62
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: 4
      },
      className: "rc-nav-links"
    }, NAV.map(l => /*#__PURE__*/React.createElement("a", {
      key: l.id,
      href: "#" + l.id,
      onClick: e => goToSection(e, l.id),
      style: {
        padding: "8px 16px",
        fontSize: "var(--text-small)"
      }
    }, l.label))), /*#__PURE__*/React.createElement(Button, {
      variant: "alternate",
      size: "sm",
      onClick: onContact
    }, "Contact")));
  }
  function Hero({
    onSchedule
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-1",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bgcard",
      style: {
        minHeight: "40rem",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: "../../assets/images/home-how-it-works-section-0.jpg",
      alt: "Reclaim team at a job site"
    }), /*#__PURE__*/React.createElement("div", {
      className: "scrim"
    })), /*#__PURE__*/React.createElement("div", {
      className: "content center",
      style: {
        padding: "4rem 2rem",
        maxWidth: "var(--container-lg)",
        marginInline: "auto"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "h1",
      style: {
        color: "#fff"
      }
    }, "Your home deserves better than shortcuts"), /*#__PURE__*/React.createElement("p", {
      className: "lede",
      style: {
        color: "rgba(255,255,255,.9)",
        marginTop: "1.5rem",
        maxWidth: "34rem",
        marginInline: "auto"
      }
    }, "We handle investor rehabs, home renovations, and aging-in-place modifications with the care of a neighbor."), /*#__PURE__*/React.createElement("div", {
      className: "btn-row",
      style: {
        justifyContent: "center",
        marginTop: "2rem"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "alternate",
      onClick: onSchedule
    }, "Schedule a consultation"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary-alt"
    }, "View our work")), /*#__PURE__*/React.createElement("div", {
      className: "rc-hero-trust"
    }, [{
      icon: "shieldCheck",
      strong: "Licensed & insured",
      rest: "in Missouri"
    }, {
      icon: "users",
      strong: "Local crews",
      rest: "no rotating subs"
    }, {
      icon: "badgeCheck",
      strong: "Workmanship warranty",
      rest: "on every project"
    }].map(t => /*#__PURE__*/React.createElement("div", {
      key: t.strong,
      className: "rc-hero-trust__item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "rc-hero-trust__ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("span", {
      className: "body"
    }, /*#__PURE__*/React.createElement("strong", null, t.strong), " ", t.rest))))))));
  }
  function TrustCard({
    img,
    eyebrow,
    title,
    link,
    wide
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bgcard",
      style: {
        minHeight: wide ? "22rem" : "20rem",
        gridColumn: wide ? "1 / -1" : "auto",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: img,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: "scrim"
    })), /*#__PURE__*/React.createElement("div", {
      className: "content",
      style: {
        padding: wide ? "3rem" : "2rem"
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Badge, {
      variant: "outline",
      style: {
        color: "#fff",
        borderColor: "var(--color-white-20)",
        marginBottom: "1rem"
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h3", {
      className: wide ? "h3" : "h5",
      style: {
        color: "#fff",
        maxWidth: wide ? "32rem" : "none"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "chevronRight",
        size: 18
      }),
      style: {
        color: "#fff"
      }
    }, link))));
  }
  function WhyDifferent() {
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-20"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, "Trust"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Why we're different"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "We don't disappear after the contract is signed. You get straight answers, regular updates, and a team that treats your home like their own.")), /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2"
    }, /*#__PURE__*/React.createElement(TrustCard, {
      wide: true,
      img: "../../assets/images/home-features-list-section-0.jpg",
      eyebrow: "Communication",
      title: "Weekly updates. Clear timelines. No surprises. You always know what's happening and why.",
      link: "Budget transparency"
    }), /*#__PURE__*/React.createElement(TrustCard, {
      img: "../../assets/images/home-features-list-section-1.jpg",
      title: "Fixed costs. Detailed breakdowns. Change orders explained upfront.",
      link: "Quality craftsmanship"
    }), /*#__PURE__*/React.createElement(TrustCard, {
      img: "../../assets/images/home-how-it-works-section-4.jpg",
      title: "Quality materials and skilled trades. The details matter. They always have.",
      link: "Local expertise"
    }))));
  }
  window.Navbar = Navbar;
  window.Hero = Hero;
  window.WhyDifferent = WhyDifferent;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections2.jsx
try { (() => {
/* Investors, Homeowners, Aging-in-place — service sections with tabs */
(function () {
  const {
    Button: SButton,
    Card: SCard,
    Tabs: STabs
  } = window.ReclaimConstructionDesignSystem_813411;
  const {
    Icon: SIcon
  } = window;
  const {
    useState: useS2
  } = React;
  function ServiceIntro({
    eyebrow,
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-20"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, body));
  }

  /* Draggable before/after reveal slider. AFTER is the base; BEFORE is clipped from the left. */
  function BeforeAfter({
    before,
    after,
    alt
  }) {
    const [pos, setPos] = useS2(50);
    const wrap = React.useRef(null);
    const drag = React.useRef(false);
    const moveTo = clientX => {
      const el = wrap.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (clientX - r.left) / r.width * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const onDown = e => {
      drag.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      moveTo(e.clientX);
    };
    const onMove = e => {
      if (drag.current) moveTo(e.clientX);
    };
    const onUp = () => {
      drag.current = false;
    };
    const onKey = e => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPos(p => Math.max(0, p - 4));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPos(p => Math.min(100, p + 4));
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: wrap,
      onPointerDown: onDown,
      onPointerMove: onMove,
      onPointerUp: onUp,
      onPointerCancel: onUp,
      style: {
        position: "relative",
        touchAction: "none",
        userSelect: "none",
        cursor: "ew-resize"
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover aspect-square",
      src: after,
      alt: alt,
      draggable: false,
      style: {
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        clipPath: `inset(0 ${100 - pos}% 0 0)`
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: before,
      alt: "",
      draggable: false,
      style: {
        position: "absolute",
        inset: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: `${pos}%`,
        transform: "translateX(-50%)",
        width: 2,
        background: "rgba(255,255,255,.92)",
        boxShadow: "0 0 0 1px rgba(0,0,0,.18)",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Drag to compare before and after",
      onKeyDown: onKey,
      style: {
        position: "absolute",
        top: "50%",
        left: `${pos}%`,
        transform: "translate(-50%,-50%)",
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,.95)",
        background: "rgba(17,17,17,.5)",
        color: "#fff",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        cursor: "ew-resize",
        boxShadow: "0 2px 12px rgba(0,0,0,.4)",
        touchAction: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 16,
        lineHeight: 1,
        fontWeight: 700
      }
    }, "\u2039"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        fontSize: 16,
        lineHeight: 1,
        fontWeight: 700
      }
    }, "\u203A")));
  }

  /* Vertical tab list with a swapping image — used by Investors & Aging-in-place. */
  function SideTabs({
    tabs
  }) {
    const [active, setActive] = useS2(0);
    return /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2 items-center gap-20"
    }, /*#__PURE__*/React.createElement("div", null, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setActive(i),
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        background: "transparent",
        border: "none",
        borderBottom: "1px solid var(--scheme-border)",
        padding: "1.5rem 0",
        opacity: active === i ? 1 : 0.4,
        transition: "opacity .2s ease"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: "h4"
    }, t.title), active === i && /*#__PURE__*/React.createElement("p", {
      className: "body muted",
      style: {
        marginTop: ".75rem"
      }
    }, t.body)))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-img",
      key: active,
      style: {
        animation: "rc-tab-fade .4s ease"
      }
    }, tabs[active].before ? /*#__PURE__*/React.createElement(BeforeAfter, {
      before: tabs[active].before,
      after: tabs[active].after,
      alt: tabs[active].title
    }) : /*#__PURE__*/React.createElement("img", {
      className: "cover aspect-square",
      src: tabs[active].img,
      alt: tabs[active].title
    })));
  }
  function Investors() {
    const tabs = [{
      title: "BRRRR projects",
      body: "We manage the full rehab from acquisition to rental. Scope, budget, timeline, and draw coordination handled by someone who understands your exit strategy.",
      before: "../../assets/images/investor-brrrr-before.jpg",
      after: "../../assets/images/investor-brrrr-after.jpg"
    }, {
      title: "Fix-and-flips",
      body: "Speed and quality matter equally. We deliver market-ready homes on schedule without cutting corners that hurt your sale price.",
      before: "../../assets/images/investor-flip-before.jpg",
      after: "../../assets/images/investor-flip-after.jpg"
    }, {
      title: "Rental rehabs",
      body: "Durable, tenant-friendly finishes that hold up and keep maintenance costs down. That's how we build rental income.",
      before: "../../assets/images/investor-rental-before.jpg",
      after: "../../assets/images/investor-rental-after.jpg"
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2",
      id: "investors"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(ServiceIntro, {
      eyebrow: "Investors",
      title: "Rental rehabs that maximize returns",
      body: "BRRRR projects, fix-and-flips, and rental rehabs need precision. We handle scope development, draw coordination, and timeline management so you can focus on the numbers."
    }), /*#__PURE__*/React.createElement(SideTabs, {
      tabs: tabs
    })));
  }
  function Homeowners() {
    const items = [{
      value: "k",
      label: "Kitchens",
      content: /*#__PURE__*/React.createElement(HomeownerCard, {
        eyebrow: "Kitchen",
        title: "Where life happens",
        body: "A well-designed kitchen brings the family together. We build kitchens that function beautifully and last for decades.",
        img: "../../assets/images/home-kitchen.jpg"
      })
    }, {
      value: "b",
      label: "Bathrooms",
      content: /*#__PURE__*/React.createElement(HomeownerCard, {
        eyebrow: "Bathroom",
        title: "A daily retreat",
        body: "Better storage, better light, and finishes that hold up to real life. Bathrooms you actually enjoy using.",
        img: "../../assets/images/home-bathroom.jpg"
      })
    }, {
      value: "s",
      label: "Basements",
      content: /*#__PURE__*/React.createElement(HomeownerCard, {
        eyebrow: "Basement",
        title: "Room to grow",
        body: "Turn unused square footage into a real part of your home \u2014 dry, warm, and finished right.",
        img: "../../assets/images/home-basement.jpg"
      })
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-3",
      id: "homeowners"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(ServiceIntro, {
      eyebrow: "Homeowners",
      title: "Spaces that transform how you live",
      body: "A kitchen that works. A bathroom that feels like a retreat. A basement that becomes part of your home. We build spaces that improve your daily life."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(STabs, {
      variant: "pill",
      items: items
    })))));
  }
  function HomeownerCard({
    eyebrow,
    title,
    body,
    img
  }) {
    return /*#__PURE__*/React.createElement(SCard, null, /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2 items-center",
      style: {
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "3rem"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, eyebrow), /*#__PURE__*/React.createElement("h3", {
      className: "h3 mb-12",
      style: {
        marginBottom: "1rem"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "body muted"
    }, body), /*#__PURE__*/React.createElement("div", {
      className: "btn-row mt-8"
    }, /*#__PURE__*/React.createElement(SButton, {
      variant: "secondary"
    }, "Schedule"), /*#__PURE__*/React.createElement(SButton, {
      variant: "link",
      iconRight: /*#__PURE__*/React.createElement(SIcon, {
        name: "chevronRight",
        size: 18
      })
    }, "View work"))), /*#__PURE__*/React.createElement("div", {
      className: "aspect-square"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: img,
      alt: title
    }))));
  }
  function AgingInPlace() {
    const tabs = [{
      title: "Walk-in showers",
      body: "Curbless, slip-resistant showers designed for safe, independent bathing for years to come.",
      img: "../../assets/images/aging-walk-in-shower.jpg"
    }, {
      title: "Grab bars & safety",
      body: "Discreet, sturdy support placed exactly where it's needed — bathrooms, hallways, and entries.",
      img: "../../assets/images/aging-grab-bars.jpg"
    }, {
      title: "Ramps & doorways",
      body: "Wider doorways and gentle ramps that keep every room reachable, with dignity.",
      img: "../../assets/images/aging-ramp.webp"
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2",
      id: "aging-in-place"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(ServiceIntro, {
      eyebrow: "Aging in place",
      title: "Modifications that preserve independence",
      body: "Walk-in showers, grab bars, ramps, and wider doorways \u2014 thoughtful changes that let people stay safely in the home they love."
    }), /*#__PURE__*/React.createElement(SideTabs, {
      tabs: tabs
    })));
  }
  window.Investors = Investors;
  window.Homeowners = Homeowners;
  window.AgingInPlace = AgingInPlace;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections3.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Testimonials, Gallery, Process */
(function () {
  const {
    Card: S3Card,
    Badge: S3Badge,
    Button: S3Button,
    StarRating: S3Stars,
    Avatar: S3Avatar
  } = window.ReclaimConstructionDesignSystem_813411;
  const {
    Icon: S3Icon
  } = window;
  const {
    useState: useS3
  } = React;
  const REVIEWS = [{
    quote: "They finished two weeks early and came in under budget. That never happens.",
    name: "David Chen",
    role: "Real estate investor",
    img: "../../assets/images/home-testimonial-section-0.jpg"
  }, {
    quote: "Our kitchen is beautiful. More importantly, it works exactly how we imagined.",
    name: "Sarah Mitchell",
    role: "Homeowner, Clayton",
    img: "../../assets/images/home-testimonial-section-1.jpg"
  }, {
    quote: "My mom can move through the house safely now. That's everything to us.",
    name: "Robert Walsh",
    role: "Family, aging in place",
    img: "../../assets/images/home-testimonial-section-2.jpg"
  }, {
    quote: "Every question got a same-day answer. No chasing, no runaround — just a team that does what they say.",
    name: "Angela Foster",
    role: "Homeowner, Webster Groves"
  }, {
    quote: "Three flips with Reclaim now. Predictable budgets, clean work, and they never blow the timeline.",
    name: "Marcus Reed",
    role: "Buy-and-hold investor"
  }, {
    quote: "Curbless shower, grab bars, wider doorways. Dad feels safe and it still looks like home.",
    name: "Tom & Linda Pearce",
    role: "Aging in place"
  }];
  function ReviewCard({
    r
  }) {
    return /*#__PURE__*/React.createElement("figure", {
      className: "rc-tcard"
    }, /*#__PURE__*/React.createElement(S3Stars, {
      value: 5,
      size: 18
    }), /*#__PURE__*/React.createElement("blockquote", {
      className: "lede rc-tcard__q"
    }, "\u201C", r.quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
      className: "rc-tcard__by"
    }, /*#__PURE__*/React.createElement(S3Avatar, {
      src: r.img,
      name: r.name,
      size: "md"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "body",
      style: {
        fontWeight: 600
      }
    }, r.name), /*#__PURE__*/React.createElement("p", {
      className: "body muted"
    }, r.role))));
  }
  function Testimonials() {
    const loop = [...REVIEWS, ...REVIEWS];
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-4",
      id: "reviews"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-16"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow",
      style: {
        color: "var(--color-mantis, #7ac143)"
      }
    }, "Reviews"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: "#fff"
      }
    }, "Real feedback"), /*#__PURE__*/React.createElement("p", {
      className: "lede mt-6",
      style: {
        color: "rgba(255,255,255,.8)"
      }
    }, "From investors, homeowners, and families who trusted us with their projects."))), /*#__PURE__*/React.createElement("div", {
      className: "rc-marquee"
    }, /*#__PURE__*/React.createElement("div", {
      className: "rc-marquee__track"
    }, loop.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
      key: i,
      r: r
    })))));
  }
  function VideoCard({
    img,
    title,
    meta,
    duration
  }) {
    const [mode, setMode] = useS3("after");
    return /*#__PURE__*/React.createElement("div", {
      className: "rounded-img rc-video",
      style: {
        position: "relative",
        overflow: "hidden",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      style: {
        width: "100%",
        aspectRatio: "16 / 11",
        display: "block",
        filter: mode === "before" ? "grayscale(.55) brightness(.78) contrast(.97)" : "none",
        transition: "filter .45s ease"
      },
      src: img,
      alt: title
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.62) 100%)",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "1rem",
        left: "1rem",
        display: "flex",
        gap: "2px",
        padding: "3px",
        borderRadius: "999px",
        background: "rgba(17,28,41,.5)",
        backdropFilter: "blur(6px)"
      }
    }, ["before", "after"].map(m => /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: e => {
        e.stopPropagation();
        setMode(m);
      },
      style: {
        border: "none",
        cursor: "pointer",
        padding: ".35rem .85rem",
        borderRadius: "999px",
        fontFamily: "inherit",
        fontSize: ".68rem",
        fontWeight: 600,
        letterSpacing: ".05em",
        textTransform: "uppercase",
        color: mode === m ? "var(--color-jelly-bean-darkest, #112c41)" : "#fff",
        background: mode === m ? "#fff" : "transparent",
        transition: "all .2s ease"
      }
    }, m))), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: "1rem",
        right: "1rem",
        background: "rgba(17,28,41,.5)",
        backdropFilter: "blur(6px)",
        color: "#fff",
        fontSize: ".72rem",
        fontWeight: 600,
        padding: ".3rem .6rem",
        borderRadius: "6px"
      }
    }, duration), /*#__PURE__*/React.createElement("div", {
      className: "rc-play",
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "4.25rem",
        height: "4.25rem",
        borderRadius: "999px",
        background: "rgba(255,255,255,.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 34px rgba(0,0,0,.4)",
        transition: "transform .2s ease"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-jelly-bean-darkest, #112c41)",
        fontSize: "1.55rem",
        marginLeft: "4px",
        display: "flex"
      }
    }, /*#__PURE__*/React.createElement(S3Icon, {
      name: "play"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "1.25rem",
        right: "1.25rem",
        bottom: "1.1rem",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: "h5",
      style: {
        color: "#fff",
        marginBottom: ".15rem"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "body",
      style: {
        color: "rgba(255,255,255,.82)",
        fontSize: ".85rem"
      }
    }, meta)));
  }
  function Gallery() {
    const projects = [{
      img: "../../assets/images/home-gallery-section-0.jpg",
      title: "Tower Grove bungalow",
      meta: "Full gut rehab · BRRRR",
      duration: "1:24"
    }, {
      img: "../../assets/images/home-gallery-section-1.jpg",
      title: "Soulard two-flat",
      meta: "Rental conversion",
      duration: "2:05"
    }, {
      img: "../../assets/images/home-gallery-section-2.jpg",
      title: "Maplewood kitchen",
      meta: "Kitchen remodel",
      duration: "0:58"
    }, {
      img: "../../assets/images/home-gallery-section-3.jpg",
      title: "Webster Groves bath",
      meta: "Bathroom remodel",
      duration: "1:47"
    }, {
      img: "../../assets/images/home-feature-section-8.jpg",
      title: "Benton Park flip",
      meta: "Fix-and-flip",
      duration: "1:12"
    }, {
      img: "../../assets/images/home-feature-section-6.jpg",
      title: "Kirkwood basement",
      meta: "Basement finish",
      duration: "2:31"
    }];
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2",
      id: "projects"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-20"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Featured projects"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "Before-and-after videos from real St. Louis projects. Tap play to watch the transformation.")), /*#__PURE__*/React.createElement("div", {
      className: "rc-gallery",
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem"
      }
    }, projects.map((p, i) => /*#__PURE__*/React.createElement(VideoCard, _extends({
      key: i
    }, p))))));
  }
  function ProcessCard({
    step,
    title,
    body,
    img,
    big
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bgcard",
      style: {
        minHeight: big ? "100%" : "16rem",
        alignItems: big ? "center" : "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: img,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      className: "scrim"
    })), /*#__PURE__*/React.createElement("div", {
      className: "content",
      style: {
        padding: big ? "3rem" : "2rem"
      }
    }, step && /*#__PURE__*/React.createElement(S3Badge, {
      variant: "outline",
      style: {
        color: "#fff",
        borderColor: "var(--color-white-20)",
        marginBottom: "1rem"
      }
    }, step), /*#__PURE__*/React.createElement("h3", {
      className: big ? "h3" : "h5",
      style: {
        color: "#fff",
        marginBottom: ".75rem",
        fontSize: big ? undefined : "1.5rem",
        lineHeight: big ? undefined : 1.15,
        overflowWrap: "break-word",
        hyphens: "auto"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      className: "body",
      style: {
        color: "rgba(255,255,255,.85)"
      }
    }, body)));
  }
  function Process() {
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2",
      id: "process"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-20"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, "How we work"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Why we're different"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "We don't disappear after the contract is signed. Five straightforward steps, weekly updates, and straight answers from first conversation to final walkthrough. No mystery. No guessing.")), /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2"
    }, /*#__PURE__*/React.createElement(ProcessCard, {
      big: true,
      step: "Step 01",
      title: "Discovery call",
      body: "We listen. You tell us about the project, your timeline, your budget, and what matters most. We ask good questions.",
      img: "../../assets/images/home-how-it-works-section-1.jpg"
    }), /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2"
    }, /*#__PURE__*/React.createElement(ProcessCard, {
      step: "Step 02",
      title: "Site visit",
      body: "We walk the property. We measure. We map what's there.",
      img: "../../assets/images/home-how-it-works-section-2.jpg"
    }), /*#__PURE__*/React.createElement(ProcessCard, {
      step: "Step 03",
      title: "Scope & budget",
      body: "Detailed proposal. Fixed price. You approve up front.",
      img: "../../assets/images/home-how-it-works-section-3.jpg"
    }), /*#__PURE__*/React.createElement(ProcessCard, {
      step: "Step 04",
      title: "Construction",
      body: "We build it. Weekly updates. Same-day answers given.",
      img: "../../assets/images/home-how-it-works-section-4.jpg"
    }), /*#__PURE__*/React.createElement(ProcessCard, {
      step: "Step 05",
      title: "Walkthrough",
      body: "We inspect together. You sign off. The work's done.",
      img: "../../assets/images/home-how-it-works-section-0.jpg"
    })))));
  }
  window.Testimonials = Testimonials;
  window.Gallery = Gallery;
  window.Process = Process;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections4.jsx
try { (() => {
/* About, Service Area, Final CTA */
(function () {
  const {
    Button: S4Button
  } = window.ReclaimConstructionDesignSystem_813411;
  const {
    Icon: S4Icon
  } = window;
  const {
    useState: useS4
  } = React;
  function About({
    onContact
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2",
      id: "about"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "grid cols-2 items-center gap-20"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, "Founders"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Jeff and Maria built this the right way"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted",
      style: {
        margin: "1.5rem 0"
      }
    }, "We started Reclaim because we got tired of watching contractors disappear mid-project and homeowners left holding the bill. St. Louis is home. We treat every job like it's our own."), /*#__PURE__*/React.createElement("div", {
      className: "stack-sm",
      style: {
        marginTop: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "body"
    }, /*#__PURE__*/React.createElement("strong", null, "Licensed & insured"), " in the State of Missouri"), /*#__PURE__*/React.createElement("p", {
      className: "body"
    }, /*#__PURE__*/React.createElement("strong", null, "Local crews"), " \u2014 no rotating subcontractors"), /*#__PURE__*/React.createElement("p", {
      className: "body"
    }, /*#__PURE__*/React.createElement("strong", null, "Workmanship warranty"), " on every project")), /*#__PURE__*/React.createElement("div", {
      className: "btn-row mt-8"
    }, /*#__PURE__*/React.createElement(S4Button, {
      onClick: onContact
    }, "Get a free estimate"))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-img"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      src: "../../assets/images/home-about-section.jpg",
      alt: "Jeff and Maria, founders of Reclaim Construction"
    })))));
  }
  function ServiceArea() {
    const areas = [{
      name: "St. Louis",
      desc: "St. Louis City and St. Louis County, Missouri",
      img: "../../assets/images/home-locations-section-0.jpg"
    }, {
      name: "Clayton",
      desc: "Clayton, Missouri and the surrounding suburbs",
      img: "../../assets/images/home-locations-section-1.jpg"
    }, {
      name: "Webster Groves",
      desc: "Webster Groves and surrounding communities",
      img: "../../assets/images/home-locations-section-2.jpg"
    }];
    const [active, setActive] = useS4(0);
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mw-lg mb-20"
    }, /*#__PURE__*/React.createElement("p", {
      className: "eyebrow"
    }, "Service"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Where we work"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "We serve St. Louis City, St. Louis County, and surrounding communities throughout the region.")), /*#__PURE__*/React.createElement("div", {
      className: "grid",
      style: {
        gridTemplateColumns: ".6fr 1fr",
        gap: "5rem",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, areas.map((a, i) => /*#__PURE__*/React.createElement("button", {
      key: a.name,
      onClick: () => setActive(i),
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        background: "transparent",
        border: "none",
        borderLeft: "2px solid " + (active === i ? "var(--scheme-text)" : "var(--scheme-border)"),
        padding: "1.25rem 0 1.25rem 2rem",
        opacity: active === i ? 1 : 0.55,
        transition: "all .2s ease"
      }
    }, /*#__PURE__*/React.createElement("h5", {
      className: "h5",
      style: {
        marginBottom: ".5rem"
      }
    }, a.name), /*#__PURE__*/React.createElement("p", {
      className: "body muted"
    }, a.desc)))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-img",
      key: active,
      style: {
        animation: "rc-tab-fade .4s ease"
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover aspect-32",
      src: areas[active].img,
      alt: areas[active].name
    })))));
  }
  function FinalCta({
    onSchedule,
    onContact
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-20"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Let's talk about your project"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "A consultation costs nothing. Clarity is worth everything. We'll listen, ask the right questions, and tell you exactly what we can do."), /*#__PURE__*/React.createElement("div", {
      className: "btn-row",
      style: {
        justifyContent: "center",
        marginTop: "2rem"
      }
    }, /*#__PURE__*/React.createElement(S4Button, {
      onClick: onSchedule
    }, "Schedule a consultation"), /*#__PURE__*/React.createElement(S4Button, {
      variant: "secondary",
      onClick: onContact
    }, "Contact us"))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-img"
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      style: {
        maxHeight: "32rem"
      },
      src: "../../assets/images/home-cta-section.jpg",
      alt: "A finished Reclaim project"
    }))));
  }
  window.About = About;
  window.ServiceArea = ServiceArea;
  window.FinalCta = FinalCta;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections5.jsx
try { (() => {
/* Contact form & Footer */
(function () {
  const RC = window.ReclaimConstructionDesignSystem_813411;
  const {
    Button: S5Button,
    Input: S5Input,
    Textarea: S5Textarea,
    Select: S5Select,
    Checkbox: S5Checkbox,
    Radio: S5Radio,
    Label: S5Label
  } = RC;
  const {
    Icon: S5Icon,
    Logo: S5Logo
  } = window;
  const {
    useState: useS5,
    forwardRef: fwdRef
  } = React;
  const ContactForm = fwdRef(function ContactForm(_props, ref) {
    const [sent, setSent] = useS5(false);
    const formRef = React.useRef(null);
    const toForm = () => {
      const el = formRef.current;
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "section scheme-3",
      ref: ref,
      id: "contact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "center mw-lg mx-auto mb-16"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Let's talk about your project"), /*#__PURE__*/React.createElement("p", {
      className: "lede muted mt-6"
    }, "A consultation costs nothing. Clarity is worth everything. We'll listen, ask the right questions, and tell you exactly what we can do."), /*#__PURE__*/React.createElement("div", {
      className: "btn-row",
      style: {
        justifyContent: "center",
        marginTop: "2rem"
      }
    }, /*#__PURE__*/React.createElement(S5Button, {
      onClick: toForm
    }, "Schedule a consultation"), /*#__PURE__*/React.createElement(S5Button, {
      variant: "secondary",
      onClick: toForm
    }, "Contact us"))), /*#__PURE__*/React.createElement("div", {
      className: "rounded-img",
      style: {
        marginBottom: "3rem"
      }
    }, /*#__PURE__*/React.createElement("img", {
      className: "cover",
      style: {
        maxHeight: "32rem"
      },
      src: "../../assets/images/home-cta-section.jpg",
      alt: "A Reclaim consultation"
    })), sent ? /*#__PURE__*/React.createElement("div", {
      ref: formRef,
      className: "scheme-2 rc-contact-panel",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(RC.Badge, {
      variant: "green",
      style: {
        marginBottom: "1rem"
      }
    }, "Message sent"), /*#__PURE__*/React.createElement("h3", {
      className: "h4",
      style: {
        marginBottom: ".75rem"
      }
    }, "Thanks \u2014 we'll be in touch today."), /*#__PURE__*/React.createElement("p", {
      className: "body muted",
      style: {
        maxWidth: "32rem",
        marginInline: "auto"
      }
    }, "A real person from the Reclaim team reviews every request. Expect a call or email within a few hours."), /*#__PURE__*/React.createElement("div", {
      className: "mt-8"
    }, /*#__PURE__*/React.createElement(S5Button, {
      variant: "secondary",
      onClick: () => setSent(false)
    }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
      ref: formRef,
      className: "scheme-2 rc-contact-panel",
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "rc-field-grid rc-field-grid--4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "fn"
    }, "First name"), /*#__PURE__*/React.createElement(S5Input, {
      id: "fn",
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "ln"
    }, "Last name"), /*#__PURE__*/React.createElement(S5Input, {
      id: "ln",
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "em"
    }, "Email"), /*#__PURE__*/React.createElement(S5Input, {
      id: "em",
      type: "email",
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "ph"
    }, "Phone"), /*#__PURE__*/React.createElement(S5Input, {
      id: "ph",
      type: "tel",
      placeholder: "(314) 555-0123",
      required: true
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "addr"
    }, "Property address"), /*#__PURE__*/React.createElement(S5Input, {
      id: "addr",
      placeholder: "Street, city, ZIP"
    })), /*#__PURE__*/React.createElement("div", {
      className: "rc-field-grid rc-field-grid--4"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, null, "Project type"), /*#__PURE__*/React.createElement(S5Select, {
      placeholder: "Select one",
      options: ["Investor rehab", "Kitchen remodel", "Bathroom", "Basement finish", "Whole-home renovation", "Aging in place", "Other"]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, null, "Budget range"), /*#__PURE__*/React.createElement(S5Select, {
      placeholder: "Select one",
      options: ["Under $25k", "$25k–$50k", "$50k–$100k", "$100k–$250k", "$250k+", "Not sure yet"]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, null, "Timeline"), /*#__PURE__*/React.createElement(S5Select, {
      placeholder: "Select one",
      options: ["As soon as possible", "1–3 months", "3–6 months", "6+ months", "Just exploring"]
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(S5Label, null, "Preferred contact"), /*#__PURE__*/React.createElement(S5Select, {
      placeholder: "Select one",
      options: ["Phone call", "Email", "Text message"]
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement(S5Label, null, "Which describes you?"), /*#__PURE__*/React.createElement("div", {
      className: "rc-role-row"
    }, /*#__PURE__*/React.createElement(S5Radio, {
      name: "role",
      defaultChecked: true,
      label: "Real estate investor"
    }), /*#__PURE__*/React.createElement(S5Radio, {
      name: "role",
      label: "Homeowner"
    }), /*#__PURE__*/React.createElement(S5Radio, {
      name: "role",
      label: "Aging in place"
    }), /*#__PURE__*/React.createElement(S5Radio, {
      name: "role",
      label: "Family member"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/React.createElement(S5Label, {
      htmlFor: "msg"
    }, "Tell us about it"), /*#__PURE__*/React.createElement(S5Textarea, {
      id: "msg",
      placeholder: "Describe your project and timeline",
      style: {
        minHeight: "8rem"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "rc-contact-submit"
    }, /*#__PURE__*/React.createElement(S5Checkbox, {
      id: "terms",
      defaultChecked: true,
      label: "I agree to the terms"
    }), /*#__PURE__*/React.createElement(S5Button, {
      type: "submit"
    }, "Submit request")))));
  });
  const FOOT = {
    Services: [{
      label: "Investors",
      id: "investors"
    }, {
      label: "Homeowners",
      id: "homeowners"
    }, {
      label: "Aging in place",
      id: "aging-in-place"
    }, {
      label: "Our process",
      id: "process"
    }],
    Company: [{
      label: "Featured projects",
      id: "projects"
    }, {
      label: "Reviews",
      id: "reviews"
    }, {
      label: "Contact",
      id: "contact"
    }]
  };
  function footScroll(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({
      top: y,
      behavior: "smooth"
    });
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "section scheme-2",
      style: {
        paddingBlock: "5rem"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "2rem",
        paddingBottom: "4rem"
      },
      className: "rc-foot-cols"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      onClick: e => footScroll(e, "top")
    }, /*#__PURE__*/React.createElement(S5Logo, {
      variant: "light",
      height: 75
    })), /*#__PURE__*/React.createElement("p", {
      className: "body muted",
      style: {
        marginTop: "1.25rem",
        maxWidth: "22rem"
      }
    }, "Investor rehabs, home renovations, and aging-in-place modifications. St. Louis built.")), Object.entries(FOOT).map(([head, links]) => /*#__PURE__*/React.createElement("div", {
      key: head
    }, /*#__PURE__*/React.createElement("p", {
      className: "body",
      style: {
        fontWeight: 600,
        marginBottom: "1rem"
      }
    }, head), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: ".5rem"
      }
    }, links.map(l => /*#__PURE__*/React.createElement("li", {
      key: l.id
    }, /*#__PURE__*/React.createElement("a", {
      href: "#" + l.id,
      onClick: e => footScroll(e, l.id),
      className: "body muted"
    }, l.label))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "2rem",
        borderTop: "1px solid var(--scheme-border)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "body muted"
    }, "\xA9 2026 Reclaim Construction. All rights reserved."), /*#__PURE__*/React.createElement("p", {
      className: "body muted"
    }, "St. Louis, Missouri"))));
  }
  window.ContactForm = ContactForm;
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections5.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.js
try { (() => {
/* Reclaim brand icons — inlined from assets/svgs (Relume icon set).
   Usage: <span dangerouslySetInnerHTML> via the Icon component below. */
window.RC_ICONS = {
  chevronDown: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z\" fill=\"currentColor\"></path> </svg>",
  chevronRight: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M6 3L11 8L6 13\" stroke=\"currentColor\" stroke-width=\"1.5\"></path> </svg>",
  play: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M8 5v14l11-7z\"></path> </svg>",
  star: "<svg width=\"1em\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M8.16379 0.551109C8.47316 -0.183704 9.52684 -0.183703 9.83621 0.551111L11.6621 4.88811C11.7926 5.19789 12.0875 5.40955 12.426 5.43636L17.1654 5.81173C17.9684 5.87533 18.294 6.86532 17.6822 7.38306L14.0713 10.4388C13.8134 10.6571 13.7007 10.9996 13.7795 11.3259L14.8827 15.8949C15.0696 16.669 14.2172 17.2809 13.5297 16.8661L9.47208 14.4176C9.18225 14.2427 8.81775 14.2427 8.52793 14.4176L4.47029 16.8661C3.7828 17.2809 2.93036 16.669 3.11727 15.8949L4.22048 11.3259C4.29928 10.9996 4.18664 10.6571 3.92873 10.4388L0.317756 7.38306C-0.294046 6.86532 0.0315611 5.87533 0.834562 5.81173L5.57402 5.43636C5.91255 5.40955 6.20744 5.19789 6.33786 4.88811L8.16379 0.551109Z\" fill=\"currentColor\"></path> </svg>",
  mail: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\"> <path d=\"M3.05359 5.74219V18.9463H20.9462V6.13867L20.1708 6.64844L12.2147 11.8867C12.1544 11.9184 12.102 11.944 12.0565 11.9619C12.0534 11.9629 12.0366 11.9678 11.9999 11.9678C11.9626 11.9678 11.946 11.9628 11.9432 11.9619C11.8975 11.9439 11.8448 11.9186 11.7841 11.8867L4.05359 6.7959V6.39648L11.7264 11.4219L11.9999 11.6016L12.2733 11.4229L20.62 5.97266L21.6307 5.31152C21.6464 5.38933 21.6551 5.46973 21.6552 5.55371V18.4463C21.6552 18.7675 21.5429 19.041 21.2938 19.2891C21.0449 19.5371 20.7701 19.6494 20.4462 19.6494H3.55359C3.23187 19.6494 2.95869 19.5371 2.71082 19.2891L2.6239 19.1953C2.43623 18.9725 2.35046 18.7279 2.35046 18.4463V5.55371C2.35048 5.46519 2.35953 5.38047 2.37683 5.29883L3.05359 5.74219ZM3.55359 4.34473H20.4462C20.7696 4.34473 21.0438 4.4579 21.2928 4.70703H21.2938C21.4035 4.81669 21.485 4.93216 21.5438 5.05371H2.46082C2.5195 4.93172 2.60127 4.81595 2.71082 4.70605H2.71179C2.95976 4.45718 3.23251 4.34476 3.55359 4.34473Z\" fill=\"currentColor\" stroke=\"currentColor\"></path> </svg>",
  phone: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\"> <path d=\"M4.11902 3.34473H7.61902C7.80275 3.34474 7.93038 3.39945 8.03503 3.49805C8.12854 3.58614 8.20705 3.70059 8.2655 3.85156L8.31726 4.01465L8.9823 7.02832C9.01497 7.26011 9.00744 7.44511 8.97253 7.5918C8.94139 7.72276 8.8796 7.83104 8.78015 7.92578L8.77332 7.93164L6.25574 10.415L5.97644 10.6904L6.17664 11.0264C6.60337 11.7435 7.05685 12.416 7.53699 13.042C8.01981 13.6715 8.55599 14.2696 9.14441 14.8369C9.75779 15.4701 10.399 16.0453 11.0682 16.5605C11.7434 17.0804 12.4488 17.5353 13.1844 17.9248L13.5155 18.0996L13.7762 17.832L16.1815 15.3643L16.1913 15.3535C16.3309 15.2021 16.4775 15.111 16.6337 15.0645C16.7647 15.0256 16.8944 15.012 17.0253 15.0215L17.1571 15.0391L19.9774 15.6631C20.1431 15.7092 20.2749 15.7806 20.3817 15.875L20.4813 15.9775C20.5981 16.1186 20.6552 16.2764 20.6552 16.4707V19.8809C20.6552 20.1178 20.581 20.2895 20.4374 20.4316C20.2909 20.5766 20.1181 20.6494 19.8866 20.6494C18.0114 20.6494 16.0911 20.1991 14.1219 19.2842C12.1538 18.3698 10.3229 17.0691 8.62976 15.376C7.0427 13.7889 5.79967 12.0798 4.89539 10.249L4.71863 9.88086C3.80159 7.90938 3.35046 5.99008 3.35046 4.11914C3.35048 3.94128 3.39174 3.79881 3.47351 3.67773L3.56921 3.56348C3.71327 3.41863 3.88502 3.34473 4.11902 3.34473ZM4.06628 4.5752C4.09721 5.28818 4.20923 6.0365 4.39929 6.81836C4.59086 7.60639 4.89058 8.47618 5.2948 9.4248L5.58386 10.1035L6.1073 9.58301L8.12683 7.5752L8.32019 7.38281L8.26257 7.11621L7.69421 4.44922L7.60925 4.05371H4.04382L4.06628 4.5752ZM19.9462 16.377L19.5477 16.2949L17.0624 15.7803L16.7909 15.7246L16.5985 15.9248L14.6356 17.9824L14.1542 18.4863L14.787 18.7812C15.4818 19.1045 16.2353 19.3664 17.0448 19.5693C17.8555 19.7725 18.6477 19.8945 19.4208 19.9336L19.9462 19.96V16.377Z\" fill=\"currentColor\" stroke=\"currentColor\"></path> </svg>",
  pin: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" preserveAspectRatio=\"xMidYMid meet\" aria-hidden=\"true\" role=\"img\"> <path d=\"M11.9999 2.34473C14.0242 2.34473 15.8029 3.04933 17.3553 4.47754C18.8789 5.87913 19.6552 7.7626 19.6552 10.1826C19.6551 11.1679 19.4382 12.1526 18.996 13.1406C18.5425 14.154 17.9734 15.1246 17.288 16.0527C16.5966 16.9889 15.8458 17.8627 15.035 18.6738C14.212 19.4974 13.4447 20.2259 12.7333 20.8594L12.7274 20.8643L12.7225 20.8691C12.632 20.9548 12.5274 21.017 12.4052 21.0566C12.2587 21.1041 12.1215 21.126 11.9921 21.126C11.8628 21.126 11.7292 21.104 11.5897 21.0576C11.474 21.0191 11.3759 20.959 11.2899 20.875L11.2811 20.8662L11.2714 20.8584C10.5564 20.2252 9.78741 19.497 8.96472 18.6738C8.15398 17.8627 7.40315 16.9889 6.71179 16.0527C6.02653 15.1248 5.45811 14.1547 5.00671 13.1416C4.56634 12.1534 4.35052 11.1682 4.35046 10.1826C4.35046 7.76231 5.12659 5.8791 6.64832 4.47754C8.19864 3.04953 9.9756 2.34475 11.9999 2.34473ZM11.9999 3.05371C10.0646 3.05371 8.40981 3.72261 7.06824 5.05664C5.71865 6.39887 5.05359 8.12233 5.05359 10.1826C5.0537 11.6021 5.6475 13.1413 6.75183 14.7861C7.85668 16.4317 9.49736 18.2606 11.6591 20.2715L11.996 20.585L12.3358 20.2764C14.5486 18.2689 16.2062 16.4381 17.2889 14.7852C18.3677 13.138 18.9461 11.5989 18.9462 10.1826C18.9462 8.12228 18.2812 6.39888 16.9315 5.05664V5.05566C15.5897 3.72177 13.935 3.05375 11.9999 3.05371ZM11.9979 8.70215C12.3641 8.7022 12.6619 8.82522 12.9188 9.08105C13.175 9.33617 13.2977 9.63248 13.2977 9.99805C13.2977 10.3642 13.1747 10.6605 12.9198 10.915C12.6649 11.1694 12.3682 11.292 12.0018 11.292C11.6348 11.2919 11.3391 11.169 11.0848 10.916C10.8313 10.6634 10.708 10.3691 10.7079 10.0029C10.7079 9.68146 10.8022 9.41279 10.996 9.17871L11.0848 9.08105C11.3378 8.82567 11.6324 8.70215 11.9979 8.70215Z\" fill=\"currentColor\" stroke=\"currentColor\"></path> </svg>",
  facebook: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z\" fill=\"currentColor\"></path> </svg>",
  instagram: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z\" fill=\"currentColor\"></path> </svg>",
  x: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z\" fill=\"currentColor\"></path> </svg>",
  linkedin: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z\" fill=\"currentColor\"></path> </svg>",
  youtube: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z\" fill=\"currentColor\"></path> </svg>",
  shieldCheck: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path> <path d=\"m9 12 2 2 4-4\"></path> </svg>",
  users: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path> <circle cx=\"9\" cy=\"7\" r=\"4\"></circle> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path> </svg>",
  badgeCheck: "<svg width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\" xmlns=\"http://www.w3.org/2000/svg\"> <path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"></path> <path d=\"m9 12 2 2 4-4\"></path> </svg>"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/website/lib.jsx
try { (() => {
/* Shared helpers for the Reclaim website UI kit. */
(function () {
  const {
    useState
  } = React;

  /** Inline a brand icon from window.RC_ICONS, sized by font-size. */
  function Icon({
    name,
    size = 24,
    className = "",
    style = {}
  }) {
    const svg = (window.RC_ICONS || {})[name] || "";
    return /*#__PURE__*/React.createElement("span", {
      className: "rc-ic " + className,
      style: {
        display: "inline-flex",
        fontSize: size,
        lineHeight: 0,
        ...style
      },
      dangerouslySetInnerHTML: {
        __html: svg
      }
    });
  }

  /** Reclaim stacked lockup. `variant` = "dark" (white mark, for dark bg)
   *  or "light" (grey mark, for light bg). */
  function Logo({
    variant = "light",
    height = 56
  }) {
    const src = variant === "dark" ? "../../assets/logo/reclaim-logo-white.png" : "../../assets/logo/reclaim-logo.png";
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "Reclaim Construction",
      style: {
        height,
        display: "block"
      }
    });
  }
  window.Icon = Icon;
  window.Logo = Logo;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/lib.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

})();
