import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/cn'

/**
 * Interactive grid ripple on click (ported from shadcn-style demo).
 * This repo uses Vite + React + Tailwind v3 + JS (not shadcn CLI / TS / Tailwind v4).
 */
export function BackgroundRippleEffect({
  rows: rowsProp,
  cols: colsProp,
  cellSize: cellSizeProp,
  interactive = true,
}) {
  const [clickedCell, setClickedCell] = useState(null)
  const [rippleKey, setRippleKey] = useState(0)
  const [dims, setDims] = useState({ rows: 12, cols: 24, cell: 48 })

  useEffect(() => {
    const fn = () => {
      const cell = window.innerWidth < 640 ? 44 : 52
      const cols = Math.min(56, Math.ceil(window.innerWidth / cell) + 4)
      const rows = Math.min(40, Math.ceil(window.innerHeight / cell) + 4)
      setDims({ rows, cols, cell })
    }
    fn()
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const rows = rowsProp ?? dims.rows
  const cols = colsProp ?? dims.cols
  const cellSize = cellSizeProp ?? dims.cell

  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full',
        '[--cell-border-color:#d4d4d8] [--cell-fill-color:#f4f4f5] [--cell-shadow-color:#71717a]',
        /* Dark: subtle but readable grid — visible mesh without heavy noise */
        'dark:[--cell-border-color:#3f3f46] dark:[--cell-fill-color:#0a0a0a] dark:[--cell-shadow-color:#525252]',
      )}
    >
      <div className="relative h-auto w-auto overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-hidden" />
        <DivGrid
          key={`base-${rippleKey}`}
          className="opacity-[0.45] dark:opacity-[0.36]"
          rows={rows}
          cols={cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={interactive ? clickedCell : null}
          onCellClick={
            interactive
              ? (row, col) => {
                  setClickedCell({ row, col })
                  setRippleKey((k) => k + 1)
                }
              : undefined
          }
          interactive={interactive}
        />
      </div>
    </div>
  )
}

function DivGrid({
  className,
  rows = 7,
  cols = 30,
  cellSize = 56,
  borderColor = '#3f3f46',
  fillColor = 'rgba(14, 165, 233, 0.3)',
  clickedCell = null,
  onCellClick,
  interactive = true,
}) {
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, idx) => idx), [rows, cols])

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: cols * cellSize,
    height: rows * cellSize,
    marginInline: 'auto',
  }

  return (
    <div className={cn('relative z-[3]', className)} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols)
        const colIdx = idx % cols
        const distance = clickedCell ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx) : 0
        const delay = clickedCell ? Math.max(0, distance * 55) : 0
        const duration = 200 + distance * 80

        const cellStyle =
          clickedCell !== null && clickedCell !== undefined
            ? {
                '--delay': `${delay}ms`,
                '--duration': `${duration}ms`,
                backgroundColor: fillColor,
                borderColor,
              }
            : {
                backgroundColor: fillColor,
                borderColor,
              }

        return (
          <div
            key={idx}
            className={cn(
              'cell relative border-[0.5px] opacity-40 transition-opacity duration-150 will-change-transform hover:opacity-80 dark:opacity-[0.32] dark:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.04)] dark:hover:opacity-[0.48]',
              clickedCell && 'arvo-cell-ripple',
              !interactive && 'pointer-events-none',
            )}
            style={cellStyle}
            onClick={interactive && onCellClick ? () => onCellClick(rowIdx, colIdx) : undefined}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            onKeyDown={
              interactive && onCellClick
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onCellClick(rowIdx, colIdx)
                    }
                  }
                : undefined
            }
          />
        )
      })}
    </div>
  )
}
