# Button

## Overview

Button is a text-labeled control with variant and size options. Both default to `default`, and the label is supplied as a string. The extraction measured only the default embedded Button because its 48 variant and size combinations exceed the plugin's 20-combination cap, so alternate geometry and color details remain unmeasured.

**Source:** [Figma](https://www.figma.com/design/3fYvJmGdANb2WTPecHjMfH/Vibe-Design-Workshop?node-id=38-35) · **Variants:** none

## Composition

- **Button** — constitutive · 34:1657. Set by designer in the uSpec Extract plugin.

## Anatomy

```text
Button (component)
└─ Button (instance)
   └─ Label (text)
```

## Implementation invariants

- Optional-property defaults: `label`=Button, `variant`=default, `size`=default.
- The target is a single Button component containing one constitutive Button instance. Root strokeWeight is configured as 1 but strokeSemantics.painted=false, so no visible border is documented. Phase I skipped "Button" sub-component variant walk (48 combos > cap 20). A read-only delta was attempted for the skipped 48-combination sub-component walk but the Figma MCP connection required reauthentication; unavailable Size cells remain em dashes.
- Accessibility focus stops: 1; visual variants must not alter reading order.

## API

> The component exposes the label, visual variant, and size of its Button control. Interaction behavior such as click handling is supplied by the consuming application.

### Component API

| Property | Type | Values | Default | Notes |
|---|---|---|---|---|
| label | string | — | Button | Text shown inside the button. |
| variant | enum | default \| secondary \| destructive \| ghost \| outline \| link | default | Controls the button's visual treatment. |
| size | enum | default \| xs \| sm \| lg \| icon \| icon-xs \| icon-sm \| icon-lg | default | Controls the button's dimensions and content layout. |

### Default action

| Property | Value | Notes |
|---|---|---|
| label | Continue | Primary action text. |
| variant | default | Standard emphasis. |
| size | default | Default dimensions. |

### Destructive action

| Property | Value | Notes |
|---|---|---|
| label | Delete | Names the destructive action. |
| variant | destructive | Communicates a destructive action. |
| size | default | Default dimensions. |

## Structure

### Button structure

Host component wrapper dimensions. Width and height are HUG sizing modes, so measured pixels are not fixed constraints.

| Spec | Default | Notes |
|---|---|---|
| Container | – | Host component wrapper |
| ↳ widthMode | HUG | HUG content sizing |
| ↳ heightMode | HUG | HUG content sizing |
| ↳ itemSpacing | 0 | No root child gap |
| ↳ counterAxisSpacing | 0 | No cross-axis gap |
| ↳ padding | 0 | No host inset |
| ↳ cornerRadius | 0 | Wrapper is square |
| ↳ borderWidth | none | Configured stroke is unpainted |
| ↳ borderWidth | none | No visible border alignment |
| ↳ primaryAxisAlignItems | MIN | Default leading alignment |
| ↳ counterAxisAlignItems | MIN | Default cross-axis alignment |
| ↳ widthMode | HUG | HUG content sizing |
| ↳ heightMode | HUG | HUG content sizing |
| ↳ clipsContent | false | Overflow remains visible |

### Button

Constitutive Button instance internals. The own Variant x Size walk was skipped (cross-product 48 exceeds cap 20); the embedded default is measured and remaining Size columns are unavailable.

| Spec | default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Button instance | – | – | – | – | – | – | – | – | Constitutive Button instance |
| ↳ width | 68 | — | — | — | — | — | — | — | Default embedded width; other sizes not measured |
| ↳ height | 36 | — | — | — | — | — | — | — | Default embedded height; other sizes not measured |
| ↳ itemSpacing | spacing/icon (4) | — | — | — | — | — | — | — | Spacing token between icon and label |
| ↳ counterAxisSpacing | 0 | — | — | — | — | — | — | — | No cross-axis gap |
| ↳ verticalPadding | 0 | — | — | — | — | — | — | — | Vertical inset is zero |
| ↳ horizontalPadding | spacing/small (12) | — | — | — | — | — | — | — | Uses spacing/small token |
| ↳ cornerRadius | 9999 | — | — | — | — | — | — | — | Pill radius scales with height |
| ↳ borderWidth | none | — | — | — | — | — | — | — | No visible child border |
| ↳ primaryAxisAlignItems | CENTER | — | — | — | — | — | — | — | Centers content on primary axis |
| ↳ counterAxisAlignItems | CENTER | — | — | — | — | — | — | — | Centers content on cross axis |
| ↳ widthMode | HUG | — | — | — | — | — | — | — | HUG follows label content |
| ↳ heightMode | FIXED | — | — | — | — | — | — | — | Fixed control height |
| ↳ clipsContent | true | — | — | — | — | — | — | — | Clips child overflow |
| Label | – | – | – | – | – | – | – | – | Visible button label |
| ↳ width | 44 | — | — | — | — | — | — | — | Measured text bounds |
| ↳ height | 20 | — | — | — | — | — | — | — | Measured text bounds |
| ↳ strokeWeight | 1 | — | — | — | — | — | — | — | Text paint metadata |
| ↳ strokeAlign | inside | — | — | — | — | — | — | — | Text paint metadata |
| ↳ widthMode | HUG | — | — | — | — | — | — | — | HUG text width |
| ↳ heightMode | HUG | — | — | — | — | — | — | — | HUG text height |
| ↳ fontSize | 14 | — | — | — | — | — | — | — | Label type scale |
| ↳ fontFamily | Inter | — | — | — | — | — | — | — | Label font family |
| ↳ fontWeight | Medium | — | — | — | — | — | — | — | Label emphasis |
| ↳ lineHeight | 20 | — | — | — | — | — | — | — | Readable label line box |
| ↳ letterSpacing | -0.18 | — | — | — | — | — | — | — | Tracking from inline typography |

## Color

| Context | Element | Token | Notes |
|---|---|---|---|
| Button | Button fill | color/surface/light · #FFFCE1 | Button surface fill |
| Button | Label | color/background/canvas · #0E100F | Button label text color |

## Accessibility

- Focus order: the Button is the only focus stop, so no separate focus order section is needed; the visible Label merges into the button's accessible name.
- Keep the single focus stop stable across runtime states so screen-reader gestures remain predictable.
- Do not stuff the accessible name with the hint, value, and error; each belongs on its dedicated property when those states exist.
- iOS uses accessibilityElement/accessibilityTraits, Android uses merged semantics and Role.Button, and Web should prefer a native <button>; keep the same name and button role across platforms.
- Do not expose the visible Label as a second focus stop or announce it twice.

### enabled

Default enabled button with the visible label Button.

| Platform | Native implementation | Announcement | Role and focus | Nested content | Guardrails | Order |
|---|---|---|---|---|---|---|
| VoiceOver (iOS) | — | Button, button | .isButton | — | Do not: Expose the visible label as a separate focus stop | 1 |
| TalkBack (Android) | — | Button, button, double-tap to activate | Role.Button | — | Do not: Expose the visible label as a separate focus stop | 1 |
| ARIA (Web) | <button> | Button, button | button | — | Do not: Expose the visible label as a separate focus stop | 1 |

## Known gaps

- Button / Button instance: source target is unresolved
- Button / Label: source target is unresolved
- structure: Observed constitutive child Button is not represented in ApiDictionary.subComponents.

## Evidence coverage

| Domain | Total | Emitted | Merged | Omitted | Unresolved |
|---|---|---|---|---|---|
| api | 2 | 1 | 1 | 0 | 0 |
| structure | 55 | 37 | 18 | 0 | 0 |
| color | 2 | 2 | 0 | 0 | 0 |
| voice | 2 | 1 | 1 | 0 | 0 |

---

Canonical JSON: `button.json`
