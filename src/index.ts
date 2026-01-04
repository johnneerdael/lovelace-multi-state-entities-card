// Main entry point - exports and registers all components

// Register the main card
export { LovelaceMultiStateEntitiesCard } from './lovelace-multi-state-entities-card';

// Register the editor
export { LovelaceMultiStateEntitiesCardEditor } from './editor';

// Export types for external use
export type {
  StatusBannerCardConfig,
  StateRule,
  DisplayConfig,
  DisplayData,
  ButtonAction,
} from './types';