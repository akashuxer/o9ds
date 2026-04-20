import { HybridPopoverEmptyConfig } from './HybridPopover';
export interface EmptyStateProps {
    kind: 'no-data' | 'no-results';
    config?: HybridPopoverEmptyConfig;
    onClear?: () => void;
}
export declare function EmptyState({ kind, config, onClear }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export default EmptyState;
//# sourceMappingURL=EmptyState.d.ts.map