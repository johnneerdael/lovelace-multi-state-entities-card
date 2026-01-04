# Development Plan - Status Banner Card

## 1. Documentation & UI Polish (Immediate Priority)

- [x] **Table Refinement:** Increase the width of the first column ("Blueprint") in Tables 2 and 3 of `blueprints/README.md` to ensure consistent alignment across different screen sizes.
- [x] **Import Button Audit:** Verify all 20 use-cases in the summary table point to existing and valid blueprint files.

## 2. Component Logic Enhancements

- [ ] **Multiple Action Buttons:**
  - Modify `src/lovelace-multi-state-entities-card.ts` to iterate over the `button_actions` array.
  - Ensure layout handles 2-3 buttons gracefully in the footer.
- [ ] **Animation Engine:**
  - Add CSS keyframes to `src/styles.ts`:
    - `blink`: High-urgency toggle.
    - `shimmer`: Subtle movement.
    - `zebra-scroll`: Animated background patterns.
  - Update `src/types.ts` to include `animation` in `StateRule`.
  - Update `src/rules/matcher.ts` to pass animation data to the component.

## 3. Advanced Features

- [ ] **Conditional Buttons:** Add `rule_id` or similar to `ButtonAction` to only show specific buttons when certain rules are active.
- [ ] **Template Filters:** Add more formatting filters (e.g., `relative_time`, `duration`).
