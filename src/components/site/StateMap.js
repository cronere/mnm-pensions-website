import { STATE_GRID, STATES_HIGH } from '@/content/site'

// Tile-grid map. The highlighted states come from STATES_HIGH.
export default function StateMap() {
  const high = new Set(STATES_HIGH)
  return (
    <figure className="statemap-wrap">
      <div
        className="statemap"
        role="img"
        aria-label={`Map of the United States with ${STATES_HIGH.join(', ')} highlighted`}
      >
        {STATE_GRID.map(([ab, col, row, name]) => (
          <span
            key={ab}
            className={`tile${high.has(name) ? ' on' : ''}`}
            style={{ gridColumn: col, gridRow: row }}
            aria-hidden="true"
            title={name}
          >
            {ab}
          </span>
        ))}
      </div>
      <figcaption className="legend">
        <span><i className="sw on" />Seven states with the most participants outside Social Security</span>
        <span><i className="sw" />All other states</span>
      </figcaption>
    </figure>
  )
}
